/* eslint-disable max-classes-per-file, class-methods-use-this, no-param-reassign */
class Base {
    constructor(name) {
        this.name = name;
        this.points = 100;
    }

    randomInteger(min, max) {
        const rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }
}

class Warrior extends Base {
    constructor(name, points) {
        super(name, points);
        this.type = 'Warrior';
        this.minAttakPower = this.randomInteger(1, 20);
        this.maxAttakPower = this.randomInteger(20, 40);
    }

    toAttack(person) {
        person.points -= this.randomInteger(10, 100);
    }
}

class Monster extends Base {
    constructor(name) {
        super(name);
        this.type = 'Monster';
        this.minAttakPower = this.randomInteger(1, 20);
        this.maxAttakPower = this.randomInteger(20, 40);
    }

    toAttack(person) {
        person.points -= this.randomInteger(10, 100);
    }
}

class Healer extends Base {
    constructor(name) {
        super(name);
        this.type = 'Healer';
        this.minHealingPower = this.randomInteger(1, 20);
        this.maxHealingPower = this.randomInteger(20, 40);
    }

    toHeal(person) {
        person.points += this.randomInteger(10, 100);
    }
}

const warrior = new Warrior('spider');
const monster = new Monster('halk');
const healer = new Healer('komar');

console.log(warrior.points)
console.log(monster.points)

monster.toAttack(warrior);
warrior.toAttack(monster)
console.log(warrior.points)
console.log(monster.points)

healer.toHeal(warrior)
healer.toHeal(monster)
console.log(warrior.points)
console.log(monster.points)






