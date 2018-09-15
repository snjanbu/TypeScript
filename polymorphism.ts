class Vehicle{
    name:string='Bike';
    drive(){
        console.log('Riding Vehicle');
    }
}

class Check extends Vehicle{
    
    drive(){
        console.log('Check Drive');
    }

    vehicleDrive(){
        super.drive();
    }

}

var check=new Check();
check.drive();
check.vehicleDrive();
