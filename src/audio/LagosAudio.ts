/**
 * Lagos Sound System using Web Audio API
 * Generates dynamic, realistic Lagos street audio without heavy external audio files:
 * - Danfo Horns ("Pee-Peeep!")
 * - Okada / Scooter engine buzz and throttle
 * - Bicycle ding-ding bell
 * - Car / Danfo engine revving
 * - Cash register chime and tip sound
 * - Traffic collision crash thump
 * - LASTMA / Police siren chirp
 */

class LagosAudio {
  private ctx: AudioContext | null = null;
  private engineOsc: OscillatorNode | null = null;
  private engineGain: GainNode | null = null;
  private isEngineRunning: boolean = false;
  private currentVehicleType: string = 'none';

  private initContext() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Energetic Lagos Intro fanfare / jingle
   */
  public playIntroJingle() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      // Vibrant afro-arcade chord progression: C, E, G, B, C5
      const notes = [261.63, 329.63, 392.00, 523.25, 659.25];
      notes.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        const start = t + idx * 0.08;
        osc.frequency.setValueAtTime(freq, start);
        gain.gain.setValueAtTime(0.2, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(start);
        osc.stop(start + 0.55);
      });
    } catch (e) {}
  }

  /**
   * Classic Lagos Danfo dual-tone horn ("Pee-Peeep!!")
   */
  public playDanfoHorn() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc1.type = 'sawtooth';
      osc2.type = 'sawtooth';

      // Lagos bus dual horn pitches (approx 440Hz & 554Hz)
      osc1.frequency.setValueAtTime(440, t);
      osc2.frequency.setValueAtTime(554, t);

      // 2 quick sharp beeps
      gain.gain.setValueAtTime(0, t);
      gain.gain.linearRampToValueAtTime(0.25, t + 0.02);
      gain.gain.linearRampToValueAtTime(0.2, t + 0.12);
      gain.gain.linearRampToValueAtTime(0.01, t + 0.14);
      gain.gain.linearRampToValueAtTime(0.25, t + 0.17);
      gain.gain.linearRampToValueAtTime(0.2, t + 0.32);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.38);

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1400, t);

      osc1.connect(filter);
      osc2.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      osc1.start(t);
      osc2.start(t);
      osc1.stop(t + 0.4);
      osc2.stop(t + 0.4);
    } catch (e) {}
  }

  /**
   * Crisp double bicycle bell ("Ting-Ting!")
   */
  public playBicycleBell() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      [0, 0.12].forEach((offset) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(2093, t + offset); // C7 high metallic ring

        gain.gain.setValueAtTime(0.2, t + offset);
        gain.gain.exponentialRampToValueAtTime(0.001, t + offset + 0.28);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(t + offset);
        osc.stop(t + offset + 0.3);
      });
    } catch (e) {}
  }

  /**
   * Traffic accident / hit thump
   */
  public playCrashSound() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      // Low frequency punch
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(120, t);
      osc.frequency.exponentialRampToValueAtTime(30, t + 0.4);

      gain.gain.setValueAtTime(0.6, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(t);
      osc.stop(t + 0.5);

      // Noise burst for crunch
      const bufferSize = this.ctx.sampleRate * 0.25;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = noiseBuffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = 'bandpass';
      noiseFilter.frequency.setValueAtTime(800, t);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.4, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.25);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ctx.destination);

      noise.start(t);
    } catch (e) {}
  }

  /**
   * Cash register + tip chime on delivery success
   */
  public playCashChime(isTip: boolean = false) {
    try {
      this.initContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;

      const freqs = isTip ? [659.25, 880, 1174.66, 1760] : [587.33, 880.0, 1174.66];
      freqs.forEach((freq, idx) => {
        if (!this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
        const startT = t + idx * 0.08;
        osc.frequency.setValueAtTime(freq, startT);

        gain.gain.setValueAtTime(0.28, startT);
        gain.gain.exponentialRampToValueAtTime(0.001, startT + 0.45);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startT);
        osc.stop(startT + 0.5);
      });
    } catch (e) {}
  }

  /**
   * Parcel pickup whoosh sound
   */
  public playPickup() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(320, t);
      osc.frequency.exponentialRampToValueAtTime(740, t + 0.18);

      gain.gain.setValueAtTime(0.25, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.22);
    } catch (e) {}
  }

  /**
   * LASTMA / Police Siren Chirp (warning when running red lights or checkpoint)
   */
  public playSirenChirp() {
    try {
      this.initContext();
      if (!this.ctx) return;
      const t = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(650, t);
      osc.frequency.linearRampToValueAtTime(950, t + 0.12);
      osc.frequency.linearRampToValueAtTime(650, t + 0.24);

      gain.gain.setValueAtTime(0.2, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.28);

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(t);
      osc.stop(t + 0.3);
    } catch (e) {}
  }

  /**
   * Dynamic continuous vehicle engine audio loop (pitch rises with speed)
   */
  public updateEngineSound(vehicleType: string | null, speed: number, maxSpeed: number) {
    try {
      if (!vehicleType || vehicleType === 'none' || vehicleType === 'bicycle') {
        if (this.isEngineRunning && this.engineGain && this.ctx) {
          this.engineGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 0.1);
          setTimeout(() => {
            if (this.engineOsc) {
              this.engineOsc.stop();
              this.engineOsc.disconnect();
              this.engineOsc = null;
            }
            this.isEngineRunning = false;
          }, 120);
        }
        return;
      }

      this.initContext();
      if (!this.ctx) return;

      const t = this.ctx.currentTime;
      const speedRatio = Math.min(1.0, Math.abs(speed) / (maxSpeed || 15.0));

      if (!this.isEngineRunning || this.currentVehicleType !== vehicleType) {
        if (this.engineOsc) {
          this.engineOsc.stop();
          this.engineOsc.disconnect();
        }

        this.engineOsc = this.ctx.createOscillator();
        this.engineGain = this.ctx.createGain();

        if (vehicleType === 'scooter') {
          // Okada 2-stroke buzzy engine
          this.engineOsc.type = 'sawtooth';
          this.engineGain.gain.setValueAtTime(0.06, t);
        } else if (vehicleType === 'danfo' || vehicleType === 'keke') {
          // Heavy diesel chug
          this.engineOsc.type = 'square';
          this.engineGain.gain.setValueAtTime(0.08, t);
        } else {
          this.engineOsc.type = 'triangle';
          this.engineGain.gain.setValueAtTime(0.07, t);
        }

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(vehicleType === 'scooter' ? 650 : 400, t);

        this.engineOsc.connect(filter);
        filter.connect(this.engineGain);
        this.engineGain.connect(this.ctx.destination);

        this.engineOsc.start(t);
        this.isEngineRunning = true;
        this.currentVehicleType = vehicleType;
      }

      if (this.engineOsc && this.engineGain) {
        // Frequency modulation with speed
        const baseFreq = vehicleType === 'scooter' ? 75 : 45;
        const targetFreq = baseFreq + speedRatio * (vehicleType === 'scooter' ? 160 : 90);
        this.engineOsc.frequency.setTargetAtTime(targetFreq, t, 0.05);

        const targetGain = 0.05 + speedRatio * 0.07;
        this.engineGain.gain.setTargetAtTime(targetGain, t, 0.05);
      }
    } catch (e) {}
  }
}

export const lagosAudio = new LagosAudio();
