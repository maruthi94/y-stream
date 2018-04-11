const app = require('express')();
var url = 'https://www.youtube.com/watch?v=5cFUZ03Sbhc';
const id = '5cFUZ03Sbhc';
const fs = require('fs');
const ffmpeg   = require('fluent-ffmpeg');
const ytdl = require('ytdl-core');
var port = process.env.PORT || 3000;
app.listen(port, (x)=> {
    console.log('listening to the 3500');
});

let stream = ytdl(url, {
    //quality: 'highestaudio',
    filter: 'audioonly',
  });

app.get('/vid',(req,res) => {
    //ffmpeg(stream)
    ffmpeg(stream)
    .withAudioCodec('libmp3lame')
    .toFormat('mp3')
    .output(res)
    .run();
    // .audioBitrate(128)
    // // .save(`${__dirname}/${id}.mp3`)
    // .on('progress', (p) => {
    //   //readline.cursorTo(process.stdout, 0);
    //   process.stdout.write(`${p.targetSize}kb downloaded`);
    // })
    // .on('end', () => {
    //   console.log(`\ndone, thanks - ${(Date.now() ) / 1000}s`);
    // })
    // .pipe(res, {end:true});
    // stream.pipe(res);
    console.log(url);
//     ytdl(url, { filter: (format) => format.container === 'mp4' })
//   .pipe(res);
});

app.get('/', (req, res)=> {
    res.send("Hello World");
});