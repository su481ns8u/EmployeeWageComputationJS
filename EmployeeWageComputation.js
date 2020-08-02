console.log("Welcome to Employee Wage Computation");

let EMP_RATE_PER_HR = 20;
let FULL_DAY_HR = 8;

let empWorkHrs = 0;
let empWage = 0;
let isPresent = 1;
let empAttendanceCheck = Math.floor(Math.random() * 10) % 2;

if (empAttendanceCheck == isPresent) {
  console.log("Employee is present");
  empWage = FULL_DAY_HR * EMP_RATE_PER_HR;
} else console.log("Employee is absent");

console.log("Employee wage is " + empWage);
