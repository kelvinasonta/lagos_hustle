/**
 * Web Worker for Chunk Streaming
 * Simulates procedural generation & chunk parsing off the main thread.
 */

self.onmessage = (e: MessageEvent) => {
  const { action, chunkX, chunkZ, chunkSize = 100 } = e.data;

  if (action === 'loadChunk') {
    const t0 = performance.now();

    // Procedural generation of a 100m x 100m block
    // Generates road strip + 4 building plot bounding boxes
    const buildings = [];
    const count = 4;

    for (let i = 0; i < count; i++) {
      const bx = (i % 2 === 0 ? -1 : 1) * 25 + (chunkX * chunkSize);
      const bz = (i < 2 ? -1 : 1) * 25 + (chunkZ * chunkSize);
      const height = 15 + Math.abs(Math.sin(chunkX * 13 + chunkZ * 7 + i)) * 35;
      const width = 18;
      const depth = 20;

      buildings.push({
        id: `${chunkX}_${chunkZ}_b${i}`,
        x: bx,
        y: height / 2,
        z: bz,
        width,
        height,
        depth,
        color: i % 2 === 0 ? '#dcdde1' : '#f5f6fa'
      });
    }

    const t1 = performance.now();

    self.postMessage({
      action: 'chunkLoaded',
      chunkX,
      chunkZ,
      buildings,
      generationTimeMs: t1 - t0
    });
  } else if (action === 'unloadChunk') {
    self.postMessage({
      action: 'chunkUnloaded',
      chunkX,
      chunkZ
    });
  }
};
