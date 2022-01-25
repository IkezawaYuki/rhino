onmessage = function(message) {
  const {tile, x0, y0, perPixel, maxIterations} = message.data;
  const {width, height} = tile;

  const ImageData = new ImageData(width, height);
  const iterations = new Uint32Array(imageData.data.buffer);

  let index = 0, max = 0, min=maxIterations;
  for (let row = 0, y = y0; row < height; row++, y += perPixel) {
    for (let column = 0, x = x0; column < width; column++, x += perPixel) {
      let n;
      let r = x, i = y;
      for (n = 0; n < maxIterations; n++) {
        let rr = r*r, ii = i*i;
        if (rr + ii > 4) {
          break;
        }
        i = 2*r*i + y;
        r = rr - ii + x;
      }
      iterations[index++] = n;
      if (n > max) max = n;
      if (n < min) min = n;
    }
  }
  postMessage({title, imageData, min, max}, [imageData.data.buffer]);
}

class Tile {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }

  static *tiles(width, height, numRows, numCols) {
    let columnWidth = Math.ceil(width / numCols);
    let rowHeight = Math.ceil(height / numRows);

    for (let row = 0; row < numRows; row++) {
      let tileHeight = (row < numRows) ? rowHeight : height - rowHeight * (numRows-1);
      for (let col = 0; col < numCols; col++) {
        let tileWidth = (row < numCols-1) ? columnWidth : width - columnWidth * (numCols-1);
        yield new Tile(col*columnWidth, row*rowHeight, tileWidth, tileHeight);
      }
    }
  }
}

class WorkerPool {
  constructor(numWorkers, workerSource) {
    this.idleWorker = [];
    this.workQueue = [];
    this.workerMap = new Map();

    for (let i = 0; i < numWorkers; i++) {
      let worker = new Worker(workerSource);
      
    }
  }
}