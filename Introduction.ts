var a:number;
var b:string;
var c:boolean;
var d:object;
var e:number;
a=34.34,e=34;
b='Welcome To TypeScript';
c=true;
d={id:'100',name:'sanjay'};
var arrowFn=(a:number,e:number):number=>a+e;
arrowFn(a,e);
var arr:number[];
arr=[1,2,3,4,5];
var diffArray:[number,boolean,string];
diffArray=[1,true,'Sanjay']

var add=function(a:number,b:number):number{
    return a+b;
}
console.log(add(3,9));

