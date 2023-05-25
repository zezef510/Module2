var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, grade) {
        var _this = _super.call(this, name, age) || this;
        _this.grade = grade;
        return _this;
    }
    return Student;
}(Person));
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    return Teacher;
}(Person));
var StudentManager = /** @class */ (function () {
    function StudentManager() {
        this.students = [];
    }
    StudentManager.prototype.add = function (student) {
        this.students.push(student);
    };
    StudentManager.prototype.edit = function (name, newStudent) {
        var index = this.find(name);
        if (index !== -1) {
            this.students[index] = newStudent;
        }
    };
    StudentManager.prototype.delete = function (name) {
        var index = this.find(name);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    };
    StudentManager.prototype.find = function (name) {
        for (var i = 0; i < this.students.length; i++) {
            // @ts-ignore
            if (this.students[i].name.toLowerCase().includes(name.toLowerCase())) {
                return i;
            }
        }
        return -1;
    };
    StudentManager.prototype.getHighestGrade = function () {
        if (this.students.length === 0) {
            return undefined;
        }
        var highestGradeStudent = this.students[0];
        for (var i = 1; i < this.students.length; i++) {
            if (this.students[i].grade > highestGradeStudent.grade) {
                highestGradeStudent = this.students[i];
            }
        }
        return highestGradeStudent;
    };
    StudentManager.prototype.display = function () {
        console.log("List of students:");
        for (var i = 0; i < this.students.length; i++) {
            console.log("".concat(this.students[i].name, ", ").concat(this.students[i].age, ", ").concat(this.students[i].grade));
        }
    };
    return StudentManager;
}());
var TeacherManager = /** @class */ (function () {
    function TeacherManager() {
        this.teachers = [];
    }
    TeacherManager.prototype.add = function (teacher) {
        this.teachers.push(teacher);
    };
    TeacherManager.prototype.edit = function (name, newTeacher) {
        var index = this.find(name);
        if (index !== -1) {
            this.teachers[index] = newTeacher;
        }
    };
    TeacherManager.prototype.delete = function (name) {
        var index = this.find(name);
        if (index !== -1) {
            this.teachers.splice(index, 1);
        }
    };
    TeacherManager.prototype.find = function (name) {
        for (var i = 0; i < this.teachers.length; i++) {
            // @ts-ignore
            if (this.teachers[i].name.toLowerCase().includes(name.toLowerCase())) {
                return i;
            }
        }
        return -1;
    };
    TeacherManager.prototype.sortBySalaryDescending = function () {
        this.teachers.sort(function (a, b) { return b.salary - a.salary; });
    };
    TeacherManager.prototype.filterByAgeRange = function (minAge, maxAge) {
        return this.teachers.filter(function (teacher) { return teacher.age >= minAge && teacher.age <= maxAge; });
    };
    TeacherManager.prototype.display = function () {
        console.log("List of teachers:");
        for (var i = 0; i < this.teachers.length; i++) {
            console.table("".concat(this.teachers[i].name, ", ").concat(this.teachers[i].age, ", ").concat(this.teachers[i].salary));
        }
    };
    return TeacherManager;
}());
function main() {
    var studentManager = new StudentManager();
    var teacherManager = new TeacherManager();
    // @ts-ignore
    var readlineSync = require("readline-sync");
    while (true) {
        console.log("Menu:");
        console.log("1. Quản lý sinh viên");
        console.log("2. Quản lý giáo viên");
        console.log("3. Thoát");
        var choice = readlineSync.questionInt("Mời chọn: ");
        if (choice === 1) {
            console.log("Quản lý sinh viên:");
            console.log("a. Thêm");
            console.log("b. Sửa");
            console.log("c. Xóa");
            console.log("d. Tìm theo tên");
            console.log("e. Điểm cao nhất");
            console.log("f. Hiển thị");
            console.log("g. Trở lại");
            var subChoice = readlineSync.question("Mời chọn: ");
            switch (subChoice) {
                case "a":
                    var studentName = readlineSync.question("Tên sinh viên: ");
                    var studentAge = readlineSync.questionInt("Tuổi: ");
                    var studentGrade = readlineSync.questionFloat("Điểm: ");
                    var student = new Student(studentName, studentAge, studentGrade);
                    studentManager.add(student);
                    console.log("Th\u00EAm sinh vi\u00EAn ".concat(student.name, " th\u00E0nh c\u00F4ng"));
                    break;
                case "b":
                    var oldStudentName = readlineSync.question("Tên sinh viên cũ: ");
                    var index = studentManager.find(oldStudentName);
                    if (index !== -1) {
                        var studentName_1 = readlineSync.question("Tên mới: ");
                        var studentAge_1 = readlineSync.questionInt("Tuổi mới: ");
                        var studentGrade_1 = readlineSync.questionFloat("Điểm mới: ");
                        var newStudent = new Student(studentName_1, studentAge_1, studentGrade_1);
                        studentManager.edit(oldStudentName, newStudent);
                        console.log("S\u1EEDa sinh vi\u00EAn ".concat(oldStudentName, " th\u00E0nh c\u00F4ng"));
                    }
                    else {
                        console.log("Kh\u00F4ng t\u00ECm th\u1EA5y sinh vi\u00EAn c\u00F3 t\u00EAn ".concat(oldStudentName));
                    }
                    break;
                case "c":
                    var studentToDelete = readlineSync.question("Tên sinh viên cần xóa: ");
                    studentManager.delete(studentToDelete);
                    console.log("X\u00F3a sinh vi\u00EAn ".concat(studentToDelete, " th\u00E0nh c\u00F4ng"));
                    break;
                case "d":
                    var studentToFind = readlineSync.question("Nhập tên sinh viên cần tìm: ");
                    var foundIndex = studentManager.find(studentToFind);
                    if (foundIndex === -1) {
                        console.log("Kh\u00F4ng t\u00ECm th\u1EA5y sinh vi\u00EAn c\u00F3 t\u00EAn ch\u1EE9a t\u1EEB \"".concat(studentToFind, "\""));
                    }
                    else {
                        console.log("Tìm thấy sinh viên:");
                        console.log("".concat(studentManager.students[foundIndex].name, ", ").concat(studentManager.students[foundIndex].age, ", ").concat(studentManager.students[foundIndex].grade));
                    }
                    break;
                case "e":
                    var highestGradeStudent = studentManager.getHighestGrade();
                    if (highestGradeStudent === undefined) {
                        console.log("Không có sinh viên nào");
                    }
                    else {
                        console.log("Sinh vi\u00EAn c\u00F3 \u0111i\u1EC3m cao nh\u1EA5t l\u00E0 ".concat(highestGradeStudent.name, " v\u1EDBi \u0111i\u1EC3m ").concat(highestGradeStudent.grade));
                    }
                    break;
                case "f":
                    studentManager.display();
                    break;
                case "g":
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ");
            }
        }
        else if (choice === 2) {
            console.log("Quản lý giáo viên:");
            console.log("a. Thêm");
            console.log("b. Sửa");
            console.log("c. Xóa");
            console.log("d. Danh sách mức lương giảm dần");
            console.log("e. Danh sách giáo viên từ 30-40 tuổi");
            console.log("f. Hiển thị");
            console.log("g. Trở lại");
            var subChoice = readlineSync.question("Mời chọn: ");
            switch (subChoice) {
                case "a":
                    var teacherName = readlineSync.question("Tên giáo viên: ");
                    var teacherAge = readlineSync.questionInt("Tuổi: ");
                    var teacherSalary = readlineSync.questionFloat("Lương: ");
                    var teacher = new Teacher(teacherName, teacherAge, teacherSalary);
                    teacherManager.add(teacher);
                    console.log("Th\u00EAm gi\u00E1o vi\u00EAn ".concat(teacher.name, " th\u00E0nh c\u00F4ng"));
                    break;
                case "b":
                    var oldTeacherName = readlineSync.question("Tên giáo viên cũ: ");
                    var index = teacherManager.find(oldTeacherName);
                    if (index !== -1) {
                        var teacherName_1 = readlineSync.question("Tên mới: ");
                        var teacherAge_1 = readlineSync.questionInt("Tuổi mới: ");
                        var teacherSalary_1 = readlineSync.questionFloat("Lương mới: ");
                        var newTeacher = new Teacher(teacherName_1, teacherAge_1, teacherSalary_1);
                        teacherManager.edit(oldTeacherName, newTeacher);
                        console.log("S\u1EEDa gi\u00E1o vi\u00EAn ".concat(oldTeacherName, " th\u00E0nh c\u00F4ng"));
                    }
                    else {
                        console.log("Kh\u00F4ng t\u00ECm th\u1EA5y gi\u00E1o vi\u00EAn c\u00F3 t\u00EAn ".concat(oldTeacherName));
                    }
                    break;
                case "c":
                    var teacherToDelete = readlineSync.question("Tên giáo viên cần xóa: ");
                    teacherManager.delete(teacherToDelete);
                    console.log("X\u00F3a gi\u00E1o vi\u00EAn ".concat(teacherToDelete, " th\u00E0nh c\u00F4ng"));
                    break;
                case "d":
                    teacherManager.sortBySalaryDescending();
                    teacherManager.display();
                    break;
                case "e":
                    var minAge = 30;
                    var maxAge = 40;
                    var teachersInRange = teacherManager.filterByAgeRange(minAge, maxAge);
                    console.log("Danh s\u00E1ch gi\u00E1o vi\u00EAn t\u1EEB ".concat(minAge, " \u0111\u1EBFn ").concat(maxAge, " tu\u1ED5i:"));
                    for (var i = 0; i < teachersInRange.length; i++) {
                        console.log("".concat(teachersInRange[i].name, ", ").concat(teachersInRange[i].age, ", ").concat(teachersInRange[i].salary));
                    }
                    break;
                case "f":
                    teacherManager.display();
                    break;
                case "g":
                    break;
                default:
                    console.log("Lựa chọn không hợp lệ");
            }
        }
        else if (choice === 3) {
            console.log("Đã thoát chương trình.");
            break;
        }
        else {
            console.log("Lựa chọn không hợp lệ");
        }
    }
}
main();
