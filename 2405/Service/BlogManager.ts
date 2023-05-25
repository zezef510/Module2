import {Iservice} from "./Iservice";
import {Blog} from "../entity/Blog";

export  class BlogManager implements Iservice<Blog>{
    listBlogs  : Blog[] = []
    add(add: Blog) {
       this.listBlogs.push(add)
    }
    update(id: number, t: Blog) {
        // @ts-ignore
        const index = this.listBlogs.findIndex((item) => item.id === id);// findIndex chi ho tro phien ban ES2015 hoac moi hon

        if (index !== -1) {
            this.listBlogs[index] = t;

        }
    }

    delete(id: number) {
        this.listBlogs = this.listBlogs.filter(item => item.id !== id);
    }
    show(){
        console.table(this.listBlogs)
    };

}
let newBlog = new BlogManager()
let B = new Blog(12,"S","Q")
newBlog.add(B)
newBlog.show()


