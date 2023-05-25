import {People} from "./ClassNguoi";
import {Teacher} from "./ClassGV";



class QLGV {
    list : Teacher[]

    constructor() {
        this.list = [];
    }

    add( add : Teacher) {
        this.list.push(add);
    }


    edit(name : string, product: Teacher) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i].name === name) {
                this.list[i] = product;
            }
        }
    }
    delete(id : number) {
        this.list = this.list.filter(item => item.id !== id);
    }
    searchName(name : string){
        return   this.list.filter(check => check.name === name)
    }
    LuongGiamdan(){
        // @ts-ignore
        this.list.sort((a, b) => b._wage - a._wage);
    }
    filterByAgeRange(minAge: number, maxAge: number): Teacher[] {
        return this.list.filter((teacher) => teacher.old >= minAge && teacher.old <= maxAge);
    }
    display(): void {
        console.table(this.list)
        }


}

