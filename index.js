#! /usr/bin/env node
import chalkanimation from "chalk-animation";
const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 2000);
    });
};
async function welcome() {
    let rainbowTitle = chalkanimation.neon("welcome to  piaic ");
    await sleep();
    rainbowTitle.stop;
}
await welcome();
class piaic {
    course;
    static city = "karachi";
    constructor(course, city) {
        this.course = course;
    }
    Head(name = ["zia khan"]) {
        console.log(`${this.course} ${piaic.city}`);
    }
}
class SecA extends piaic {
    no_of_students;
    day;
    constructor(course, city, no_of_students, day) {
        super(course, city);
        this.no_of_students = no_of_students;
        this.day = day;
    }
    Head(name = ["zia khan", "hira khan", "adil khan", "Daniyal nagori"]) {
        console.log(chalkanimation.rainbow(`${name} are your teachers  ${this.course} your onsiteclass is at Bahria Auditorium`));
        super.Head(name);
    }
}
class SecB extends piaic {
    no_of_students;
    day;
    constructor(teacher, city, no_of_students, day) {
        super(teacher, city);
        this.no_of_students = no_of_students;
        this.day = day;
    }
    Head(name = ["zia khan", "hira khan", "adil khan", "Daniyal nagori"]) {
        console.log(`${name}${this.course}your onsiteclass is at Bahria Auditorium  `);
        super.Head(name);
    }
}
class studentsCEO extends piaic {
    StudentCEO;
    constructor(teacher, city, StudentCEO) {
        super(teacher, city);
        this.StudentCEO = StudentCEO;
    }
    Head(name = ["sectionA ceo", "sectionB ceo"]) {
        console.log(`${this.course} ${piaic.city} ${this.StudentCEO}chief operating  officer of students to help and managed them `);
        super.Head(name);
    }
}
class Linemanagers extends piaic {
    LineManager;
    constructor(course, city, LineManager) {
        super(course, city);
        this.LineManager = LineManager;
    }
    Head(name = ["girls line managers"]) {
        console.log(` call ${name}${this.LineManager} for any help`);
        super.Head(name);
    }
}
let sectionA = new SecA("web 3", "Karachi", 750, "Tuesday");
let sectionB = new SecB("web 3", "Karachi", 750, "Wednesday");
let CEOofStudents = new studentsCEO("web 3", "Karachi", ["mubbashirali", "syed Hamza"]);
let girlslineManager = new Linemanagers("web 3", "Karachi", ["ariba", "hafsa", "jawaria", "Miss faiza", "noor ulain"]);
CEOofStudents.Head();
console.log(sectionB.day);
