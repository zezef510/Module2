"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NY = void 0;
var NY = /** @class */ (function () {
    function NY(id, name, zodiac, hometown, birthYear, hobby) {
        this._id = id;
        this._name = name;
        this._zodiac = zodiac;
        this._hometown = hometown;
        this._birthYear = birthYear;
        this._hobby = hobby;
    }
    Object.defineProperty(NY.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NY.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NY.prototype, "zodiac", {
        get: function () {
            return this._zodiac;
        },
        set: function (value) {
            this._zodiac = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NY.prototype, "hometown", {
        get: function () {
            return this._hometown;
        },
        set: function (value) {
            this._hometown = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NY.prototype, "birthYear", {
        get: function () {
            return this._birthYear;
        },
        set: function (value) {
            this._birthYear = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NY.prototype, "hobby", {
        get: function () {
            return this._hobby;
        },
        set: function (value) {
            this._hobby = value;
        },
        enumerable: false,
        configurable: true
    });
    return NY;
}());
exports.NY = NY;
