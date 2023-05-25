import {Iservice} from "./Iservice";
import {User} from "../entity/User";

export  class UserService implements Iservice<User>{
    add(t: User) {
        throw new Error("Method not implemented.");
    }
    update(id: string, t: User) {
        throw new Error("Method not implemented.");
    }
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    show: any;

}