let mainArray = [5,6,15,42,36,92];
let stringArray = ["Donatello","Michelangelo","Leonardo","Raphael"];

console.log(mainArray[0],stringArray[0]);

console.log(mainArray,stringArray);

mainArray[0] = 69;
stringArray[0] = "Shredder";

mainArray[99] = 96; // assigning value at 99 because counting starts at 0

console.log(mainArray.length);

// the value is 100

stringArray.pop();
stringArray.push("Splinter");

//the value of the 1000th member in both arrays is "undefined" as they are empty 

// this exercise is done on task 6 "Write an if statement that prints "It's a cool number" if
//a number is even or larger than 100"



