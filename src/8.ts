import {randomInt} from 'crypto';
const num1 = Math.floor(Math.random() * 10);
const num2 = Math.floor(Math.random() * 10);
let result;
switch (true) {
    case num1 + num2 === 10:
        result = "0";
        break;
    case num1 + num2 === 9:
        result = "1";
        break;
    case num1 + num2 === 8:
        result = "2";
        break;
    case num1 + num2 === 7:
        result = "3";
        break;
    case num1 + num2 === 6:
        result = "4";
        break;
    case num1 + num2 === 5:
        result = "5";
        break;
    case num1 + num2 === 4:
        result = "6";
        break;
    case num1 + num2 === 3:
        result = "7";
        break;
    case num1 + num2 === 2:
        result = "8";
        break;
    case num1 + num2 === 1:
        result = "9";
        break;
}
return `${num1} + ${num2} = ${result}`;