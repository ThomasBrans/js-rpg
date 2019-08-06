let indexer = 1;

character1 = document.getElementById("character2");

button1 = document.getElementById("button1").addEventListener("click",myfunction);


function myfunction() {
    indexer = indexer + 1;
    if (indexer === 5) { indexer = 1; }
    character1.src = "images/character" + indexer + ".png";
    console.log(character1.src);
}

let indexerz = 1;

character2 = document.getElementById("character1")

button2 =document.getElementById("button2").addEventListener("click",myfunction2);
function myfunction2(){
    indexerz = indexerz + 1
    if (indexerz === 5) { indexerz = 1; }
    character2.src = "images/character" + indexerz + ".png";

}