const express = require("express"),
    app = express(),
    port = process.env.PORT || 3000
    routes = require('./server-routes.js');

routes(app);
app.listen(port);




// const http = require("http");
// const users = [{name:"user1", age:"16"}, {name:"user2", age:"18"}];
// const port = 3000;
// const hostname = '127.0.0.1';

// const server = http.createServer(function(req,response){
//     if (req.url == "/users"){
//         response.statusCode = 200;
//         response.setHeader('Content-Type', 'text/json');
//         response.end(JSON.stringify(users));
//     }else {
//         response.statusCode = 200;
//         response.setHeader('Content-Type', 'text/html');
//         response.end("!");
//     }
// });

// server.listen(port, hostname, () => {
//     console.log('Server running at http://${hostname}:${port}/');
// });
