
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Student extends Person {
    grade: number;

    constructor(name: string, age: number, grade: number) {
        super(name, age);
        this.grade = grade;
    }
}

class Teacher extends Person {
    salary: number;

    constructor(name: string, age: number, salary: number) {
        super(name, age);
        this.salary = salary;
    }
}

class StudentManager {
    students: Student[];

    constructor() {
        this.students = [];
    }

    add(student: Student): void {
        this.students.push(student);
    }

    edit(name: string, newStudent: Student): void {
        const index = this.find(name);
        if (index !== -1) {
            this.students[index] = newStudent;
        }
    }

    delete(name: string): void {
        const index = this.find(name);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    }

    find(name: string): number {
        for (let i = 0; i < this.students.length; i++) {
            // @ts-ignore
            if (this.students[i].name.toLowerCase().includes(name.toLowerCase())) {
                return i;
            }
        }
        return -1;
    }

    getHighestGrade(): Student | undefined {
        if (this.students.length === 0) {
            return undefined;
        }
        let highestGradeStudent = this.students[0];
        for (let i = 1; i < this.students.length; i++) {
            if (this.students[i].grade > highestGradeStudent.grade) {
                highestGradeStudent = this.students[i];
            }
        }
        return highestGradeStudent;

    }

    display(): void {
        console.log("List of students:");
        for (let i = 0; i < this.students.length; i++) {
            console.log(`${this.students[i].name}, ${this.students[i].age}, ${this.students[i].grade}`);
        }
    }
}

class TeacherManager {
    teachers: Teacher[];

    constructor() {
        this.teachers = [];
    }

    add(teacher: Teacher): void {
        this.teachers.push(teacher);
    }

    edit(name: string, newTeacher: Teacher): void {
        const index = this.find(name);
        if (index !== -1) {
            this.teachers[index] = newTeacher;
        }
    }

    delete(name: string): void {
        const index = this.find(name);
        if (index !== -1) {
            this.teachers.splice(index, 1);
        }
    }

    find(name: string): number {
        for (let i = 0; i < this.teachers.length; i++) {
            // @ts-ignore
            if (this.teachers[i].name.toLowerCase().includes(name.toLowerCase())) {
                return i;
            }
        }
        return -1;
    }

    sortBySalaryDescending(): void {
        this.teachers.sort((a, b) => b.salary - a.salary);
    }

    filterByAgeRange(minAge: number, maxAge: number): Teacher[] {
        return this.teachers.filter((teacher) => teacher.age >= minAge && teacher.age <= maxAge);
    }

    display(): void {
        console.log("List of teachers:");
        for (let i = 0; i < this.teachers.length; i++) {
            console.table(`${this.teachers[i].name}, ${this.teachers[i].age}, ${this.teachers[i].salary}`);
        }
    }
}

function main(): void {
    const studentManager = new StudentManager();
    const teacherManager = new TeacherManager();

    // @ts-ignore
    const readlineSync = require("readline-sync");

    while (true) {
        console.log("Menu:");
        console.log("1. Quản lý sinh viên");
        console.log("2. Quản lý giáo viên");
        console.log("3. Thoát");
        const choice = readlineSync.questionInt("Mời chọn: ");

        if (choice === 1) {
            console.log("Quản lý sinh viên:");
            console.log("a. Thêm");
            console.log("b. Sửa");
            console.log("c. Xóa");
            console.log("d. Tìm theo tên");
            console.log("e. Điểm cao nhất");
            console.log("f. Hiển thị");
            console.log("g. Trở lại");
            const subChoice = readlineSync.question("Mời chọn: ");
            switch (subChoice) {
                case "a":
                    const studentName = readlineSync.question("Tên sinh viên: ");
                    const studentAge = readlineSync.questionInt("Tuổi: ");
                    const studentGrade = readlineSync.questionFloat("Điểm: ");
                    const student = new Student(studentName, studentAge, studentGrade);
                    studentManager.add(student);
                    console.log(`Thêm sinh viên ${student.name} thành công`);
                    break;
                case "b":
                    const oldStudentName = readlineSync.question("Tên sinh viên cũ: ");
                    const index = studentManager.find(oldStudentName);
                    if (index !== -1) {
                        const studentName = readlineSync.question("Tên mới: ");
                        const studentAge = readlineSync.questionInt("Tuổi mới: ");
                        const studentGrade = readlineSync.questionFloat("Điểm mới: ");
                        const newStudent = new Student(studentName, studentAge, studentGrade);
                        studentManager.edit(oldStudentName, newStudent);
                        console.log(`Sửa sinh viên ${oldStudentName} thành công`);
                    } else {
                        console.log(`Không tìm thấy sinh viên có tên ${oldStudentName}`);
                    }
                    break;
                case "c":
                    const studentToDelete = readlineSync.question("Tên sinh viên cần xóa: ");
                    studentManager.delete(studentToDelete);
                    console.log(`Xóa sinh viên ${studentToDelete} thành công`);
                    break;
                case "d":
                    const studentToFind = readlineSync.question("Nhập tên sinh viên cần tìm: ");
                    const foundIndex = studentManager.find(studentToFind);
                    if (foundIndex === -1) {
                        console.log(`Không tìm thấy sinh viên có tên chứa từ "${studentToFind}"`);
                    } else {
                        console.log("Tìm thấy sinh viên:");
                        console.log(`${studentManager.students[foundIndex].name}, ${studentManager.students[foundIndex].age}, ${studentManager.students[foundIndex].grade}`);
                    }
                    break;
                case "e":
                    const highestGradeStudent = studentManager.getHighestGrade();
                    if (highestGradeStudent === undefined) {
                        console.log("Không có sinh viên nào");
                    } else {
                        console.log(`Sinh viên có điểm cao nhất là ${highestGradeStudent.name} với điểm ${highestGradeStudent.grade}`);
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
        } else if (choice === 2) {
            console.log("Quản lý giáo viên:");
            console.log("a. Thêm");
            console.log("b. Sửa");
            console.log("c. Xóa");
            console.log("d. Danh sách mức lương giảm dần");
            console.log("e. Danh sách giáo viên từ 30-40 tuổi");
            console.log("f. Hiển thị");
            console.log("g. Trở lại");
            const subChoice = readlineSync.question("Mời chọn: ");
            switch (subChoice) {
                case "a":
                    const teacherName = readlineSync.question("Tên giáo viên: ");
                    const teacherAge = readlineSync.questionInt("Tuổi: ");
                    const teacherSalary = readlineSync.questionFloat("Lương: ");
                    const teacher = new Teacher(teacherName, teacherAge, teacherSalary);
                    teacherManager.add(teacher);
                    console.log(`Thêm giáo viên ${teacher.name} thành công`);
                    break;
                case "b":
                    const oldTeacherName = readlineSync.question("Tên giáo viên cũ: ");
                    const index = teacherManager.find(oldTeacherName);
                    if (index !== -1) {
                        const teacherName = readlineSync.question("Tên mới: ");
                        const teacherAge = readlineSync.questionInt("Tuổi mới: ");
                        const teacherSalary = readlineSync.questionFloat("Lương mới: ");
                        const newTeacher = new Teacher(teacherName, teacherAge, teacherSalary);
                        teacherManager.edit(oldTeacherName, newTeacher);
                        console.log(`Sửa giáo viên ${oldTeacherName} thành công`);
                    } else {
                        console.log(`Không tìm thấy giáo viên có tên ${oldTeacherName}`);
                    }
                    break;
                case "c":
                    const teacherToDelete = readlineSync.question("Tên giáo viên cần xóa: ");
                    teacherManager.delete(teacherToDelete);
                    console.log(`Xóa giáo viên ${teacherToDelete} thành công`);
                    break;
                case "d":
                    teacherManager.sortBySalaryDescending();
                    teacherManager.display();
                    break;
                case "e":
                    const minAge = 30;
                    const maxAge = 40;
                    const teachersInRange = teacherManager.filterByAgeRange(minAge, maxAge);
                    console.log(`Danh sách giáo viên từ ${minAge} đến ${maxAge} tuổi:`);
                    for (let i = 0; i < teachersInRange.length; i++) {
                        console.log(`${teachersInRange[i].name}, ${teachersInRange[i].age}, ${teachersInRange[i].salary}`);
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
        } else if (choice === 3) {
            console.log("Đã thoát chương trình.");
            break;
        } else {
            console.log("Lựa chọn không hợp lệ");
        }
    }
}

main();