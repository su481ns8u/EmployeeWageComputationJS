console.log("Welcome to Employee Wage Computation");

let EMP_RATE_PER_HR = 20;
let FULL_DAY_HR = 8;
let PART_DAY_HR = 4;
let IS_FULL_TIME = 1;
let IS_PART_TIME = 2;
let TOTAL_DAYS_IN_MONTH = 20;

let totalEmpHrs = 0;
let totalWage = 0;
let workDays = 0;

// for (let day = 0; day < TOTAL_DAYS_IN_MONTH; day++) {
while (totalEmpHrs <= 100 && workDays <= TOTAL_DAYS_IN_MONTH) {
  let empAttendanceCheck = Math.floor(Math.random() * 10) % 3;
  switch (empAttendanceCheck) {
    case IS_FULL_TIME:
      console.log("Employee is present for full time");
      totalEmpHrs += FULL_DAY_HR;
      break;
    case IS_PART_TIME:
      console.log("Employee is present for part time");
      totalEmpHrs += PART_DAY_HR;
      break;
    default:
      console.log("Employee is absent");
  }
  workDays++;
}

totalWage = totalEmpHrs * EMP_RATE_PER_HR;
console.log("Employee total wage for month is " + totalWage);
