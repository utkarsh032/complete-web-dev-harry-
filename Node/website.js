const fs = require('fs')
const http = require('http')

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html')
    console.log(req.url)

    if (req.url == '/') {
        res.statusCode = 200;
        res.end('<h1> This is CodeWithUtkarsh </h1> <p> Hey This is the way to rock world! </p>')
    }

    else if (req.url == '/cwu') {
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString());
    }


    else if (req.url == '/about') {
        res.statusCode = 200;
        res.end('<h1> About CodeWithUtkarsh </h1> <p> Hey This is about CodeWithUtkarsh </p>')
    }

    else {
        //res.Utkarsh();
        res.statusCode = 404;
        res.end('<h1> Not Found </h1> <p>Hey This page was not found on this server</p>');
    }
    
})
server.listen(port, () => {
    console.log('server in listening on port ${port}');
});

