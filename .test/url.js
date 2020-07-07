/**
 * The purpose of this test is to ensure url is in security
 */
const http = require('http');

const options = {
    hostname: 'localhost',
    port: 4321,
    path: '/a/b/../../../../admin/b/',
    method: 'GET'
};

const req = http.request(
        options,
        res => {
            console.log(`{
                statusCode: ${res.statusCode}, 
                header: ${JSON.stringify(res.headers)},
            }`);

            res.on('data', d => {
              process.stdout.write(d)
            });
        });

req.on('error', error => {
    console.error(error)
    })
    
req.end()