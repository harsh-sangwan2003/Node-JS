const http = require('http');
const readStaticFile = require('./utils/serveFile');

function handleRequestResponse(request, response) {

    // console.log("Request accepted");
    //But still no outcome because we have not mentioned when the response will end
    const url = request.url;
    response.writeHead(200, { "Content-type": "text/html" });
    // response.write("<h1>Hello world!</h1>");

    readStaticFile(url,response);
    // response.end();
}

//Creates a server instance
const server = http.createServer(handleRequestResponse);

const serverObj = server.listen(6789, err => {

    if (err)
        console.log("Error during server start: ", err);

    else
        console.log("Server started!", serverObj.address().port);
})