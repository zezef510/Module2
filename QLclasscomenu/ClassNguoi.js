"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.People = void 0;
var People = /** @class */ (function () {
    function People(name, old) {
        this._name = name;
        this._old = old;
    }
    Object.defineProperty(People.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(People.prototype, "old", {
        get: function () {
            return this._old;
        },
        set: function (value) {
            this._old = value;
        },
        enumerable: false,
        configurable: true
    });
    return People;
}());
exports.People = People;
