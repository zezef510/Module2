var Employee = /** @class */ (function () {
    function Employee(ho, ten, ns, dc, nlv) {
        this._Ho = ho;
        this._Ten = ten;
        this._NS = ns;
        this._DC = dc;
        this._NLV = nlv;
    }
    Object.defineProperty(Employee.prototype, "Ho", {
        get: function () {
            return this._Ho;
        },
        set: function (value) {
            this._Ho = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Ten", {
        get: function () {
            return this._Ten;
        },
        set: function (value) {
            this._Ten = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "NS", {
        get: function () {
            return this._NS;
        },
        set: function (value) {
            this._NS = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "DC", {
        get: function () {
            return this._DC;
        },
        set: function (value) {
            this._DC = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "NLV", {
        get: function () {
            return this._NLV;
        },
        set: function (value) {
            this._NLV = value;
        },
        enumerable: false,
        configurable: true
    });
    return Employee;
}());
var EmployeeManager = /** @class */ (function () {
    function EmployeeManager() {
    }
    EmployeeManager.show = function () {
        return EmployeeManager.employess1;
    };
    EmployeeManager.add = function (ns) {
        EmployeeManager.employess1.push(ns);
    };
    EmployeeManager.delete = function (index) {
        EmployeeManager.employess1.splice(index, 1);
    };
    EmployeeManager.chiTiet = function (index) {
        return EmployeeManager.employess1[index];
    };
    EmployeeManager.upDate = function (index, lem) {
        EmployeeManager.employess1[index] = lem;
    };
    EmployeeManager.employess1 = [];
    return EmployeeManager;
}());
EmployeeManager.add(new Employee('John', 'Doe', 1990, '123 Main St', 'Software Engineer'));
EmployeeManager.add(new Employee('Zoe', 'jin', 1991, '456 Main St', 'Rot Lezngin'));
EmployeeManager.add(new Employee('Zoe1', 'jin1', 1992, '789 Main St', 'Rot Lezngin1'));
EmployeeManager.add(new Employee('Zoe2', 'jin2', 1993, '890 Main St', 'Rot Lezngin2'));
EmployeeManager.add(new Employee('Zoe1', 'jin2', 1994, '5959 Main St', 'Rot Lezngin3'));
console.table(EmployeeManager.show());
var employeeToUpdate = EmployeeManager.chiTiet(0);
if (employeeToUpdate) {
    employeeToUpdate.NLV = 'Senior Software Engineer';
    EmployeeManager.upDate(0, employeeToUpdate);
}
console.table(EmployeeManager.show());
EmployeeManager.delete(2);
console.table(EmployeeManager.show());
