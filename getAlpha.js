// var hasAlpha = require('./alphaTest.js');
var fs = require('fs');
const { Image } = require('image-js');

let imageFolder = './images'
fs.readdir(imageFolder, async (err, files) => {
  if (err) throw err;

  for (const file of files) {
    console.log("file======",file);
    let isAlpha = await hasAlpha(`${imageFolder}/${file}`);
    console.log("isAlpha",isAlpha);
    if(isAlpha !== 'true' || isAplha !== 'false'){
      console.log(`${imageFolder}/${file}: %s`, isAlpha ? 'yes' : 'no');
    }
  }
})

async function hasAlpha(png) {
  if ('string' == typeof png) return await fromFile(png);
  return 6 == png[25];
}

async function fromFile(file) {
  var rating = new Promise(async function (resolve, reject) {
    var buf = new Buffer.alloc(1);
    fs.open(file, 'r', function(err, fd){
      if (err) resolve(err);
      fs.read(fd, buf, 0, 1, 25, function(err, read, buf){
        if (err) resolve(err);
        fs.close(fd, function(err){
          if (err) resolve(err);
          resolve(6 == buf[0]);
        });
      });
    });
  })

  await rating;
  let value = await Promise.resolve(rating)
  return value;
}



// let a = hasAlpha('bxr.png')
//   console.log("A",a);

// hasAlpha('./images/batcat.png', function(err, yes){
//   if (err) throw err;
// console.log("Yes",yes);
//   console.log('macbook vvaa: %s', yes ? 'yes' : 'no');
// });



// var buf = fs.readFileSync('macbook.png');
// console.log('macbook: %s', hasAlpha(buf) ? 'yes' : 'no');

// var buf = fs.readFileSync('bxr.png');
// console.log('bxr: %s', hasAlpha(buf) ? 'yes' : 'no');