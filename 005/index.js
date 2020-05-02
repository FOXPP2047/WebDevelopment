// Dice Roll
let n = Math.random();
n *= 6;
n = Math.floor(n) + 1;
console.log(n);

//Love calculator
let name1 = prompt("What is your name?");
let name2 = prompt("What is their name?");

let loveScore = Math.random() * 100;
loveScore = Math.foor(loveScore) + 1; //1 - 100

if(loveScore > 70) {
    console.log("perfect!");
} else {
    console.log("not perfect");
}

//Find Guest Name
let guestList = ["Yongmin", "Jack", "Pam", "James", "Lara"];


let guestName = prompt("What is the guest name?");

for(let i = 0; i < guestList.length; ++i) {
    if(guestName == guestList[i]) {
        console.log("Yes, you are right");
    }
}

//include function in array
let guestList = ["Yongmin", "Jack", "Pam", "James", "Lara"];


let guestName = prompt("What is the guest name?");

if(guestList.includes(guestName)) {
    alert("Welcome");
} else {
    alert("No, you are not our guset");
}


//push & pop function in array
let output = [];

console.log(output.length);

output.push(1);

console.log(output.length);

output.push("Yongmin");

console.log(output.length);

console.log(output[0]);
console.log(output[1]);

output.pop();

console.log(output[1]);


//FizzBuzz

let output = [];
let count = 1;

function fizzBuzz() {
    if((count % 3) === 0 && (count % 5) === 0) {
        output.push("FizzBuzz");
    } else if(count % 3 === 0) {
        output.push("Fizz");
    } else if(count % 5 === 0) {
        output.push("Buzz");
    } else {
        output.push(count);
    }
    count++;
    console.log(output);
}

//FizzBuzz with loops

let output = [];
let count = 1;

function fizzBuzz() {

	while(count <= 100) {
	    if((count % 3) === 0 && (count % 5) === 0) {
	        output.push("FizzBuzz");
	    } else if(count % 3 === 0) {
	        output.push("Fizz");
	    } else if(count % 5 === 0) {
	        output.push("Buzz");
	    } else {
	        output.push(count);
	    }
	    count++;
	}

    console.log(output);
}

//Fibonacci 
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    let output = [];
    
    for(let i = 0; i < n; i++) {
        if(i === 0) {
            output.push(0);
        } else if(i === 1) {
            output.push(1);
        } else {
            let sum = output[i - 2] + output[i - 1];
            output.push(sum);
        }
    }

    //Return an array of fibonacci numbers starting from 0.
    return output;
//Do NOT change any of the code below 👇
}

//leet code romanInteger
let output = [];
    for(let i = 0; i < s.length; ++i) {
        output.push(s[i]);
    }
    const roman = ["I", "V", "X", "L", "C", "D", "M"];
    const real = [1, 5, 10, 50, 100, 500, 1000];
    let romanMap = new Map();
    
    for(let i = 0; i < roman.length; ++i) {
        romanMap.set(roman[i], real[i]);    
    }
    
    let num = 0;
    for(let i = 0; i < output.length; ++i) {
        if((i+1) != output.length) {
            var nextNum = romanMap.get(output[i+1]);
        } else nextNum = 0;
            
        let currentNum = romanMap.get(output[i]);
        
        if(currentNum < nextNum) {
            num += (nextNum - currentNum);
            ++i;
        } else {
            num += currentNum;
        }
    }