# Libreria: Utileria.js 🛠️

**Utileria.js** es una librería ligera de JavaScript diseñada para simplificar y agilizar el desarrollo web. 

**¿Qué problema resuelve?**
Evita tener que reescribir funciones comunes de validación y cálculos en cada nuevo proyecto. Con Utileria.js, tienes a tu disposición un conjunto de funciones listas para usar que validan correos, contraseñas, números, fechas y realizan cálculos de edad, asegurando que los datos de tus formularios sean correctos antes de enviarlos.

---

## Instalación 🚀

Para usar Utileria.js en tu proyecto, simplemente descarga el archivo `utileria.js` y agrégalo a tu documento HTML usando la etiqueta `<script>`.

```html
<script src="js/utileria.js"></script>
```


## Uso y Ejemplos de Código 💻

A continuación, se muestran ejemplos de cómo utilizar cada una de las funciones incluidas en la librería.

### 1. Validar Correo Electrónico
Valida si una cadena de texto tiene un formato de correo electrónico correcto.

```javascript
let correoValido = validarCorreo("usuario@email.com");
console.log("¿Correo válido?:", correoValido); // true

let correoInvalido = validarCorreo("usuarioemail.com");
console.log("¿Correo válido?:", correoInvalido); // false
```

### 2. Validar Solo Letras
Verifica si el texto ingresado contiene únicamente letras.

```javascript
let texto1 = soloLetras("HolaMundo");
console.log("¿Solo letras?:", texto1); // true

let texto2 = soloLetras("Hola Mundo 123");
console.log("¿Solo letras?:", texto2); // false
```

### 3. Validar Longitud de un Número
Verifica si la longitud de un número (o texto numérico) es menor o igual a 10 caracteres.

```javascript
let numeroValido = validarLongitud("1234567890");
console.log("¿Longitud válida?:", numeroValido); // true

let numeroInvalido = validarLongitud("12345678901");
console.log("¿Longitud válida?:", numeroInvalido); // false
```

### 4. Calcular Edad
Calcula la edad en años a partir de una fecha de nacimiento (YYYY-MM-DD).

```javascript
let miEdad = calcularEdad("1995-05-15");
console.log("Edad calculada:", miEdad); // Ej: 29 (dependiendo del año actual)
```

### 5. Verificar si es Mayor de Edad
Valida si, a partir de una fecha de nacimiento, la persona tiene 18 años o más.

```javascript
let esMayor = esMayorDeEdad("2000-01-01");
console.log("¿Es mayor de edad?:", esMayor); // true

let esMenor = esMayorDeEdad("2015-10-20");
console.log("¿Es mayor de edad?:", esMenor); // false
```

### 6. Validar Contraseña
Verifica el formato de una contraseña (caracteres permitidos y longitud mínima de 8).

```javascript
let passValido = validarPassword("MiPass123@#");
console.log("¿Contraseña válida?:", passValido); // true
```

### 7. Validar Código Postal
Valida que el código postal contenga exactamente 5 dígitos numéricos.

```javascript
let cpValido = validarCodigoPostal("28045");
console.log("¿Código Postal válido?:", cpValido); // true

let cpInvalido = validarCodigoPostal("2804A");
console.log("¿Código Postal válido?:", cpInvalido); // false
```

### 8. Es Fecha Futura
Verifica si una fecha proporcionada es posterior a la fecha de hoy.

```javascript
let fechaFutura = esFechaFutura("2050-12-31");
console.log("¿Es fecha futura?:", fechaFutura); // true

let fechaPasada = esFechaFutura("1999-01-01");
console.log("¿Es fecha futura?:", fechaPasada); // false
```

---

## Capturas de Pantalla 📸

*(Reemplaza esta imagen con tus propias capturas de pantalla de la consola mostrando los resultados de las pruebas)*

![Consola mostrando resultados](https://via.placeholder.com/800x400?text=Captura+de+Consola+-+Resultados+AQUI)

---

## Demo en Video 🎬

*(Inserta aquí el enlace a tu video corto de máximo 1 minuto demostrando el problema que resuelve, cómo se usa y el resultado en acción, véndelo en 60 segundos)*

[Ver Video Promocional Aquí](#)
