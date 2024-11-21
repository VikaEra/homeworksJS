"use strict"; 

  function solveEquation(a, b, c) {
  let arr = [];
  let d = (b**2-4*a*c);
  if (d>0){
   let root1 = (-b + Math.sqrt(d) )/(2*a);
   let root2 =  (-b - Math.sqrt(d) )/(2*a);
   arr.push(root1,root2);
   return arr;
  }

if (d === 0){
  let root0 = -b/(2*a);
  arr.push(root0);
  }
  return arr;
}

console.log(solveEquation(1, 5, 4), '{-1, -4}');
console.log(solveEquation(1, 2, 1), '{-1}');
console.log(solveEquation(1, 2, 10), '{}');


function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let per = parseInt(percent) / 100 / 12;
  let con = parseInt(contribution);
  let am = parseInt(amount);
  if (isNaN(per) || per < 0) {
    return `false`;
  } else {
      let s = am - con;
      let n = countMonths;
      let pay = s * (per + per / (((1 + per) ** n) - 1));
      let totalAmount = (pay * n).toFixed(2);
      console.log(totalAmount);
      return +totalAmount;
   }
}

console.log(calculateTotalMortgage(10, 0, 50000, 12), '{52749.53}');
console.log(calculateTotalMortgage(10, 1000, 50000, 12), '{51694.54}');
console.log(calculateTotalMortgage(10, 20000, 20000, 48), '{0}');
console.log(calculateTotalMortgage(10, 0, 10000, 36), '{11616.19}');
console.log(calculateTotalMortgage(15, 0, 10000, 36), '{12479.52}');