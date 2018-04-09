//https://www.youtube.com/watch?v=aircAruvnKk
//https://www.youtube.com/watch?v=5cFUZ03Sbhc

var url = 'https://www.youtube.com/watch?v=5cFUZ03Sbhc';
const fs = require('fs');
const ytdl = require('ytdl-core');

// ytdl(url)
//   .pipe(fs.createWriteStream('video.flv'));

// ytdl.getInfo(url, (err, info) => {
//     if (err) throw err;
//     var i = info;
//     console.log(info);
//   });

  ytdl.getInfo(url, (err, info) =>  {
    if (err) throw err;
    var audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
    console.log('Formats with only audio: ' + audioFormats.length);
  })