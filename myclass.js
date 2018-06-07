class Dog {
    constructor(name, restlv) {
        this._name = name;
        this._restlv = restlv;
        this._happiness = 10;
    }
    get name() {
        console.log(`Meet ${this._name}, he is the best dog ever!`)
        return this._name;
    }
    play(happy) {
        this._happiness += happy;
        console.log(`${this._name} is super happy!`);
    }
    sleep() {
        this._restlv += 3;
        console.log(`${this._name} has a rest level of ${this._restlv}.`);
    }
}

var puppy = new Dog('Boomer', 5);

console.log(puppy.name);
puppy.sleep();
puppy.play(4);

