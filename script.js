// =====================================
// Real-Time Employee Portal Task
// =====================================

// 1. Store employee name using var
var employeeName = "Keerthana";

// 2. Store employee age using let
let employeeAge = 26;

// 3. Store company name using const
const companyName = "Stackly";

// 4. Print all details using console.log()
console.log("Employee Name :", employeeName);
console.log("Employee Age :", employeeAge);
console.log("Company Name :", companyName);

// -------------------------------------

// 5. Show a popup message
alert("Welcome to Employee Portal");

// -------------------------------------

// 6. Ask the employee if today's task is completed
let taskStatus = confirm("Have you completed today's task?");

// Print result in console
console.log(taskStatus);

// -------------------------------------

// 7. Ask employee name using prompt()
let enteredName = prompt("Enter your name");

// Print entered name in console
console.log("Entered Employee Name :", enteredName);

// -------------------------------------

// 8. Display entered employee name on webpage
document.writeln("<h2>Welcome " + enteredName + "</h2>");

// -------------------------------------

// 9. Print success message using console.warn()
console.warn("Task submitted successfully");

// -------------------------------------

// 10. Print error message using console.error()
console.error("Task submission failed");

// -------------------------------------

// Bonus Task:
// Update employee age after promotion
employeeAge = 26;

// Print updated age
console.log("Updated Employee Age :", employeeAge);