var socket = io();

socket.on('connect', function() {
    console.log('Conectado');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Carlos',
    mensaje: 'Hola Mundo'
}, function(res) {
    console.log('respuesta server:', res);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor', mensaje);
});