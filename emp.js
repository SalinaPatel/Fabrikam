var express = require('express');
var app = express();

var employeeController=function(req, res){
  
  var employee = [
    {id:101,ename:"Meena",designation:"HR",Total_Leaves:12,Remaining_Leaves:5},
{id:102,ename:"Tina",designation:"Operations Mgr",Total_Leaves:12,Remaining_Leaves:3},
{id:103,ename:"Geeta",designation:"CSA",Total_Leaves:12,Remaining_Leaves:6},
{id:104,ename:"Radha",designation:"Manager",Total_Leaves:12,Remaining_Leaves:5},
{id:105,ename:"Pooja",designation:"SiteLead",Total_Leaves:12,Remaining_Leaves:7} ];
  res.send(employee);
};

app.get ('/employee',employeeController);
var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://localhost:8086", host, port)
})
