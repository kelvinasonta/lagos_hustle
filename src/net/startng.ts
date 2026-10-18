// Talks to start.ng through its hidden connect page or provides local mock mode.
export const START_NG = 'https://start.ng';
let frame: Promise<HTMLIFrameElement> | null = null;

export interface StartNgUser {
  id: number;
  name: string;
  account: string;
  style: {
    body: 'female' | 'male';
    primaryColor: string;
    secondaryColor: string;
    skinColor: string;
    hairColor: string;
    hair: string;
    hat: string;
    accessory: string;
  };
  face: string;
}

export interface WhoAmIReply {
  type: string;
  user: StartNgUser | null;
  guest: StartNgUser;
}

const MOCK_GUEST: StartNgUser = {
  id: 0,
  name: 'Lagos Hustler',
  account: 'guest_eko',
  style: {
    body: 'male',
    primaryColor: '#fbc531',
    secondaryColor: '#2f3640',
    skinColor: '#8d5524',
    hairColor: '#1e272e',
    hair: 'short',
    hat: 'cap',
    accessory: 'glasses'
  },
  face: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" fill="%23fbc531"/><circle cx="32" cy="24" r="14" fill="%238d5524"/><rect x="18" y="42" width="28" height="22" rx="6" fill="%232f3640"/></svg>'
};

export function isMockMode(): boolean {
  const params = new URLSearchParams(window.location.search);
  return params.has('mock') || window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
}

function connectFrame(): Promise<HTMLIFrameElement> {
  if (frame) return frame;
  frame = new Promise((resolve, reject) => {
    const el = document.createElement('iframe');
    el.src = `${START_NG}/connect`;
    el.hidden = true;
    el.onload = () => resolve(el);
    el.onerror = reject;
    document.body.append(el);
  });
  return frame;
}

export async function askStartNg<T = any>(message: Record<string, any>, replyType: string, timeoutMs = 4000): Promise<T | null> {
  // If in local mock mode and not on start.ng, immediately return mock responses
  if (isMockMode()) {
    if (message.type === 'startng:whoami') {
      return {
        type: 'startng:user',
        user: null, // guest locally
        guest: MOCK_GUEST
      } as T;
    }
    if (message.type === 'startng:score') {
      return {
        ok: true,
        result: {
          best: 1000,
          improved: true,
          rank: 1,
          stats: message.stats || { score: message.score }
        }
      } as T;
    }
    if (message.type === 'startng:leaderboard') {
      return {
        ok: true,
        entries: [
          { rank: 1, player_id: 101, name: 'Danfo King', color: '#fbc531', score: 25000, stats: { earnings: 25000, deliveries: 18, distance_km: 42, best_time: 140 } },
          { rank: 2, player_id: 102, name: 'Lekki Rider', color: '#4b7bec', score: 18400, stats: { earnings: 18400, deliveries: 12, distance_km: 30, best_time: 155 } }
        ]
      } as T;
    }
  }

  try {
    const el = await connectFrame();
    return new Promise((resolve) => {
      const requestId = Math.random().toString(36).slice(2);
      let timer: number;
      const done = (reply: any) => {
        clearTimeout(timer);
        window.removeEventListener('message', onMessage);
        resolve(reply);
      };
      timer = window.setTimeout(() => done(null), timeoutMs);
      function onMessage(e: MessageEvent) {
        if (e.origin !== START_NG || e.source !== el.contentWindow) return;
        if (e.data?.type === replyType && e.data.requestId === requestId) {
          done(e.data);
        }
      }
      window.addEventListener('message', onMessage);
      el.contentWindow?.postMessage({ ...message, requestId }, START_NG);
    });
  } catch (err) {
    console.warn('start.ng connect unavailable, falling back:', err);
    return null;
  }
}

export interface LeaderboardEntry {
  rank: number;
  player_id: number;
  name: string;
  color?: string;
  score?: number;
  stats?: {
    earnings?: number;
    deliveries?: number;
    distance_km?: number;
    best_time?: number;
    [key: string]: any;
  };
}

export interface ScoreSubmissionResult {
  ok: boolean;
  error?: string;
  result?: {
    best: number;
    improved: boolean;
    rank: number;
    stats: {
      earnings: number;
      deliveries: number;
      distance_km: number;
      best_time: number;
    };
  };
}

export interface GameStats {
  earnings: number;
  deliveries: number;
  distance_km: number;
  best_time: number;
}

export async function submitScore(stats: GameStats): Promise<ScoreSubmissionResult | null> {
  // Try HTTP API first if session is available in sessionStorage
  const sessionToken = sessionStorage.getItem('startng_session');
  const gameName = window.location.hostname.split('.')[0] || 'lagos-hustle';

  if (sessionToken) {
    try {
      const res = await fetch(`https://api.start.ng/games/${gameName}/scores`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${sessionToken}`
        },
        body: JSON.stringify({ stats })
      });
      if (res.ok) {
        const json = await res.json();
        return { ok: true, result: json };
      }
    } catch (e) {
      console.warn('HTTP score save failed, falling back to connect iframe:', e);
    }
  }

  // Fallback to connect iframe postMessage
  const reply = await askStartNg<any>(
    { type: 'startng:score', stats },
    'startng:scoreSaved',
    4000
  );
  return reply;
}

export async function fetchLeaderboard(limit = 15): Promise<LeaderboardEntry[]> {
  const gameName = window.location.hostname.split('.')[0] || 'lagos-hustle';

  // Try HTTP first
  try {
    const res = await fetch(`https://api.start.ng/games/${gameName}/leaderboard?limit=${limit}`);
    if (res.ok) {
      const entries = await res.json();
      if (Array.isArray(entries)) {
        return entries;
      }
    }
  } catch (e) {
    console.warn('HTTP leaderboard fetch failed, falling back to connect:', e);
  }

  // Fallback to iframe
  const reply = await askStartNg<any>(
    { type: 'startng:leaderboard', limit },
    'startng:leaderboardData',
    4000
  );
  if (reply?.entries && Array.isArray(reply.entries)) {
    return reply.entries;
  }
  return [];
}

export function redirectToSignIn() {
  const returnTo = encodeURIComponent(window.location.origin + window.location.pathname);
  window.location.href = `https://start.ng/?return_to=${returnTo}`;
}
