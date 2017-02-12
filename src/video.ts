const socket = require('socket.io-client')('http://192.168.1.79:3000');

const startStreamBtn = document.getElementById('start-streaming');
const streamWindow = document.getElementById('video-stream');
let streaming = false;

const startStream = () => {
    socket.emit('start-stream');
    streaming = true;
};

startStreamBtn.addEventListener('click', () => {
    if (!streaming) {
        startStream();
    }
});

socket.on('image', (info) => {
    if (info.image) {
        const img = new Image();
        img.src = 'data:image/jpeg;base64,' + info.buffer;
        img.id = 'video-stream';
        if (streamWindow.firstChild) {
            streamWindow.removeChild(streamWindow.firstChild);
        }
        streamWindow.appendChild(img);
    }
});

