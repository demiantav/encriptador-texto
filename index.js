const encriptarValue= document.getElementById('encriptartexto');
const desencriptarValue= document.getElementById('desencriptartexto');
const botonEncriptar= document.getElementsByClassName('boton-encriptar')[0];
const botonDesencriptar= document.getElementsByClassName('boton-desencriptar')[0];
const sectionTwo= document.getElementsByClassName('seccion-2')[0];
const botonCopiar= document.getElementsByClassName('copiar')[0];


// Encriptar
botonEncriptar.addEventListener("click", () => {

  desencriptarValue.value= encriptarValue.value
  .replace('e','enter')
  .replace('i','imes')
  .replace('a','ai')
  .replace('o','ober')
  .replace('u','ufat');

  encriptarValue.value= "";

});

botonDesencriptar.addEventListener("click", () => {

  desencriptarValue.value= encriptarValue.value
  .replace('enter','e')
  .replace('imes','i')
  .replace('ai','a')
  .replace('ober','o')
  .replace('ufat','u');

});

//Smooth scroll entre secciones
botonEncriptar.addEventListener("click", () => {

  sectionTwo.scrollIntoView({

    behavior: 'smooth'

  })


})

botonDesencriptar.addEventListener("click", () => {

  sectionTwo.scrollIntoView({

    behavior: 'smooth'

  })


})

//Copiar
botonCopiar.addEventListener("click", () => {

  desencriptarValue.select();
  document.execCommand('copy');

})
