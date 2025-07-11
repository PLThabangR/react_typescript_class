


class Person_ {

   private name:string;
    private age: number;


    constructor(name:string,age:number){
        this.name=name;
        this.age=age
    }

    getName(){
        return this.name
    }
    getAge(){
        return this.age
    }
}

const person =new Person_("Thabang",20)

console.log(person.getName())

interface Animal{
    name:String,
    age:number,
    color:string,
    crySound():string | boolean
}

const cat :Animal={
    name:"Miles",
    age:20,
    color:"red",
    crySound() :string{
        return "Meeew"
    }
}

interface Song{
    songName:string,
    singerName:string,
    printSongInfo(songName:string,singerName:string):string
}


const song1: Song={
    songName:"HYFR",
    singerName:"Drake",
    printSongInfo:(songName,singerName) :string=>{
        return `${songName} ${singerName}`
    }

}



interface Movie{
    title:string,
    year:number
    
}


interface MovieRating extends Movie{
    rating:number,
    movieInfo(title:string,year:number,rating:number):string
}


const movie1:MovieRating={
    title:"The Matrix",
    year:1999,
    rating:8.5,
    movieInfo(title:string,year:number,rating:number):string{
        return `${title} ${year}`
    }
    
}

let info=movie1.movieInfo("spider man",2005,8.5)

console.log(info)

//Working with Generics

function uniqueDataTypes<T>(a:T,b:T):[T,T]{
    return [a,b]
}

const  res= uniqueDataTypes<string>("Thabang","Zsseer")
console.log(res)

const  res1= uniqueDataTypes<number>(30,150)
console.log(res1)



interface Dog{
    name:string,
    age:number
}

const dog1 = uniqueDataTypes<Dog>({name:"Miles",age:10},{name:"Miles",age:10})
console.log(dog1)



