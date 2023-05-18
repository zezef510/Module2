class Employee {
    fullName: string;
    gender: "Nam" | "Nữ" | "Khác";
    birthDate: Date;
    email: string;
    phoneNumber?: string;

    constructor(
        fullName: string,
        gender: "Nam" | "Nữ" | "Khác",
        birthDate: Date,
        email: string,
        phoneNumber?: string
    ) {
        this.fullName = fullName;
        this.gender = gender;
        this.birthDate = birthDate;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }
}
let employees: Employee[] = [];
function displayEmployee(employee: Employee): void {
    console.log(`
    Full name: ${employee.fullName}
    Gender: ${employee.gender}
    Birth date: ${employee.birthDate.toLocaleDateString()}
    Email: ${employee.email}
    Phone number: ${employee.phoneNumber ?? "N/A"}
  `);
}
function addEmployee(employee: Employee): void {
    employees.push(employee);
}
function deleteEmployee(index: number): void {
    employees.splice(index, 1);
}

// Khởi tạo một số đối tượng Employee
const employee1 = new Employee(
    "Nguyễn Văn A",
    "Nam",
    new Date("1990-01-01"),
    "employee1@gmail.com"
);

const employee2 = new Employee(
    "Phạm Thị B",
    "Nữ",
    new Date("1995-05-05"),
    "employee2@gmail.com",
    "0987654321"
);

// Hiển thị thông tin nhân viên
displayEmployee(employee1);
displayEmployee(employee2);

// Thêm một nhân viên mới
const employee3 = new Employee(
    "Trần Văn C",
    "Nam",
    new Date("1998-12-31"),
    "employee3@gmail.com"
);
addEmployee(employee3);

// Xóa một nhân viên trong mảng
deleteEmployee(0);

// Hiển thị lại danh sách mới
console.log("Updated list of employees:");
employees.forEach((employee) => {
    displayEmployee(employee);
});
