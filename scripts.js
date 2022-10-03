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



function replaceSrc()
{

    var images = document.getElementsByTagName('img');

    for(var i = 0; i < images.length; i++)
    {
        var img = images[i]
        if(img.src.length = !0) 
        {
            img.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
        }
        
    }
}
   

replaceSrc()


// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
const flyingPokimon = document.querySelector('.infocard-lg-data');
console.log(flyingPokimon);

// function repBgFlyingPok()
// {

//     for(var i = 0; i < flyingPokimon.length; i++)
//     {
//         var flyPok = flyingPokimon[i];
//         if(flyPok.class = "itype flying") 
//         {
//             flyPok.style.background = 'blue';
//         }
        
//     }
// }
   