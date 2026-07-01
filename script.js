// =====================================
// Task 1 : Employee Registration
// =====================================

let employeeName = "Keerthana";
let employeeId = "1245";
let department = "Development";
let salary = 40000;
const isPermanent = true;

console.log("Employee Details");
console.log("----------------");
console.log(`Name       : ${employeeName}`);
console.log(`ID         : ${employeeId}`);
console.log(`Department : ${department}`);
console.log(`Salary     : ${salary}`);
console.log(`Permanent  : ${isPermanent}`);


// =====================================
// Task 2 : Employee Skills
// =====================================

let skills = ["HTML", "CSS", "JavaScript", "React", "Git", "Node.js"];

console.log("\nEmployee Skills");
console.log(`First Skill : ${skills[0]}`);
console.log(`Third Skill : ${skills[2]}`);
console.log(`Last Skill  : ${skills[skills.length - 1]}`);
console.log(`Total Skills: ${skills.length}`);


// =====================================
// Task 3 : Company Object
// =====================================

let company = {
    companyName: "Stackly IT",
    location: "Coimbatore",
    employees: 250,
    technologies: ["HTML", "CSS", "JavaScript", ]
};

console.log("\nCompany Details");
console.log(`Company Name      : ${company.companyName}`);
console.log(`Location          : ${company.location}`);
console.log(`Second Technology : ${company.technologies[1]}`);
console.log(`Total Technologies: ${company.technologies.length}`);


// =====================================
// Task 4 : Salary Calculator
// =====================================

let basicSalary = 20000;
let bonus = 5000;

let totalSalary = basicSalary + bonus;
let tax = totalSalary * 0.10;
let finalSalary = totalSalary - tax;

console.log("\nSalary Details");
console.log(`Basic Salary : ${basicSalary}`);
console.log(`Bonus        : ${bonus}`);
console.log(`Total Salary : ${totalSalary}`);
console.log(`Tax (10%)    : ${tax}`);
console.log(`Final Salary : ${finalSalary}`);


// =====================================
// Task 5 : Attendance Checker
// =====================================

let attendance = 95;

let examStatus =
    attendance >= 75 ? "Eligible for Exam" : "Not Eligible";

console.log("\nAttendance Status");
console.log(`Attendance : ${attendance}%`);
console.log(`Status     : ${examStatus}`);


// =====================================
// Task 6 : Login Verification
// =====================================

let username = "admin";
let password = "12345";

let loginStatus =
    username === "admin" && password === "12345"
        ? "Login Successful"
        : "Invalid Credentials";

console.log("\nLogin Status");
console.log(loginStatus);


// =====================================
// Task 7 : Product Billing
// =====================================

let productName = "Laptop";
let productPrice = 45000;
let quantity = 2;

let totalBill = productPrice * quantity;

console.log("\nProduct Billing");
console.log(`Product  : ${productName}`);
console.log(`Price    : ${productPrice}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total    : ${totalBill}`);


// =====================================
// Task 8 : Increment & Decrement
// =====================================

let visitors = 100;

console.log("\nIncrement & Decrement");

console.log(`Initial Value : ${visitors}`);

console.log(`Pre Increment  : ${++visitors}`);
// Increases first, then prints -> 101

console.log(`Post Increment : ${visitors++}`);
// Prints first, then increases -> 101
// visitors becomes 102

console.log(`Current Value  : ${visitors}`);

console.log(`Pre Decrement  : ${--visitors}`);
// Decreases first, then prints -> 101

console.log(`Post Decrement : ${visitors--}`);
// Prints first, then decreases -> 101
// visitors becomes 100

console.log(`Final Value    : ${visitors}`);


// =====================================
// Task 9 : Comparison Checker
// =====================================

console.log("\nComparison Results");

console.log(10 == "10");      // true
console.log(20 != "20");      // false
console.log(20 !== "20");     // true
console.log(5 < 10);          // true
console.log(15 >= 20);        // fal


// =====================================
// Task 10 : User Interaction
// =====================================

let empName = prompt("Enter Employee Name:");
let empAge = prompt("Enter Employee Age:");

let joinCompany = confirm(
    "Do you want to join our company?"
);

if (joinCompany) {
    alert(`Welcome ${empName}`);
} else {
    alert("Thank You");
}


// =====================================
// Final Challenge : Mini Employee Portal
// =====================================

let employee = {
    name: "Keerthana",
    id: "1245",
    department: "Development",
    experience: 2,
    salary: 40000,
    attendance: 95
};

let employeeSkills = [
    "HTML",
    "CSS",
    "JavaScript",
    
];

let companyInfo = {
    companyName: "Stackly IT",
    location: "Coimbatore"
};

let empBonus = 5000;
let finalEmpSalary = employee.salary + empBonus;

let examEligibility =
    employee.attendance >= 75
        ? "Eligible"
        : "Not Eligible";

let login =
    username === "admin" && password === "12345"
        ? "Success"
        : "Failed";

console.log("\n==============================");
console.log("      EMPLOYEE PORTAL");
console.log("==============================");

console.log(`Employee Name : ${employee.name}`);
console.log(`Employee ID   : ${employee.id}`);
console.log(`Department    : ${employee.department}`);
console.log(`Experience    : ${employee.experience} Years`);
console.log(`Salary        : ₹${employee.salary}`);
console.log(`Bonus         : ₹${empBonus}`);
console.log(`Final Salary  : ₹${finalEmpSalary}`);
console.log(`Skills        : ${employeeSkills.join(", ")}`);
console.log(`Attendance    : ${employee.attendance}%`);
console.log(`Exam Status   : ${examEligibility}`);
console.log(`Login Status  : ${login}`);
console.log(`Company       : ${companyInfo.companyName}`);
console.log(`Location      : ${companyInfo.location}`);

console.log("==============================");

