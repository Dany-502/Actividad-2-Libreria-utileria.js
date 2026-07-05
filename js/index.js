function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const numero = document.getElementById('numero').value;
    const codigoPostal = document.getElementById('codigoPostal').value;
    const fecha = document.getElementById('fechaNacimiento').value;

    const mensajeNombre = document.getElementById('msgNombre');
    const mensajeNumero = document.getElementById('msgNumero');
    const mensajeCodigoPostal = document.getElementById('msgCodigoPostal');
    const mensajeFecha = document.getElementById('msgFecha');

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

    // Validar Nombre
    if (nombre.trim() === '') {
        mostrarMensaje(mensajeNombre, 'vacio', 'El campo está vacío');
    } else if (!soloLetras(nombre)) {
        mostrarMensaje(mensajeNombre, 'incorrecto', 'Solo debe contener letras');
    } else {
        mostrarMensaje(mensajeNombre, 'correcto', 'Validación correcta');
    }

    // Validar Número
    if (numero.trim() === '') {
        mostrarMensaje(mensajeNumero, 'vacio', 'El campo está vacío');
    } else if (!validarLongitud(numero)) { // Utilizando la validación correcta
        mostrarMensaje(mensajeNumero, 'incorrecto', 'Longitud no válida (mínimo 10)');
    } else {
        mostrarMensaje(mensajeNumero, 'correcto', 'Validación correcta');
    }

    // Validar Código Postal
    if (codigoPostal.trim() === '') {
        mostrarMensaje(mensajeCodigoPostal, 'vacio', 'El campo está vacío');
    } else if (!validarCodigoPostal(codigoPostal)) {
        mostrarMensaje(mensajeCodigoPostal, 'incorrecto', 'Debe tener exactamente 5 dígitos');
    } else {
        mostrarMensaje(msgCodigoPostal, 'correcto', 'Validación correcta');
    }

    const txtMayorEdad = document.getElementById('txtMayorEdad');
    const txtEdad = document.getElementById('txtEdad');
    const txtFechaFutura = document.getElementById('txtFechaFutura');

    txtMayorEdad.value = "";
    txtEdad.value = "";
    txtFechaFutura.value = "";

    // Validar Fecha
    if (fecha === '') {
        mostrarMensaje(msgFecha, 'vacio', 'El campo está vacío');
    } else if (esFechaFutura(fecha)) {
        mostrarMensaje(msgFecha, 'incorrecto', 'La fecha no puede ser futura');
        txtFechaFutura.value = "Sí (Inválida)";
    } else {
        mostrarMensaje(msgFecha, 'correcto', 'Validación correcta');
        txtFechaFutura.value = "No (Válida)";

        let edadCalculada = calcularEdad(fecha);
        txtEdad.value = edadCalculada + " años";

        if (esMayorDeEdad(fecha)) {
            txtMayorEdad.value = "Sí, es mayor de edad.";
        } else {
            txtMayorEdad.value = "No, es menor de edad.";
        }
    }
}
