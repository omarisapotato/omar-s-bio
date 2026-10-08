function Character (name, age, level, health, attack, run, jump) {
    this.name = name;
    this.age = age;
    this.level = level;
    this.health = health;
    this.attack = function(character) {
        character.health -= 25;
        console.log(`${this.name} Attacked ${character.name}, their health is now ${character.health}`)
    }
    this.jump = function() {
        console.log(`${this.name} jumped`);
    }
    this.run = function() {
        console.log(`${this.name} ran`);
    }
    this.printInfo = function() {
        console.log(`I am ${this.name}, I am ${this.age} years old, I am level ${this.level}, and have ${this.health} Health.`);
    }
    this.heal = function() {
        this.health += 15;
        console.log(`${this.name} healed and now has ${this.health} health.`)
    }
}

Ali = new Character('Ali', 23, 31, 100);
Ahmed = new Character('Ahmed', 26, 28, 85);

Ahmed.printInfo();
Ahmed.attack(Ali);
Ali.heal();