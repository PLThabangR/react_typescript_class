

type Person={
    name:string,
    age:number
}


function printUser():Person{
    return{
        name:"Thabang",
        age:25
    }
}

console.log(printUser())

//Type alias is way for creating a new name for an existing type
//It allows you to define custom type name

type Person1={
    name:string,
    readonly age:number, //Readonly value cannot be changed once set
    phone?:number //optional value may not have a phone
}


const printPerson=(person:Person1):void=>{
    console.log(`Name: ${person.name}`)
    console.log(`Age: ${person.age}`)
}

const person1:Person1={
    name:"John",
    age:21,
    
}

printPerson(person1)

//Intersection type allows you to combine multiple types
// & operator is used to combine multiple types

 type  Person2={
    name:string,
    age:number
 }

 type Address={
    street:string,
    city:string
 }

 type  User = Person2 & Address

 const user1:User={
name:"Thabang",
age:50,
street:"123 Main St",
city:"New York"
 }

 console.log(user1)


 //Union types are used to represent values that can be one of several types
 //| operator is used to combine multiple types

 //Use pipe toCombine Person2 and Address 
 type  User2 = Person2 | Address

 //Or you can leave some values behind
 const user2:User2={
    name:"Thabang",
    street:"123 Main St",
    city:"New York"
 }

 console.log(user2)

 let password :string | number = "Thabang"
 password = 10
 

 console.log("The password value is ",password)

 password = "Zsseer994546"
 console.log("The password value is ",password)

 //array example tuple
 let  fruits1 :(string|number)[]=["apple",2,"banana",3,"orange",4]

 console.log(fruits1)


 //literal type can have only one specific value
let color : "red" | "green" | "blue" 
//colo
color = "red"
console.log(color)
color = "green"
console.log(color)
color = "blue"
console.log(color)

// Tuple example 
//Key value pair
let  myTuple1 :[number , string]=[2,"Yellow"]
myTuple1.push(1,"name")
console.log(myTuple1)
let myTupleArray:(number|string)[]=[]
myTupleArray.push(2,"Fruits")
console.log(myTupleArray)
myTupleArray.push(3,"Cherry")
myTupleArray.push(4,"Apple")
myTupleArray.push(5,"Banana")

console.log(myTupleArray)

//Enum is a way to define a set of named constants
//Enums allow me to goup related values
//Enum is a readOnly

enum Colors{
red="red",blue="blue",silver="silver",green="green"
}

console.log(Colors.red)

