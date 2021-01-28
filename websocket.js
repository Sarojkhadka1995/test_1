const http = require('http');
const WebSocketServer = require('websocket').server;

const server = http.createServer();
server.listen(9898);

const wsServer = new WebSocketServer({
    httpServer : server
});

wsServer.on('request',function(request){
    const connection = request.accept(null,request.origin);

    connection.on('message',function(message){
        console.log('Reeived Message:',message.utf8Data);
        connection.sendUTF('Hi this is webSocket server!');
    });

    connection.on('close',(resonCode,description)=>{
        console.log('Client has disconnected.',resonCode,description);
    });
})

console.log("Running");