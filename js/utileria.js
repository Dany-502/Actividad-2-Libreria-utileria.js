/*validarCorreo(correo) → boolean — valida formato de correo electrónico*/
function validarCorreo(correo) {
    let expr = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (expr.test(correo)) {
        return true;
    } else {
        return false;
    }
}

/*soloLetras(texto) → boolean — solo letras mayúsculas/minúsculas, acepta vocales acentuadas*/
function soloLetras(texto) {
    let expr = /^[A-Za-z]+$/;
    if (expr.test(texto)) {
        return true;
    } else {
        return false;
    }
}

/*validarLongitud(numero, maxLongitud) → boolean — valida longitud de un número */
function validarLongitud(numero) {
    if (numero.length <= 10) {
        return true;
    } else {
        return false;
    }
}

/*calcularEdad(fechaNacimiento) → número entero — calcula edad a partir de fecha de nacimiento*/
function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNa = new Date(fechaNacimiento);
    const edad = fechaActual.getFullYear() - fechaNa.getFullYear();
    return edad;
}

/*esMayorDeEdad(fechaNacimiento) → boolean — valida si es mayor de edad*/
function esMayorDeEdad(fecha) {
    const fechaActual = new Date();
    const fechaNa = new Date(fecha);
    const edad = fechaActual.getFullYear() - fechaNa.getFullYear();
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

/*validarPassword(password) → boolean — requiere mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres */
function validarPassword(password) {
    let expr = /^[A-Za-z0-9@#%&*=]+$/;
    if (!expr.test(password) && password.length < 8) {
        return false;
    } else {
        return true;
    }
}


/*validarCodigoPostal(codigo) → boolean — valida que el código postal tenga exactamente 5 dígitos numéricos*/
function validarCodigoPostal(codigo) {
    let expr = /^[0-9]{5}$/;
    return expr.test(codigo);
}

/*esFechaFutura(fechaStr) → boolean — valida si una fecha es posterior a la fecha actual*/
function esFechaFutura(fechaStr) {
    const fechaActual = new Date();
    fechaActual.setHours(0, 0, 0, 0);
    const fechaIngresada = new Date(fechaStr + "T00:00:00");
    if (fechaIngresada > fechaActual) {
        return true;
    } else {
        return false;
    }
}
