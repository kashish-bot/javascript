//TASK 1&2//
/*class person{
    constructor(name , age){
        this.name = name;
        this.age = age
    }
    greetingmsg(){
       return `Hey! ${this.name} Rajput hope this day bring light in your life.`
    }
    updateAge(){
        return `Updated is age is : ${this.age = 22}`
    }
}
const personInfo = new person("Kashish" , 20)
console.log(personInfo);
console.log(personInfo.greetingmsg());
console.log(personInfo.updateAge());*/

//TASK 3&4//
class person1 {
    constructor(name , age){
        this.name = name
        this.age = age
    }
    getname(){
        return `${this.name}`
    }
    getage(){
        return `${this.age}`
    }
}
class student extends person1{
    constructor(name , age , studentId){
        super(name , age)
        this.studentId = studentId
    }
    getStudentId(){
        return `${this.studentId}`
    }
    greetmsg(){
        return `Many Many congratulations to the student whos id is: ${this.studentId}`
    }
}
const student1 = new student('Gargi' , 20 , "S2257K")
console.log(student1.getStudentId());
console.log(student1.greetmsg());

const person = new person1('radha' , 20)
console.log(person.getname());

























