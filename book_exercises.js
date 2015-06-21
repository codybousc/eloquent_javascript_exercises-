
//Chapter 2 Exercises

//Looping a triangle

y = "#"
x = 1;
while (x <= 7) {
console.log(y);
  y = y + "#"
  x++;
}


//FizzBuzz

var fizz = function(number) {
  counter = 1;
  while (counter <= number) {
    if (counter % 15 === 0) {
        console.log("FizzBuzz");
        counter++;
      }
    else if (counter % 3 === 0) {
      console.log("Fizzz");
      counter++;
    }
    else if (counter % 5 === 0) {
      console.log("Buzzz");
      counter++;
    }
    else {
      console.log(counter);
      counter++;
    }
  }
};

fizz(16);

//Chess Board

var chessBoard = function() {
  x = "# # # # ";
  y = " # # # #"
  counter = 1;
  while (counter < 5) {
    console.log(x);
    console.log(y);
    counter++;
  }
}

chessBoard();

//Chapter 3 Exercises

//minNum

var minNum = function(num1, num2) {
  if (num1 > num2) {
    return num2;
  }
  else {
    return num1;
    }
};

console.log(minNum(100, 2));

//Recursive Function

var ifEven = function(number) {
        if (number === 1) {
            return "odd";
        }
        else if (number === 2) {
            return "even";
        }
        else {
            return ifEven(number-2);
    }
};

console.log(ifEven(15));

//Bean Counting

var upperB = function(string) {
  Bcounter = 0;
  counter = 0;
  stringLength = string.length;
  while (counter < stringLength)
    if (string.charAt(counter) === "B") {
      Bcounter++;
      counter++;
    }
    else {
      counter++
    }
    return Bcounter;
}

upperB("OyyyBBBay");

//Chapeter 4

//The sum of a Range

var range = function(startNum, endNum, stepValue) {
  arr = []
  while (startNum <= endNum) {
    arr.push(startNum);
    startNum+= stepValue;
  }
  return arr;
};

console.log(range(1, 10, 2));


var sum = function(array) {
  arrLength = array.length
  total = 0;
  for (i = 0; i < arrLength; i++) {
    var poppedNum = arr.pop();
    total += poppedNum;
  }
  return total;
};

//Reversing an Array
//1) reverseArray

var reverseArray = function(array) {
  newArray = []
  arrLength = array.length
  for (i = 0; i <= arrLength; i++) {
    var poppedNum = arr.shift();
    newArray.unshift(poppedNum);
  }
  return newArray;
};

//2) reverseArrayInPlace
