"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Blog = void 0;
var Blog = /** @class */ (function () {
    function Blog(id, content, title) {
        this._id = id;
        this._content = content;
        this._title = title;
    }
    Object.defineProperty(Blog.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blog.prototype, "content", {
        get: function () {
            return this._content;
        },
        set: function (value) {
            this._content = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Blog.prototype, "title", {
        get: function () {
            return this._title;
        },
        set: function (value) {
            this._title = value;
        },
        enumerable: false,
        configurable: true
    });
    return Blog;
}());
exports.Blog = Blog;
