console.log("Welcome to Employee Wage Computation");

let EMP_RATE_PER_HR = 20;
let FULL_DAY_HR = 8;
let PART_DAY_HR = 4;
let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;

let empWage = 0;
let empAttendanceCheck = Math.floor(Math.random() * 10) % 3;

switch (empAttendanceCheck) {
  case IS_FULL_TIME:
    console.log("Employee is present for full time");
    empWage = FULL_DAY_HR * EMP_RATE_PER_HR;
    break;
  case IS_PART_TIME:
    console.log("Employee is present for part time");
    empWage = PART_DAY_HR * EMP_RATE_PER_HR;
    break;
  default:
    console.log("Employee is absent");
}

console.log("Employee wage is " + empWage);
