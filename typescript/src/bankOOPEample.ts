
interface IBankAccount{
    deposite(amount:number):void;
    withdraw(amount:number):void;
    getBalance():number
}

class BankAccount implements IBankAccount{
     public accountHolder:string;
     private balance:number=0;
     protected accountNumber:string


     constructor(accountHolder:string,accountNumber:string){
        this.accountHolder=accountHolder
        this.accountNumber=accountNumber
     }

     deposite(amount: number): void {
        if(amount>0){
            this.balance+=amount
            console.log(`${amount} was deposited.\n New balance is ${this.balance}`)
        }
     }

     withdraw(amount: number): void {
        if(amount>0 && amount<=this.balance){
            this.balance-=amount
            console.log(`${amount} was withdrawn.\n New balance is ${this.balance}`)
        }else{
            console.log("Insufficient funds")
        }
     }

     getBalance(): number {
         return this.balance
     }


}



