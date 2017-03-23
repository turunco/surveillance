var querystring = require('querystring');
const fs = require('fs');

function start(response, postData) {
    console.log('Request handelr \'start\' was called.');
}

let g_surveillance_count = 0;

function upload(response, postData) {
    console.log('Request handler \'upload\' was called.');
    console.log('@@ postData : ', postData.length, typeof(postData));

    // save file

    let filename = 'surveillance' + g_surveillance_count + '.png';
    fs.open(filename, 'wx', (err, fd) => {
        if (err) {
            throw err;
        }
        fs.write(fd, postData, 0, postData.length, (err, written, buffer) => {
            console.log('@@ write');
        });
        fs.close(fd, () => {
            g_surveillance_count++;
            console.log('count : ', g_surveillance_count);
        });
    });

    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('You\'ve send: ' + querystring.parse(postData).text);
    response.end();
}

exports.start = start;
exports.upload = upload;