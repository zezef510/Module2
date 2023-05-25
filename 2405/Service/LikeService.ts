import {Iservice} from "./Iservice";
import {Like} from "../entity/Like";

export class LikeService implements Iservice<Like>{
    add(t: Like) {
        throw new Error("Method not implemented.");
    }
    update(id: number, t: Like) {
        throw new Error("Method not implemented.");
    }
    delete(id: number) {
        throw new Error("Method not implemented.");
    }
    show: any;

}