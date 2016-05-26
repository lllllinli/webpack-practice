var koa     = require('koa');
var webpack = require('webpack');
var config  = require('../webpack.config.js');

// koa
var app = koa();

// returns a Compiler instance
var compiler = webpack(config);


compiler.run(function(err, stats) {
    // ...
    //console.log(err, stats);
});


app.listen(3000, () => {
  console.info("server => start");
});
