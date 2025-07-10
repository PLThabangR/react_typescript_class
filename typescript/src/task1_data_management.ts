

//Create a type of employee
 type Employee={
    fullName:(string|string)[], //using a tuple
    age:number,
    department:string,
    skill:string,
    isActive:boolean,

}

//Create an employees
//First employee
const employee1:Employee={
    fullName:["John","Doe"],
    age:25,
    department:"IT",
    skill:"JavaScript",
    isActive:true}
//Second employee
    const employee2:Employee={
        fullName:["Rose","Doe"],
        age:30,
        department:"Art & Design",
        skill:"Piano",
        isActive:false}
    
  const logEmployee=(employee:Employee):void =>{
      console.log(`Name: ${employee.fullName[0]} ${employee.fullName[1]}`)
      console.log(`Age: ${employee.age}`)
      console.log(`Department: ${employee.department}`)
      console.log(`Skill: ${employee.skill}`)
      console.log(`Active: ${employee.isActive? "Yes":"No"}`)
      console.log("\n")
  }      

  //Log employees
  logEmployee(employee1)
  logEmployee(employee2)