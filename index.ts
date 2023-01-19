#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkanimation from "chalk-animation"



const sleep =()=>{
    return new Promise((res)=>{
        setTimeout(res, 2000)
    })
}
async function welcome(){
    let rainbowTitle= chalkanimation.neon("welcome to  piaic ");
    await sleep();
    rainbowTitle.stop
}
    await welcome()


    class piaic {
        course:string
       static city:string ="karachi"
        constructor(course:string ,city :string){
            this.course=course;
        
        }
    
    
 Head(name:string[]=["zia khan"]){
 
console.log(`${this.course} ${piaic.city}`);


        }

        


    }

class SecA extends piaic{
no_of_students:number
day:string

    constructor(course :string ,city:string,no_of_students:number,day:string){
        super(course,city)
        this.no_of_students= no_of_students
this.day=day

        }
        Head(name=["zia khan","hira khan","adil khan","Daniyal nagori"]) {
           console.log( chalkanimation.rainbow(`${name} are your teachers  ${this.course} your onsiteclass is at Bahria Auditorium`));
            super.Head(name)
        }
        

    
}







class SecB extends piaic{
    no_of_students:number
    day:string
    constructor(teacher :string ,city :string,no_of_students:number,day :string){
        super(teacher,city)
        this.no_of_students=no_of_students
        this.day=day

    }
Head(name:string[]=["zia khan","hira khan","adil khan","Daniyal nagori"]){

    console.log( `${name}${this.course}your onsiteclass is at Bahria Auditorium  `);
    super.Head(name)
 }
} 




class studentsCEO extends piaic{
    StudentCEO:string[]

    constructor(teacher :string ,city :string,StudentCEO:string[]){
        super(teacher,city)
        this.StudentCEO=StudentCEO
  
}

Head(name :string[]=["sectionA ceo","sectionB ceo"]){
    console.log( `${this.course} ${piaic.city} ${this.StudentCEO}chief operating  officer of students to help and managed them `)
    super.Head(name)
}   
}

 class Linemanagers extends piaic{
    LineManager:string[]
    constructor(course :string ,city :string,LineManager:string[]) {
        super(course, city);
this.LineManager=LineManager
    }
Head(name:string[]=["girls line managers"]){
console.log(` call ${name}${this.LineManager} for any help`)
super.Head(name)
 }
}

let sectionA =new SecA("web 3","Karachi" ,750,"Tuesday" )
let sectionB = new SecB("web 3" ,"Karachi",750,"Wednesday")

let CEOofStudents= new studentsCEO("web 3","Karachi",["mubbashirali","syed Hamza"])
 let girlslineManager=new Linemanagers("web 3","Karachi",["ariba","hafsa","jawaria" ,"Miss faiza","noor ulain"] );
CEOofStudents.Head()
 console.log(sectionB.day
    );
 
 

 