const express = require('express');
const path = require('path');
const proxy = require('http-proxy-middleware');
const app = express();

app.use(express.static('public'));

app.use('/api', proxy({
  target: 'http://api.douban.com/v2',
  changeOrigin: true,
  pathRewrite: { '^/api': ''}
}));

app.listen(2333, ()=> {
  console.log('[INFO] movie-board is now listening at 2333...')
})
