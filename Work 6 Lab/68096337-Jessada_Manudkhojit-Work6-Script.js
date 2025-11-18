let x = 5;
let y = 6;
let z = x+y;
console.log("Result of z :"+ z)
const a = 5;
const b = 6;
const c = a+b;
console.log("Result of z:"+ c);
document.write("JavaScript");
//string
let color = "Yellow";
let lastname = "Jonhson";
/*Number*/
let length = 16;
let weight = 7.5;
//BigInt แสดงเลขทั้งหมด ไม่ละไว้
let xx = 123456789012345678901234567890;
let yy = BigInt(1234567890123456789012345678790);
console.log("BigInt x"+ xx);
console.log("BigInt y"+ yy);
//Boolean
let xxx = true;
let yyy = false;
//Object
const person = {fristname:"John" ,lastname:"Doe"};
console.log(person);
//Array object
const  cars = ["Volvo","BMW","Toyota"];
//Date Object
const date = new Date("2022-03-25");
//Undefined
let xxxx;
let yyyy;
//Null
let x5 = null;
let y5 = null;
//Symbol
const x6 = Symbol();
const y6 = Symbol();
typeof ""; //Returns "string"
typeof "John"; //Returns "string"
typeof "John Doe"; //Returns "string"
typeof 0; //Returns "number"
typeof 314; //Returns "number"
typeof (3); //Returns "number"
typeof 3.14; //Returns "number"
console.log(typeof 3.14); //Returns "number"

let result ="";
//1. การคูณ/หาร มาก่อน บวก/ลบ
result += "1 + 2 * 3 = " + (1+2*3)+ "\n";
//2. วงเล็บมาก่อนเสมอ
result += "(1 + 2) * 3 = " + ((1+2)*3)+ "\n";
//3. การเปรียบเทียบ มาก่อน AND/OR
result += "3 > 2 && 2 > 1 = " + (3>2 && 2>1)+ "\n";
//4. NOT (!) มีลำดับสูงกว่า AND/OR
result += "!false || false = " + (!false || false)+ "\n";
let x7 = 5,y7 = 10;
result += "x = y + 2 => " + (x7 = y7 + 2) + "\n";
document.getElementById("output").innerText= result;