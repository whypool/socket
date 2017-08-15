/**
 * Created by why on 2017/8/15.
 */

const socketio = require('socket.io');

let io;

module.exports = {
    listen: (server) => {
        io = socketio.listen(server);
        let chat = io.of('/chat');
        chat.on('connection', (socket) => {
            socket.on('chat', (msg) => {
                chat.emit('chat', msg);
            });
        });
    },

    ioServer:io
};
