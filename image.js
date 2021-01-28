const { Image } = require('image-js');
// Loading an image is asynchronous and will return a Promise.
Image.load('./fifth.jpg').then(function (image) {
    console.log('Width', image.width);
    console.log('Height', image.height);
    console.log('colorModel', image.colorModel);
    console.log('components', image.components);
    console.log('alpha', image.alpha);
    console.log('channels', image.channels);
    console.log('bitDepth', image.bitDepth);
    let textureUsed = 3 ;
    let bitsUsagePerPx =   image.bitDepth * textureUsed;
    let bytesUsagePerPx = bitsUsagePerPx / 8 ;
    let memoryUsage = bytesUsagePerPx * (Number(image.width) * Number(image.height));
    if(image.colorModel == "RGB" || image.colorModel == "RGBA" || image.colorModel == "RGB24"){
        memoryUsage = 2 * memoryUsage;
    }
    console.log("memoryUsage",memoryUsage);
  });

  