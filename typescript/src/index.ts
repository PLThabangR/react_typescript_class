console.log("*****************************************primitive types *************************************************")
//Annotations for variables
let myName: string = "Thabang";
let myAge: number = 25;
let isMarried: boolean = false;
let sentence: string = `Hello, my name is ${myName} and I'm ${myAge} years old.`

console.log(sentence)
console.log(isMarried)
console.log(typeof myName  ,typeof myAge)

console.log("\n***************************************** Any type *************************************************************")

//Any type can be reassigned to any other type
//Do not use any unless otherwise
let myVariable: any = "Hello"
console.log(myVariable)
myVariable = 10
console.log(myVariable)
myVariable = true
console.log(myVariable)


console.log("***************************************** Functions *************************************************")


function add(num1: number, num2: number): number {
    return num1 + num2
}
const sum=add(1,2)
console.log(sum)

const multiply=(num1: any, num2: number,...num3: any): number => {
   console.log(num3)
   
   return num2*num3.length+num1
}

const numbAray: number[]=[1,2,3,4,5]

console.log(numbAray.length)
console.log(multiply(4,2,numbAray))





console.log("\n***************************************** Arrays *************************************************************")

let fruits :string[] = ["apple","banana","orange"]
let numbers1 :number[] = [1,2,3]
console.log(fruits[0])
console.log(fruits[2])
console.log(numbers1[0])
console.log(numbers1[2])

//Multidimensional arrays contains arrays  

let multiArray: number[][] =[[1,2,3],
                             [4,5,6]]
console.log(multiArray[0][0])
console.log(multiArray[0][2])
console.log(multiArray[1][0])

