import Person  from './character.js';

let indexer = 1;
var items1;
var items2;
var Person1;
var Person2;


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

    indexer = indexer + 1;
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
}


function myfunction2(){

    indexerz = indexerz + 1
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

}

function startselector() {

    button1.style.display = "none";
    button1.style.display = "none";
    button2.style.display = "none";

    select1.style.display = "none";
    select2.style.display = "none";
    select3.style.display = "none";
    select4.style.display = "none";
    select5.style.display = "none";
    select6.style.display = "none";
   let Player1 = new Person(Person1,items1);
   let Player2 = new Person(Person2,items2);
   Player1.initializePlayer(Player2);
   Player2.initializePlayer(Player1);
    console.log(Player1);
    console.log(Player2);
    console.log(Player1.damage());
    console.log(Player2.damage());
    console.log(Player1.damage());
    console.log(Player2.damage());

}