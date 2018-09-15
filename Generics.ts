function printValue<T>(arg:T):T{
    return arg;
}

console.log(printValue('Sanjay'));
console.log(printValue(true));
console.log(printValue(2345));

class Emp{
    constructor(protected employeeNumber:number,protected employeeName:string){
        
    }
    printEmp():string{
        return this.employeeNumber+" "+this.employeeName;
    }
}

class Man extends Emp{
    constructor(employeeNumber:number,employeeName:string,private allowance:string){
        super(employeeNumber,employeeName);
    }
}

function printVal<T extends Emp>(arg:T):string{
    return arg.printEmp();
}

var tt=new Man(1234,'Jim','Car');
console.log(printVal(tt));