//Switch statement//

function calculator(num1, num2, operator) {
    let result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
            break;
        default:
            result = "Invalid operator";
    }

    return result;
}

const num1 = 10;
const num2 = 5;

console.log("Addition:", calculator(num1, num2, '+'));      
console.log("Subtraction:", calculator(num1, num2, '-'));   
console.log("Multiplication:", calculator(num1, num2, '*')); 
console.log("Division:", calculator(num1, num2, '/'));       
console.log("Invalid:", calculator(num1, num2, '%'));        // Invalid operator
