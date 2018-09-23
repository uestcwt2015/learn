const http = require('http');
const fs = require('fs');
const port = 3000;
const host = 'localhost';

http.createServer((req, res) => {
    if (req.url == '/') {
        fs.readFile('./test.json', (err, data) => {
            if (err) {
                console.error(err);
                res.end('Server Error');
            }
            else {
                const titles = JSON.parse(data.toString());

                fs.readFile('./index.html', (err, data) => {
                    if (err) {
                        console.error(err);
                        res.end('Server Error');
                    }
                    else {
                        const tmpl = data.toString();
                        const html = tmpl.replace('%', titles.join('</li><li>'));
                        res.writeHead('200', {
                            'contentType': 'text/html'
                        });

                        res.end(html);
                    }
                });
            }
        });
    }
}).listen(port, host);

console.info(`Server on http://${host}:${port}`);
