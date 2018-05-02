//Class dog starts here

//Parent class
class Dog{
    //dog cinstructor accepts dog name
    constructor(name){
        this.name = name;
    }

    speak(){
        return "woof";
    }
}

//Derived class from dog
class Labrador extends Dog{
    constructor(name, color, breedWeight){
        super(name);
        this.color = color;
        this.breedWeight = breedWeight;
    }

    speak(){
        return "Labrador says woof";
    }

}

let dog = new Labrador("tommy", "white", 30);
console.log(dog.speak());
