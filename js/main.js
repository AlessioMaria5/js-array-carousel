//RADUNO LE IMMAGINI

const ArrayCarousel = [

    "img/01.jpg",
    "img/02.jpg",
    "img/03.jpg",
    "img/04.jpg",
    "img/05.jpg",
];

const carousel = document.querySelector('.carousel');
const thumb = document.querySelector('.thumb');

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

        if(itemNumber <= 3) {

            active[itemNumber].classList.remove('show');
            itemNumber++
            active[itemNumber].classList.add('show');
            console.log(itemNumber);

        }

        else {

            active[itemNumber].classList.remove('show');
            itemNumber = 0;
            active[itemNumber].classList.add('show');
            console.log(itemNumber);

        }

    }
    );

    const down = document.querySelector('.down')

    down.addEventListener ( 'click', 
    function() {

        if(itemNumber > 0) {

            active[itemNumber].classList.remove('show');
            itemNumber--
            active[itemNumber].classList.add('show');

        }

        else {

            active[itemNumber].classList.remove('show');
            itemNumber = 4
            active[itemNumber].classList.add('show');
        }
    }
    );



    for(let i = 0 ; i < ArrayCarousel.length ; i++) {

        thumb.innerHTML += 
        ` <input type="button" class="thumbmail" style="background-image: url('${ArrayCarousel[i]}')">` 
        ;
    }


    // const activeThumb = document.querySelector('.thumbmail')[thumbmailIn];
    let thumbmailIn = document.querySelectorAll('.thumbmail');
    console.log(thumbmailIn);


    thumbmailIn[0].addEventListener('click', 
    function(){
                active[itemNumber].classList.remove('show');
                itemNumber = 0
                active[0].classList.add('show')
                
    }         
    );

    thumbmailIn[1].addEventListener('click', 
    function(){

        active[itemNumber].classList.remove('show');
        itemNumber = 1
        active[1].classList.add('show')
       
    }         
    );

    thumbmailIn[2].addEventListener('click', 
    function(){

        active[itemNumber].classList.remove('show');
        itemNumber = 2
        active[2].classList.add('show')
    }   
    );

    thumbmailIn[3].addEventListener('click', 
    function(){

        active[itemNumber].classList.remove('show');
        itemNumber = 3
        active[3].classList.add('show')
       
    }         
    );

    thumbmailIn[4].addEventListener('click', 
    function(){

        active[itemNumber].classList.remove('show');
        itemNumber = 4
        active[4].classList.add('show')
        
    }         
    );







