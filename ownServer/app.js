const http = require('http');
const https = require('https');
const urlObject = require('url');

//This is depreacted -> use URLSearchParams
const queryString = require('querystring');
const readStaticFile = require('./utils/serveFile');

let contentType = '';

function handleRequestResponse(request, response) {

    // console.log("Request accepted");
    //But still no outcome because we have not mentioned when the response will end

    const url = request.url;
    const method = request.method;

    //Redirection
    if (url == '/dashboard' && method == 'GET') {

        response.write('I am in dashboard');
        response.end();
    }

    //POST Method & routing
    else if (url.startsWith('/login') && method == 'POST') {

        let myData = '';

        request.on('data', chunk => {

            myData += chunk;
        })

        request.on('end', () => {

            // let infoObj = queryString.parse(myData);
            let queryParams = new URLSearchParams(myData);
            let data = [];

            for (let params of queryParams) {

                data.push(params[1]);
            }

            const [userid, passwd] = data;

            if (userid == 'Harsh' && passwd == 123) {

                //Code for redirection
                response.statusCode = 302;
                response.setHeader('Location', '/dashboard');
                // return response.end();
            }

            else
                response.write('Invalid credentails');

            response.end();
        })

    }

    //GET Method
    else if (url.startsWith('/login?') && method == 'GET') {

        //Login check
        let userInfo = urlObject.parse(url, true);

        if (userInfo.query.userid == 'Harsh' && userInfo.query.passwd == '123')
            response.write("Login successful");

        else
            response.write("Invalid user-id or passwd");

        response.end();
    }

    else {

        if (url.endsWith('.css'))
            contentType = 'css';

        else
            contentType = 'html';

        response.writeHead(200, { "Content-type": `text/${contentType}` });
        // response.write("<h1>Hello world!</h1>");

        readStaticFile(url, response);
        // response.end();
    }
}

//Creates a server instance
const server = http.createServer(handleRequestResponse);

const serverObj = server.listen(6789, err => {

    if (err)
        console.log("Error during server start: ", err);

    else
        console.log("Server started!", serverObj.address().port);
})

//Certificates
