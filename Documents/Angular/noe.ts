class Animal{
    name : string;
    legs : number;
    
    constructor(name : string, legs:number){
        this.name = name;
        this.legs = legs;
        
    }
}
class Chien extends Animal{
    race : string;
    constructor(name: string, legs: number) {
       super(name, legs);
    }
}

class Oiseau extends Animal {
    constructor(name: string, legs: number) {
        super(name, legs);

    }
}
class Chat extends Animal {
    constructor(name: string, legs: number) {
        super(name, legs);

    }
}
class Poisson extends Animal {
    constructor(name: string, legs: number) {
        super(name, legs);
    }
}


interface AnimalsColor{
    color : string;
}
interface AnimalsLegs{
    legs : number;
}



function picture(animal: Animal) {
    console.log(`You can do pictures of me`);
}
function bark(chien : Chien){
    console.log(`I can bark louder than you do`);
}
function fly(oiseau : Oiseau){
    console.log(`I can fly`);
}
function swim(poisson : Poisson){
    console.log(`I can swim faster than yo do`);
}
function meow(chat : Chat){
    console.log(`Meow`);
}
function pet(animal : AnimalsLegs){
    console.log(`You can pet me`);
}
function feed(animal : AnimalsColor){
    console.log(`You need to feed me`);
}

//test des fonctions
let chatEuropéen = new Chat('lyra',3);
meow(chatEuropéen);

let animal = {
    name : "stark",
    weight: 2 ,
    legs:4
};
pet(animal);

let animal2 = { color : "noir"}
feed(animal2);