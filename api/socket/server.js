/**
 * Created by why on 2017/8/15.
 */

const socketio = require('socket.io');

let io;

module.exports = {
    listen: (server) => {
        io = socketio.listen(server);
        let chat = io.of('/chat');
        let game = io.of('/game');
        let code;
        chat.on('connection', (socket) => {
            socket.on('chat', (msg) => {
                chat.emit('chat', msg);
            });
        });

        game.on('connection', (socket) => {
            socket.on('game', (msg) => {
                if(msg == '左'){
                    code = 37;
                }else if(msg == '上'){
                    code = 38;
                }else if(msg == '右'){
                    code = 39;
                }else if(msg == '下'){
                    code = 40;
                }else {
                    code = null;
                }
                game.emit('game', code);
            });
        });
    },

    ioServer:io
};
