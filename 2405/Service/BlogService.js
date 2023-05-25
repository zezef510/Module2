"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlogService = void 0;
var Blog_1 = require("../entity/Blog");
var BlogService = /** @class */ (function () {
    function BlogService() {
        this.list = [];
    }
    BlogService.prototype.add = function (t) {
        this.list.push(t);
    };
    BlogService.prototype.update = function (id, t) {
        throw new Error("Method not implemented.");
    };
    BlogService.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    BlogService.prototype.show = function () {
        console.table(this.list);
    };
    ;
    return BlogService;
}());
exports.BlogService = BlogService;
var A = new BlogService();
var B = new Blog_1.Blog(12, "S", "Q");
A.add(B);
A.show();
