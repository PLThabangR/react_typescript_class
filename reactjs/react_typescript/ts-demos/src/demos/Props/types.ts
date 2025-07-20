
 interface Info{
    id:number,
    name:string,
    email:string,
    walk():string,
    salary(pay:number):number
}


 interface AdminInfoList extends Info{
    department:string,
    location:string[]
}


export {type Info, type AdminInfoList}