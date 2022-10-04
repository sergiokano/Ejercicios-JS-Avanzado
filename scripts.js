console.log(document.title);
const cards = document.querySelector('.infocard');

// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
// document.getElementById('gen-1')
const title = document.querySelector('#gen-1');
console.log(title)
title.innerText = 'Generasión 1 Pokimon';

// Cambia el color de fondo de la primera generación de Pokimon.
const gen1 = document.getElementsByClassName('infocard-list infocard-list-pkmn-lg');
console.log(gen1)
gen1[0].style.background = 'red';


// Imprime por consola la URL de la página.
const actualURL = document.URL;
console.log(actualURL);


// Imprime por consola el dominio de la página.
const actualDomain = document.domain;
console.log(actualDomain);


// Imprime todos los nodos de imagen.


// const imageNodes = document.getElementsByTagName('img');
// console.log (imageNodes);
const imageNodes = document.querySelectorAll('img');
console.log(imageNodes);


// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"


 for (const img of imageNodes) {
     img.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';}
   


// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying


// SOLUCIÓN DE ALEX
// let pokimon_voladores = document.getElementsByClassName('itype flying');
// for (const pokemon of pokimon_voladores) {
//     pokemon.parentElement.parentElement.style.background = 'pink';
// }

// SOLUCIÓN DE SOFÍA, AQUÍ COMPRUEBA QUE CONTIENE LAS DOS CLASES PORQUE NO SE PUEDE ACCEDER A TODO EL CONJUNTO
let voladores = document.getElementsByClassName("itype flying");
for (const volador of voladores) {
  const elementoPadre = volador.parentElement.parentElement;
  if (
    elementoPadre.classList[0] === "infocard-lg-data" &&
    elementoPadre.classList[1] === "text-muted"
  ) {
    elementoPadre.style.backgroundColor = "green";
  }
}