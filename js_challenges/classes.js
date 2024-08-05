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
//console.log(student1.getStudentId());
//console.log(student1.greetmsg());

const person = new person1('radha' , 20)
//console.log(person.getname());

//TASK 5 & 6//
class person2 {
    constructor(username , standerd){
        this.username = username
        this.standerd = standerd
    }
    static getGreeting(){
        return `Hey! ${this.username} congratulations for scoring 1st rank in ${this.standerd} standard`
    }
}
const greet = new person2("Kashish" , "12B")
//console.log(greet.getGreeting());

class studentScl {
    static studentCount = 5
    constructor(studentName){
        this.studentName = studentName;
        studentScl.studentCount++;
        //console.log(`Total no. of students: ${studentScl.studentCount}`);
        
    }
    static getStudent(){
        return studentScl.studentCount
    }
}
const student2 = new studentScl("Gaurav" , "Harsh" , "Khushi" , "Ayushi" , "Aishwarya" , "Shweta")
//console.log(student2.getStudent());

//TASK 7 & 8//
class people {
    constructor(firstName , lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get lastName (){
        return this._lastName.toUpperCase()
    }
    set lastName(value){
        this._lastName = value
    }
    get firstName (){
        return this._firstName.toUpperCase()
    }
    set firstName(value){
        this._firstName = value
    }
}
const socialPeople = new people("chakresh" , "singh")
console.log(socialPeople.firstName);
console.log(socialPeople.lastName);






























