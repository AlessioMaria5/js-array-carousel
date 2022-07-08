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

    const up = document.querySelector('.up');

    up.addEventListener ( 'click', 
    function() {

        if(itemNumber <= 2) {

        active[itemNumber].classList.remove('show');
        itemNumber++
        active[itemNumber].classList.add('show');
        console.log(itemNumber);

        }

        else {

        active[itemNumber].classList.remove('show');
        itemNumber - 1;
        active[itemNumber].classList.add('show');
        console.log(itemNumber);

        }

    }
    );

    const down = document.querySelector('.down')

    down.addEventListener ( 'click', 
    function() {

        active[itemNumber].classList.remove('show');
        itemNumber--
        active[itemNumber].classList.add('show');
    }
    );

    // if (active[itemNumber]== 5){
            
    //     active[itemNumber].classList.remove('show');
    //     itemNumber - 5
    //     active[itemNumber].classList.add('show');

    //     console.log(itemNumber);
    // }
