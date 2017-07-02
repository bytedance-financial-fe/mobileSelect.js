/**
 * Created by weijianli on 2017/6/9.
 */
'use strict';
const webpack = require('webpack');
const webpackConfig = require('../webpack.config')
const { exec } = require('child_process');
const os = require('os');
const express = require('express')
const app = express()

app.use(express.static('example'));
app.get('/', function (req, res) {
  res.redirect('/example.html')
});



app.listen(3000, function () {
  console.log(`please open  http://${os.networkInterfaces().en0[1].address}:3000`);

  //webpack
  webpack(webpackConfig, function (err, stats) {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
      }) + '\n\n')


  });

  exec(`open http://${os.networkInterfaces().en0[1].address}:3000`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
})