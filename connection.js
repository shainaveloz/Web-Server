// require/import the http module
var http = require('http');

//listen for a port
var port = 7000;
var secondPort = 7500;


//need a function which handles request and send response
function handleRequest(request, response){
    response.end('You\'re Awesome!! ' + request.url);
}

function handleSecondRequest(request, response){
    response.end('You suck!!' + request.url);
}
//create a server
var server = http.createServer(handleRequest);

//lets us start our server
server.listen(port, function(){
    //callback is triggered when server is successfully listening
    console.log('Server listening on :http://localhost', port);
});

var secondServer = http.createServer(handleSecondRequest);

secondServer.listen(secondPort, function(){
    console.log('Server listening on :http://localhost', secondPort);
})