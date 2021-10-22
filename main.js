/* facciamo in modo che con un click l'hamburger menu si apra e sempre cliccando sulla x il menu si richiuda */


/* definiamo le variabili del menu hamburger */

const hamburger = document.querySelector(".hamburger-menu");

const toggle = document.querySelector(".fa-bars");

/* facciamo in modo che mediante un click il menu all'interno del toggle venga visualizzato */

toggle.addEventListener("click",

    function() {

        hamburger.classList.toggle("active");

    }

)

/* definiamo le variabili del dropdown menu */

const chiudi = document.querySelector(".fa-times");

/* facciamo chiudere il menu con un click */

chiudi.addEventListener("click",

    function() {

        hamburger.classList.toggle("active");

    }

)