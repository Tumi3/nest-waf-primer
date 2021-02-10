const fullname: string = "tumi";

const count: Number = 10


export class Person{
    //declare property types 
    firstName: string; 
    lastName: string; 
    gender: string;
    height: number; 
    hobbies: string[]; 
    birthday: Date;
    isAlive: boolean;


    constructor(firstName: string, lastName: string, gender:string, height: number, hobbies: string[], birthday: Date, isAlive: boolean){
    this.firstName = firstName; 
    this.lastName = lastName;      
    this.gender = gender; 
    this.height = height;
    this.hobbies = hobbies; 
    this.birthday = birthday;
    this.isAlive = isAlive;
    } 
};


//Accessing object properties 
let firstName: string = "Pius";
let lastName: string= "Onobhayedo"; 
let gender: string = "male";
let height: number = 1.7;
let hobbies: string[] = ['Tennis','Programming']; 
let birthday: Date = new Date(1900,4,5);
let isAlive: boolean= true;

let person1 = new Person(firstName, lastName, gender, height, hobbies, birthday, isAlive)

console.log (`Person 1 is ${person1.firstName} whose height is ${person1.height} and birthday is ${person1.birthday.toLocaleDateString()} and hobbies are ${person1.hobbies},` );
