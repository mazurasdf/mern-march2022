const Fighter = require("./fighter");

class Samus extends Fighter{
    constructor(playerNum=1){
        super("Samus",playerNum,8,6,8);
        this.charged = false;
    }

    special(opponent){
        if(this.charged){
            this.charged = false;
            opponent.percent += 35;
            console.log(`Samus fired her charge shot at ${opponent.name} and dealt 35 percent!!`);
        }
        else{
            this.charged = true;
            console.log(`Samus is charging her arm cannon!`);
        }
    }
}

class Jigglypuff extends Fighter{
    constructor(playerNum){
        super("Jigglypuff",playerNum,3,8,1);
    }

    special(opponent){
        if(Math.floor(Math.random() * 2) === 1){
            opponent.percent += 40;
            console.log(`Jigglypuff used rest on ${opponent.name}. It's super effective!`);
        }
        else{
            console.log(`Jigglypuff used rest on ${opponent.name}. It didn't work! Bummer!!`);
        }
    }
}

class DonkeyKong extends Fighter{
    constructor(playerNum){
        super("Donkey Kong",playerNum,10,4,10);
    }

    special(opponent){
        if(opponent.percent >= 100){
            opponent.percent = 0;
            console.log(`Donkey Kong picked up ${opponent.name} and yeeted them into their death`);
        }
        else{
            console.log(`Donkey Kong tried to pick up and carry ${opponent.name}, but they got out of it and attacked!`);
            opponent.attack(this);
        }
    }
}

const rob = new Fighter("ROB",1,8,7,5);
const samus = new Samus(2);
const jiggs = new Jigglypuff(3);
const dk = new DonkeyKong(4);

samus.special(rob);
samus.special(jiggs);
rob.special(jiggs);
rob.special(jiggs);
rob.special(jiggs);
rob.special(jiggs);
rob.special(jiggs);
rob.special(jiggs);
jiggs.special(samus);
console.log(jiggs);
dk.special(jiggs);

