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

function getEmpWorkHrsForDay(empAttendanceCheck) {
  switch (empAttendanceCheck) {
    case IS_FULL_TIME:
      console.log("Employee is present for full time");
      return FULL_DAY_HR;
    case IS_PART_TIME:
      console.log("Employee is present for part time");
      return PART_DAY_HR;
    default:
      console.log("Employee is absent");
      return 0;
  }
}

while (totalEmpHrs <= 100 && workDays <= TOTAL_DAYS_IN_MONTH) {
  let empAttendanceCheck = Math.floor(Math.random() * 10) % 3;
  totalEmpHrs += getEmpWorkHrsForDay(empAttendanceCheck);
  workDays++;
}

totalWage = totalEmpHrs * EMP_RATE_PER_HR;
console.log("Employee total wage for month is " + totalWage);
