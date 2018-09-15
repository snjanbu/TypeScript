export interface Vehicle{
    name:string;
    drive():void;
}

class Bike implements Vehicle{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    drive=function():void{
        console.log("Riding Bike");
    };
}

class Car implements Vehicle{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    drive=():void=>console.log("Riding Car");
}

var bike:Vehicle=new Bike('bike');
bike.drive();

let car:Vehicle=new Car('car');
car.drive();

var anyObject={
    'name':'Sanjay',
    drive(){
        console.log('Any Object Visibility');
    }
}

anyObject.drive();