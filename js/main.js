//RADUNO LE IMMAGINI

const ArrayCarousel = [

    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

const carousel = document.querySelector('.carousel');

    for(let i = 0 ; i < ArrayCarousel.length ; i++) {

        carousel.innerHTML += 
        `
        <img class="item" src="${ArrayCarousel[i]}">
        `;

    }

    //AGGIUNGO LA CLASSE SHOW AL PRIMO(0, coefficiente che ACTIVE recupera da ItemNumber) ELEMENTO
    let itemNumber = 0;
    const active = document.getElementsByClassName('item');

    active[itemNumber].classList.add('show');

    // CREO L'EVENTO NEXT 

    


