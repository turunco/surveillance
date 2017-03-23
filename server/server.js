var http = require('http');
var url = require('url');

function start(route, handle, port) {
    function onRequest(request, response) {
        var body = [];
        var pathname = url.parse(request.url).pathname;
        console.log('Request for ' + pathname + ' received.');

        // error

        request.addListener('error', (err) => {
            console.error(err);
        });

        // get data

        request.addListener('data', (chunk) => {
            console.log('@@ [data] chunk : ', chunk[0].toString(16),
                chunk[1].toString(16),
                chunk[2].toString(16),
                chunk[3].toString(16),
                chunk[4].toString(16),
                chunk[5].toString(16), typeof(chunk));
            body.push(new Buffer(chunk, 'binary'));
            console.log('@@ [data] body.length : ', body.length);
        });

        // get end

        request.addListener('end', () => {
            console.log('@@ [end] body.length : ', body.length);
            var data = Buffer.concat(body);
            console.log('@@ [end] data.length : ', data.length);
            route(handle, pathname, response, data);
        });
    }

    http.createServer(onRequest).listen(port);
    console.log('Server has started.');
}

exports.start = start;