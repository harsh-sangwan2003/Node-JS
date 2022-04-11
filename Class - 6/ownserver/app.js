const http = require('http');
const readStaticFile = require('./utils/serveFile');

function handleRequestResponse(request, response) {

    // console.log("Request accepted");
    const url = request.url;

    if (url.startsWith("/login?")) {

        response.write("Login");
        response.end();
    }

    else {
        
        let contentType = url.endsWith(".css") ? "text/css" : "text/html";

        response.writeHead(200, { "Content-Type": contentType });

        readStaticFile(url, response);
    }

    //Hardcoded HTML
    // response.write("<h1>Hello Client</h1>");
    // response.end();
}

const server = http.createServer(handleRequestResponse);


//Applications are running on some port no so we have to specify the port no for our server as well.
const serverObj = server.listen(6789, err => {

    if (err)
        console.log("Error while starting the server: ", err);

    else
        console.log("Server started", serverObj.address().port);
})