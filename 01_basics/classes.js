class user {
    constructor(username , email , contact) {
        this.username = username
        this.email = email
        this.contact = contact
    }
    encryptusername(){
       return `${this.username} Rajput`
    }
    encryptemail(){
       return `${this.email}gmail.com`
    }
    encryptcontact(){
       return `${this.contact}6789`
    }
}
const userInfo = new user("Kashish" , "kashish@" , 12345)
console.log(userInfo);
console.log(userInfo.encryptusername());
console.log(userInfo.encryptemail());
console.log(userInfo.encryptcontact());

//class inheritance//
class student {
   constructor(studentName){
      this.studentName = studentName
   }
   logMe(){
       console.log(`STUDENTNAME is ${this.studentName}`);
   }
}
class teacher extends student{
   constructor(studentName , email , password){
      super(studentName)
      this.email = email
      this.password = password
   }

   addCourse(){
      console.log(`A new course is added by ${this.studentName}`);
   }
}
const sub = new teacher("Kashish" , "kashish@1234gmail.com" , 19902)
//sub.addCourse()
//sub.logMe()
const stuClass = new student("vanshika")
//stuClass.logMe()




































































