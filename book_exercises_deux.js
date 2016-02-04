//Chapter 4
//1
//sum of a range
function range(start, end) {
  rangeArr = [];
  for(var i = start; i <= end; i++) {
    rangeArr.push(i);
  }
  return rangeArr;
}

console.log(range(1, 10));

arr = [1,2,3,4,5,6,7,8,9,10]

function sum(array) {
  total = 0;
  for(var i = 0; i < array.length; i++) {
    total += array[i];
  }
  return total;
}

console.log(sum(arr));

//2
//Reversing an Array

a)
function reverseArr(array) {
	var newArr = [];
  for(var i = 0; i < array.length; i++) {
  	newArr.unshift(array[i]);
    console.log(newArr);
  }
  return newArr;
}


arr = [1, 2, 3];
console.log(reverseArray(arr));

b)
var arrondissement = [1, 2, 3, 4, 5, 6, 7, 8];

function reverseArrInPlace(array) {
	for(var i = 0; i < array.length / 2; i++) {
  	var num1 = array[i];
    var num2 = array[array.length - (i + 1)];
    array[i] = num2;
    array[array.length - (i + 1)] = num1;
  }
  return array;
}

reverseArrInPlace(arrondissement);
