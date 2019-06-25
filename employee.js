var http=require('http');   // module
//object----- model
 var employee = [
    {id:101,ename:"Meena",designation:"HR",Total_Leaves:12,Remaining_Leaves:5},
{id:102,ename:"Tina",designation:"Operations Mgr",Total_Leaves:12,Remaining_Leaves:3},
{id:103,ename:"Geeta",designation:"CSA",Total_Leaves:12,Remaining_Leaves:6},
{id:104,ename:"Radha",designation:"Manager",Total_Leaves:12,Remaining_Leaves:5}
  ];


var controller=function(request,response)
{
	response.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                response.end( JSON.stringify(employee));
};
var server=http.createServer(controller);
server.listen(8082);
console.log("listening on port 8082");