import * as http from 'http';
import App from './app/app';

const config = require('./config/env/config')();

const server = http.createServer(App);

server.listen(config.serverPort);
server.on('listening', () => console.log(`Server running in port ${config.serverPort}`));
server.on('error', (error: NodeJS.ErrnoException) => console.log(`Internal Server Error ${error}`))
