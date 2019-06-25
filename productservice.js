var express = require('express');
var app = express();

var productController=function(req, res){
  
  var products = [
    {id:101,pname:"iphone",description:"Apple company smart phone",price:42000},
{id:102,pname:"samsung s8",description:"Samsung company smart phone",price:52000}
  ];
  res.send(products);
};

app.get ('/products',productController);
var server = app.listen(7000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:7000", host, port)
})