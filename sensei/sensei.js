class Ninja {
    constructor(name, health) {
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log("Name " + this.name + "\n"
        + "Strength " + this.strength + "\n" 
        + "Speed " + this.speed + "\n" 
        + "Health " + this.health);
    }
    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name) {
        super(name, 210, 10, 10);
        this.wisdom = 10;
    }
    speakWisdom() {
        console.log("What one programmer can do in one month, two programmers can do in two months.");
    }
    drinkSake() {
        this.health += 50; 
        console.log(this.health);
    }
}


const ninja1 = new Ninja("Brian", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();


const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();

superSensei.showStats();
superSensei.drinkSake();

