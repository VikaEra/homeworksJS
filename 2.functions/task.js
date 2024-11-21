function getArrayParams(...arr) { 
    let min = Infinity;
    let max = -Infinity;
    let sum = 0;
    let avg = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
      if (arr[i] > max) {
        max = arr[i];
      }
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    avg = parseFloat((sum / arr.length).toFixed(2));
    return { min: min, max: max, avg: avg };
  }

  console.log(getArrayParams(-99, 99, 10), '{ min: -99, max: 99, avg: 3.33 }');
  console.log(getArrayParams(1, 2, 3, -100, 10), '{ min: -100, max: 10, avg: -16.80 }');
  console.log(getArrayParams(5), '{ min: 5, max: 5, avg: 5.00 }');
  
  function summElementsWorker(...arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }
  
  console.log(summElementsWorker(0), '(0)');
  console.log(summElementsWorker(10, 10, 11, 20, 10), '(61)');
  console.log(summElementsWorker(0, 0, 0, -1, -100), '(-101)');


  function differenceMaxMinWorker(...arr) {
    let  min = Infinity;
    let  max = -Infinity;
    let i;
  
    if(arr.length === 0) return 0;
  
    for(i = 0; i < arr.length; i++) {
      if(min > arr[i]) min = arr[i];
      if(max < arr[i]) max = arr[i];
    }
  
    return max - min;
  }
  
  console.log(differenceMaxMinWorker(), '(0)');
  console.log(differenceMaxMinWorker(10, 10, 11, 20, 10), '(10)');
  console.log(differenceMaxMinWorker(0, 0, 0, -1, -100), '(100)');

  function differenceEvenOddWorker(...arr) {
    let sumEvenElement = 0;
    let sumOddElement = 0;
    let i;
  
    if(arr.length === 0) return 0;
  
    for(i = 0; i < arr.length; i++) {
      if((arr[i] % 2) === 0) sumEvenElement += arr[i]; else sumOddElement += arr[i];
    }
  
    return sumEvenElement - sumOddElement;
  }

  console.log(differenceEvenOddWorker(), '(0)');
  console.log(differenceEvenOddWorker(1, 2, 3, 4, 5, 6, 7, 8, 9), '(-5)');
  console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17), '(53)');
  console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35), '(-269)');


  function averageEvenElementsWorker(...arr) {
    let sumEvenElement = 0;
    let countEvenElement = 0;
    let i;
  
    if(arr.length === 0) return 0;
  
    for(i = 0; i < arr.length; i++) {
      if((arr[i] % 2) === 0) {
        sumEvenElement += arr[i]; 
        countEvenElement++;
      }
    }
  
    return sumEvenElement / countEvenElement;
  }
  
  console.log(averageEvenElementsWorker(), '(0)');
  console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9), '(5)');
  console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35), '(38)');


  function makeWork (arrOfArr, func) {
    let maxWorkerResult = -Infinity;
    let i;
    let res;
    let numbers;
  
    if(arrOfArr.length === 0) return 0;
  
    for(i = 0; i < arrOfArr.length; i++) {
      numbers = arrOfArr[i];
      res = func(...numbers);
      if(res > maxWorkerResult) maxWorkerResult = res;
    }
  
    return maxWorkerResult;
  }

  const arr = [[10, 10, 11, 20, 10], [67, 10, 2, 39, 88], [72, 75, 51, 87, 43], [30, 41, 55, 96, 62]];

  console.log(makeWork(arr, summElementsWorker), '(328)');
  console.log(makeWork(arr, differenceMaxMinWorker), '(86)');
  console.log(makeWork(arr, differenceEvenOddWorker), '(92)');
  console.log(makeWork(arr, averageEvenElementsWorker), '(72)');
  