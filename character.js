//Use this script to generate your character
export default function Person(race,item){
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    let reflect;
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.initializePlayer = function(anotherPlayer) {
      switch(race) {
          case "Humans":
              anotherPlayer.totalDamage -= Math.floor((anotherPlayer.totalDamage/100)*20);

              break;
          case "Orcs":
              this.maxHealth *= 1.4;
              break;
          case "Elves":
              reflect = Math.floor((Math.random() * 3) + 1);

              if(reflect === 1) {
                  this.totalDamage = anotherPlayer.totalDamage;
                  anotherPlayer.totalDamage = 0;
              } else {
                  anotherPlayer.totalDamage -= Math.floor((anotherPlayer.totalDamage/100)*50);
              }
              break;
          case "Vampires":
              anotherPlayer.currenthealth -= Math.floor((anotherPlayer.currenthealth / 100) * 10);
              this.currenthealth += Math.floor((this.currenthealth / 100) * 10);

              break;

      }
    };

    this.handleItems = function(anotherPlayer) {
        switch(item) {
            case "boots":
                let dodge = Math.floor((Math.random() * 3) + 1);
                console.log(reflect);
                if(dodge === 1) {
                    this.totalDamage = 0;
                } else {
                    this.totalDamage = this.damage();
                }
                break;
            case "staff":
                let totalHealing = this.heal();
                totalHealing += ((totalHealing / 100) * 20);
                break;
            case "sword":
                this.totalDamage = this.damage();
                this.totalDamage += ((this.totalDamage / 100) * 30);
                break;
            case "bow":
                let doubleAttack = Math.floor((Math.random() * 3) + 1);

                if(doubleAttack === 1) {
                    let attack1 = this.damage();
                    let attack2 = this.damage();
                    this.totalDamage = attack1 + attack2;
                } else {
                    this.totalDamage = this.damage();
                }
                break;
        }

    };

    this.heal = function() {

        return Math.floor((Math.random() * 30) + 3);



};

    this.damage = function(){

        return  this.currenthealth -= Math.floor((Math.random() * 20) + 3);
    };

    this.totalDamage = this.damage();

    displayChar(this.race,this.item,this.maxHealth);
}

//Delete this functiom
function displayChar(race,item,maxHealth){
    return console.log(`I am a ${race}, I wield a ${item}, my total health point are ${maxHealth}`);}

