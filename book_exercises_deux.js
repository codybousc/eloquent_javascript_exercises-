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

//a)
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

//b) reversing array in place
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

//3 A list (Linked Lists)

// a)
var array = [1, 2, 3];

function arrayToList(array) {
  var list = null;

  for(var i = array.length - 1; i >= 0; i--) {
    console.log(list);
    list = {value: array[i], rest: list};
    console.log(list);
  }
  return list;
}

// 1st iteration: list = {value: 3, rest: null}
// 2nd iteration list = { value: 2, rest: {value: 3, rest: null}}
// 3rd iteration list ={ value: 1, rest: { value: 2, rest: {value: 3, rest: null}}}

// b)
var testList = {
  value: 1,
  rest: {
    value: 2,
    rest: {
      value: 3,
      rest: null
    }
  }
};


function listToArray(list) {
  var array = [];
  for(var node = list; node; node = node.rest ) {
    array.push(node.value);
  }
  return array;
}

listToArray(testList);
