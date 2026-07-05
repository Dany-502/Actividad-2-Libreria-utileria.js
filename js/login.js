function procesarLogin() {
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    const mensajeCorreo = document.getElementById('msgCorreo');
    const mensajeContrasena = document.getElementById('msgContrasena');

    function mostrarMensaje(elemento, estado, texto) {
        elemento.textContent = texto;
        if (estado === 'vacio') {
            elemento.style.color = '#e74c3c';
        } else if (estado === 'correcto') {
            elemento.style.color = '#27ae60';
        } else {
            elemento.style.color = '#e74c3c';
        }
    }

    /*FUNCIONES QUE PERMITEN APLICAR LAS VALIDACIONES DE LA LIBRERIA utileria.js */

    // Validar Correo
    if (correo.trim() === '') {
        mostrarMensaje(mensajeCorreo, 'vacio', 'El campo correo está vacío');
    } else if (!validarCorreo(correo)) {
        mostrarMensaje(mensajeCorreo, 'incorrecto', 'Formato de correo inválido');
    } else {
        mostrarMensaje(mensajeCorreo, 'correcto', 'Validación correcta');
    }

    // Validar Contraseña
    if (contrasena.trim() === '') {
        mostrarMensaje(mensajeContrasena, 'vacio', 'El campo contraseña está vacío');
    } else if (!validarPassword(contrasena)) {
        mostrarMensaje(mensajeContrasena, 'incorrecto', 'Debe tener al menos 8 caracteres y caracteres especiales');
    } else {
        mostrarMensaje(mensajeContrasena, 'correcto', 'Validación correcta');
    }
}
