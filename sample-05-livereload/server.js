var koa = require('koa');
var open = require('open');
var app = koa();
var port = 3000;

app.use(function *(){
  this.body = 'Hello World';
});


app.listen(port, () => {
  console.info('web service : http://localhost:' + port);
  open('http://localhost:3000');
});
