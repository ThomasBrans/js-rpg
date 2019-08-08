import Person  from './character.js';

let indexer = 1;
var items1;
var items2;
var Person1 = "Humans";
var Person2 = "Humans";


let character1 = document.getElementById("character2");

var button1 = document.getElementById("button1");
    button1.addEventListener("click",myfunction);
let indexerz = 1;



let character2 = document.getElementById("character1");

let button2 =document.getElementById("button2");
    button2.addEventListener("click",myfunction2);

let select1 = document.getElementById("attackp1");
    select1.addEventListener("click", function() {
    items1 = "boots";
} );

let select2 = document.getElementById("healp1");
    select2.addEventListener("click", function() {
    items1 = "staff";
} );

let select3 = document.getElementById("yeildp1");
    select3.addEventListener("click", function() {
    items1 = "sword";
} );

let select7 = document.getElementById("bowp1");
select7.addEventListener("click", function() {
    items1 = "bow";
} );

let select4 = document.getElementById("attackp2");
    select4.addEventListener("click", function() {
    items2 = "boots";
} );

let select5 = document.getElementById("healp2");
    select5.addEventListener("click", function() {
    items2 = "staff";
} );

let select6 = document.getElementById("yeildp2");
    select6.addEventListener("click", function() {
    items2 = "sword";
} );

let select8 = document.getElementById("bowp2");
select8.addEventListener("click", function() {
    items2 = "bow";
} );

let button3 =document.getElementById("start");
button3.addEventListener("click", startselector);










function myfunction() {


    if (indexer === 5) { indexer = 1; }
    character1.src = "images/character" + indexer + ".png";
    switch(indexer) {
        case 1:
           Person1 = "Human" ;
           break;
        case 2:
            Person1 = "Orcs";
            break;
        case 3:
            Person1 = "Elves";
            break;
        case 4:
            Person1 = "Vampires";
            break;
    }
    indexer = indexer + 1;
}


function myfunction2(){


    if (indexerz === 5) { indexerz = 1; }
    character2.src = "images/character" + indexerz + ".png";
    switch(indexerz) {
        case 1:
            Person2 = "Human" ;
            break;
        case 2:
            Person2 = "Orcs";
            break;
        case 3:
            Person2 = "Elves";
            break;
        case 4:
            Person2 = "Vampires";
            break;
    }
    indexerz = indexerz + 1

}

function startselector() {

    button1.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";
    button3.style.display = "none";

    select1.style.display = "none";
    select2.style.display = "none";
    select3.style.display = "none";
    select4.style.display = "none";
    select5.style.display = "none";
    select6.style.display = "none";
    select7.style.display = "none";
    select8.style.display = "none";

    let attack1 = document.getElementById("attack1");
    attack1.style.display = "block";
    let attack2 = document.getElementById("attack2");
    attack2.style.display = "block";
    let heal1 = document.getElementById("heal1");
    heal1.style.display = "block";
    let heal2 = document.getElementById("heal2");
    heal2.style.display = "block";

    let status = document.getElementById("visual");


   var Player1 = new Person(Person1,items1);
   var Player2 = new Person(Person2,items2);
   Player1.initializePlayer(Player2);
   Player2.initializePlayer(Player1);

   attack1.addEventListener("click", function() {
       Player1.handleItems(Person2);
       Player2.handleItems(Person1);
       Player1.damage();


       status.innerHTML += Player1.currenthealth;
       if (Player1.currenthealth <= 0) {
           let def = document.getElementById("player1def");
           def.style.display = "block";
           status.innerHTML = "Player1 Death";
       }
       if (Player2.currenthealth <= 0) {
           let def2 = document.getElementById("player2def");
           def2.style.display = "block";
           status.innerHTML = "Player2 Death";
       }
   });
    attack2.addEventListener("click", function() {
        Player1.handleItems(Person2);
        Player2.handleItems(Person1);
        Player2.damage();

        status.innerHTML += Player2.currenthealth;
        if (Player1.currenthealth <= 0) {
            let def = document.getElementById("player1def");
            def.style.display = "block";
            status.innerHTML = "Player1 Death";
        }
        if (Player2.currenthealth <= 0) {
            let def2 = document.getElementById("player2def");
            def2.style.display = "block";
            status.innerHTML = "Player2 Death";
        }
    });
    heal1.addEventListener("click", function() {
        Player1.handleItems(Person2);
        Player2.handleItems(Person1);
        Player1.heal();
        status.innerHTML += Player2.currenthealth;

    });
    heal2.addEventListener("click", function() {
        Player1.handleItems(Person2);
        Player2.handleItems(Person1);
        Player2.heal();
        status.innerHTML += Player2.currenthealth;

    });



}