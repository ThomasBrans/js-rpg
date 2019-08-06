import Person  from './character.js';

let indexer = 1;

character1 = document.getElementById("character2");

button1 = document.getElementById("button1").addEventListener("click",myfunction);
let indexerz = 1;

character2 = document.getElementById("character1");

button2 =document.getElementById("button2").addEventListener("click",myfunction2);

select1 = document.getElementById("select1").addEventListener("click", function() {
    startselector(p1 = true, p2 = false)
} );

select2 = document.getElementById("select2").addEventListener("click", function() {
    startselector(p1 = false, p2 = true)
} );





function myfunction() {
    indexer = indexer + 1;
    if (indexer === 5) { indexer = 1; }
    character1.src = "images/character" + indexer + ".png";
    console.log(character1.src);
}


function myfunction2(){
    indexerz = indexerz + 1
    if (indexerz === 5) { indexerz = 1; }
    character2.src = "images/character" + indexerz + ".png";

}

function startselector(p1,p2) {
    if(p1 === true && p2 === true) {
        switch(p1)
            case 1:

                let Aperson = new Person("Humans", "Boots");
    }
}