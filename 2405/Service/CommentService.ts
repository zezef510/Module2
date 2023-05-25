import {Comment} from "../entity/Comment";
import {Iservice} from "./Iservice";

export  class CommentService implements Iservice<Comment>{
    add(t: Comment) {
        throw new Error("Method not implemented.");
    }
    update(id: string, t: Comment) {
        throw new Error("Method not implemented.");
    }
    delete(id: string) {
        throw new Error("Method not implemented.");
    }
    show: any;

}