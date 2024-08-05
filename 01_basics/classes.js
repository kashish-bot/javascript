/*class user {
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
}*/
//const userInfo = new user("Kashish" , "kashish@" , 12345)
//console.log(userInfo);
//console.log(userInfo.encryptusername());
//console.log(userInfo.encryptemail());
//console.log(userInfo.encryptcontact());

//class inheritance//
/*class student {
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
const sub = new teacher("Kashish" , "kashish@1234gmail.com" , 19902)*/
//sub.addCourse()
//sub.logMe()
//const stuClass = new student("vanshika")
//stuClass.logMe()

//static classes//
/*class user1 {
   constructor(username , address) {
      this.username = username
      this.address = address
   }
   static getusername (){
       return `The name of user is ${this.username}`
   }
   getaddress(){
      return `And she live in ${this.address}`
   }
}
const info = new user1("Jasmine" , "wz-306 naraina village")*/
//console.log(info.getusername());
//console.log(info.getaddress() );

/*class store extends user1{
   constructor(username , address , contact){
      super(username , address)
      this.contact = contact
   }
   regularUser(){
      return `Our regular customer is ${this.username}`
   }
   userContact(){
      return `And her contact is ${this.contact}`
   }
}
const storeInfo = new store("sameep" , "b-12A" , 12345679)*/
//console.log(storeInfo.getusername()); // this is why we use static functin so that no one can access it //

//getter and setter//
class student {
   constructor(studentName , email){
      this.studentName = studentName;
      this.email = email;
   }
   get email(){
      return this._email.toUpperCase()
   }
   set email(value){
      this._email = value
   }
   get studentName(){
      return this._studentName.toUpperCase()
   }
   set studentName(value){
      this._studentName = value
   }
}
const school = new student("kashish" , "kashish@gmail.com")
console.log(school.studentName);
console.log(school.email);










































































