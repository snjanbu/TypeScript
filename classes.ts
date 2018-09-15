class Employee{
    employeeNo:number;
    employeeName:string;

    constructor(employeeNo:number,employeeName:string){
        this.employeeNo=employeeNo;
        this.employeeName=employeeName;
    }

    getFullName(){
        return this.employeeNo+" "+this.employeeName;
    }
}

class Manager extends Employee{
    project:string;
    constructor(employeeNo:number,employeeName:string,project:string){
        super(employeeNo,employeeName);
        this.project=project;
    }
    getDetails(){
        return this.employeeNo+" "+this.employeeName+" "+this.project;
    }
}

var sanjay=new Employee(6100,'Sanjayanbu');
var santhosh=new Employee(6101,'Santhosh');
var manager=new Manager(6102,'Seetha','HUE');

console.log(sanjay.getFullName());
console.log(santhosh.getFullName());
console.log(manager.getDetails());