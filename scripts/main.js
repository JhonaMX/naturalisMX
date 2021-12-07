// Titulo de texto JS
const miTitulo = document.querySelector('h1');
miTitulo.textContent = '¡Hola Perro mundo!';

//Click pantalla
document.querySelector('h1').onclick = function() {
    alert('Alv! ¡Deja de pincharme Perro!');
}

//cabio de imagen
let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'imagenes/logo.jpeg') {
      miImage.setAttribute('src','imagenes/caracol.png');
    } else {
      miImage.setAttribute('src', 'imagenes/logo.jpeg');
    }
   
}
// Crea un boton
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Por favor escribe tu nombre.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Naturalis es genial! ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Naturalis es genial!! ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

/*
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if (!miNombre) {
        estableceNombreUsuario();}
      else { localStorage.setItem ('nombre', miNombre); 
        miTitulo.textContent = 'Naturalis es Genial!' + miNombre;
}
        if(!localStorage.getItem('name')) {
            estableceNombreUsuario(); 
          } else {
            let nombreAlmacenado = localStorage.getItem('name');
            miTitulo.textContent = 'Mozilla is cool, ' + nombreAlmacenado;
          }
          miBoton.onclick = function() {
            estableceNombreUsuario();
    
   }
   */
  