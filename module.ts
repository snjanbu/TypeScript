import {Vehicle} from './interface'

class Lorry implements Vehicle{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    drive(){
        console.log('Driving Lorry');
    }
}

var lorry=new Lorry('Benz');
lorry.drive();