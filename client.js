const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
function EmployeeBonus( name, bonusPercentage, totalCompensation, totalBonus ){
  this.name = name;
  this.bonusPercentage = bonusPercentage;
  this.totalCompensation = totalCompensation;
  this.totalBonus = totalBonus;
}

function bonusCalculator( employee ){
  let bonusPercent = 0;
  if ( employee.reviewRating === 3 ){ // logic based on employee rating
    bonusPercent = .04;
  }
  else if ( employee.reviewRating === 4 ){
    bonusPercent = .06;
  }
  else if ( employee.reviewRating === 5 ){
    bonusPercent = .1;
  }else{
    bonusPercent = 0;
  }

  if ((employee.employeeNumber).toString().length === 4 ){ // logic based on employee number digit length
    bonusPercent += .05;
  //(`employee number length ${(employee.employeeNumber).toString().length}`)
  }

  if (employee.annualSalary > 65000){ // logic based on annual salary over 65,000
    bonusPercent -= .01;
  }

  if (bonusPercent > .13){  // logic above 13% or below 0%
    bonusPercent = .13;
  }
  else if ( bonusPercent < 0 ){
    bonusPercent = 0;
  }
let totalBonus = bonusPercent * employee.annualSalary;

let totalCompensation = totalBonus + employee.annualSalary;

let result = new EmployeeBonus( employee.name, bonusPercent, totalCompensation, totalBonus );
return result
} //end bonusCalculator


//logs employee values


for( let i = 0; i < employees.length ; i++ ){
console.log( bonusCalculator( employees[i] ) );
}
console.log( `final bonus percent ${bonusCalculator(employees[0])}` );
//console.log(`testing emplloyee nubmer length ${(employees[0].employeeNumber).toString().length}`)
