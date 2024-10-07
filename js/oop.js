
// #region OOP

//usually
// let baseSalary = 50000;
// let overtime = 10;
// let rate = 20;

// const getWage = (parameter1, parameter2, parameter3) =>{
//   return parameter1 + (parameter2 * parameter3)
// }

// console.log(getWage(baseSalary, overtime, rate));

// //object-oriented programming
// let employee ={
//   baseSalary: 40000,
//   overtime: 10,
//   rate: 20,
//   getWage: function(){
//     return this.baseSalary + (this.overtime * this.rate)
//   }
// }

// console.log(employee.getWage());

// #endregion

// #region OOP Class

// class Student{
//   constructor( name, course){
//     this.name = name,
//     this.course = course
//   }

//   // method  - function into class
//   showDetail(){
//     return `${this.name} course: ${this.course} `
//   }

//     static studentType = "intern"
//     get studentCourse(){
//       return this.course
//     }
//     set studentCourse(value){
//       if (value > 6){
//         console.log("error");
//         return
//       }
//       this.course = value
//     }
// }

// const student = new Student ('Anna', 2)

// console.log(student.showDetail());     //method
// student.studentCourse = 7              // set
// console.log(Student.studentType);      // static
// console.log(student.studentCourse);    //get




// #endregion

// #region inheritance 

class Vehicale {
  constructor(kind){
    this.kind = kind
  }
  drive() {
    console.log(`${this.kind} is driving`);
    
  }
}

class Car extends Vehicale {

  constructor(kind, passengers){
    // this.kind = kind, // wrong way 'cause it's a parent's element
    super(kind)
    this.passengers = passengers
  }

  carryPassenger(){
    console.log(`${this.kind} carries ${this.passengers} passengers`);
    
  }
}

const car = new Car("audi", 5)

car.carryPassenger()
console.log(car);

// #endregion