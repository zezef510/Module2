var User = /** @class */ (function () {
    function User(name, email, role) {
        this._email = email;
        this._name = name;
        this._role = role;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "email", {
        get: function () {
            return this._email;
        },
        set: function (value) {
            this._email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getInfo = function () {
        return "User ".concat(this.name, " (").concat(this.email, "), role: ").concat(this.role);
    };
    User.prototype.isAdmin = function () {
        if (this.role === 1) {
            return " la admin ";
        }
        else if (this.role === 2) {
            return "la User";
        }
        else {
            return " ko la ai ca";
        }
    };
    return User;
}());
var User1 = new User("q", "12312@gmail.com", 1);
console.log(User1.getInfo());
console.log(User1.isAdmin());
