var Employee = /** @class */ (function () {
    function Employee(fullName, gender, birthDate, email, phoneNumber) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthDate = birthDate;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
    return Employee;
}());
var employees = [];
function displayEmployee(employee) {
    var _a;
    console.log("\n    Full name: ".concat(employee.fullName, "\n    Gender: ").concat(employee.gender, "\n    Birth date: ").concat(employee.birthDate.toLocaleDateString(), "\n    Email: ").concat(employee.email, "\n    Phone number: ").concat((_a = employee.phoneNumber) !== null && _a !== void 0 ? _a : "N/A", "\n  "));
}
function addEmployee(employee) {
    employees.push(employee);
}
function deleteEmployee(index) {
    employees.splice(index, 1);
}
// Khởi tạo một số đối tượng Employee
var employee1 = new Employee("Nguyễn Văn A", "Nam", new Date("1990-01-01"), "employee1@gmail.com");
var employee2 = new Employee("Phạm Thị B", "Nữ", new Date("1995-05-05"), "employee2@gmail.com", "0987654321");
// Hiển thị thông tin nhân viên
displayEmployee(employee1);
displayEmployee(employee2);
// Thêm một nhân viên mới
var employee3 = new Employee("Trần Văn C", "Nam", new Date("1998-12-31"), "employee3@gmail.com");
addEmployee(employee3);
// Xóa một nhân viên trong mảng
deleteEmployee(0); // Xóa nhân viên đầu tiên trong mảng
// Hiển thị lại danh sách mới
console.log("Updated list of employees:");
employees.forEach(function (employee) {
    displayEmployee(employee);
});
