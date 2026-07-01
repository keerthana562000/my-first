// =====================================
// Task 1 : Employee Management System
// =====================================

let employees = [
    {
        name: "KEERTHANA",
        id: 121,
        salary: 40000
    },
    {
        name: "AJAY",
        id: 122,
        salary: 50000
    }
];

for(let emp of employees){
    console.log(`Name : ${emp.name}`);
    console.log(`ID : ${emp.id}`);
    console.log(`Salary : ${emp.salary}`);

    if(emp.salary >= 50000){
        console.log("Employee Eligible For Bonus");
    }
    else{
        console.log("Employee Not Eligible For Bonus");
    }

    console.log("------------------------");
}


// =====================================
// Task 2 : Student Result Portal
// =====================================

let tamil = 95;
let english = 92;
let maths = 95;
let science = 86;
let social = 89;

let total = tamil + english + maths + science + social;
let percentage = total / 5;

console.log("Total Marks :", total);
console.log("Percentage :", percentage);

if(percentage >= 90){
    console.log("Grade : A+");
}
else if(percentage >= 80){
    console.log("Grade : A");
}
else if(percentage >= 70){
    console.log("Grade : B");
}
else if(percentage >= 60){
    console.log("Grade : C");
}
else{
    console.log("Grade : Fail");
}


// =====================================
// Task 3 : E-Commerce Cart
// =====================================

let products = [
    {name:"Laptop", price:45000},
    {name:"Mouse", price:1000},
    {name:"Keyboard", price:1000}
];

function calculateBill(items){

    let totalBill = 0;

    for(let item of items){
        totalBill += item.price;
    }

    let discount = totalBill > 5000 ? totalBill * 0.10 : 0;

    let finalAmount = totalBill - discount;

    console.log("Total Bill :", totalBill);
    console.log("Discount :", discount);
    console.log("Final Amount :", finalAmount);
}

calculateBill(products);


// =====================================
// Task 4 : Login Authentication
// =====================================

let username = "admin";
let password = "12345";

let loginStatus =
    username === "admin" && password === "12345"
    ? "Login Success"
    : "Invalid Credentials";

console.log(loginStatus);


// =====================================
// Task 5 : Traffic Signal System
// =====================================

let signal = "Red";

switch(signal){

    case "Red":
        console.log("Stop");
        break;

    case "Yellow":
        console.log("Ready");
        break;

    case "Green":
        console.log("Go");
        break;

    default:
        console.log("Invalid Signal");
}


// =====================================
// Task 6 : ATM Withdrawal System
// =====================================

let balance = Number(prompt("Enter Account Balance"));
let withdrawAmount = Number(prompt("Enter Withdrawal Amount"));

if(withdrawAmount <= balance){
    balance -= withdrawAmount;
    alert(`Withdrawal Successful
Remaining Balance : ₹${balance}`);
}
else{
    alert("Insufficient Balance");
}


// =====================================
// Task 7 : Online Food Order
// =====================================

function prepareFood(callback){
    console.log("Food Preparing...");
    callback();
}

function deliverFood(){
    console.log("Food Delivered");
}

console.log("Order Received");
prepareFood(deliverFood);


// =====================================
// Task 8 : Cashback Generator
// =====================================

function* cashbackGenerator(){

    yield "10% Cashback";
    yield "20% Cashback";
    yield "50% Cashback";
    yield "Better Luck Next Time";
}

let offers = cashbackGenerator();

console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);


// =====================================
// Task 9 : Hospital Patient Check
// =====================================

let age = 23;
let weight = 58;

if(age > 18){

    if(weight > 50){
        console.log("Eligible For Treatment");
    }
    else{
        console.log("Not Eligible");
    }

}
else{
    console.log("Not Eligible");
}


// =====================================
// Task 10 : Mini Employee Portal
// =====================================

let employeeList = [
    {
        id:121,
        name:"KEERTHANA",
        salary:40000
    },
    {
        id:122,
        name:"AJAY",
        salary:50000
    }
];

// View Employees
console.log("Employee List");
for(let emp of employeeList){
    console.log(emp);
}

// Calculate Bonus
for(let emp of employeeList){
    let bonus = emp.salary * 0.10;
    console.log(`${emp.name} Bonus : ₹${bonus}`);
}

// Search Employee By ID
let searchId = 121;

let foundEmployee = employeeList.find(
    emp => emp.id === searchId
);

console.log("Employee Found :", foundEmployee);

// Delete Employee
employeeList = employeeList.filter(
    emp => emp.id !== 102
);

console.log("After Delete");
console.log(employeeList);

// Total Employee Count
console.log(
    "Total Employees :",
    employeeList.length
);
