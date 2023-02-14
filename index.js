const http = require('http')

const server = http.createServer((req, res) =>{
    console.log('Server created');
});

const port = 3000;

server.listen(port, () =>{
    console.log(`server running on port ${port}`)
})
