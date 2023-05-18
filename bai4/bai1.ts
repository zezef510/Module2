class  User {
  private _name : string;
  private _email : string ;
  private _role : number
 constructor( name : string, email : string , role : number) {
      this._email = email;
      this._name = name
     this._role = role
 }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }

   public getInfo(){
       return `User ${this.name} (${this.email}), role: ${this.role}`;
}
    public isAdmin(){
      if (this.role === 1 ){
          return ` la admin `
      }
       else if ( this.role === 2 ){
          return  `la User`
      }
       else {
           return  ` ko la ai ca`
      }
    }
}
let User1 = new User("q","12312@gmail.com",1)
console.log(User1.getInfo())
console.log(User1.isAdmin())