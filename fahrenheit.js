var num1 = 4;
var num2 = 2;

var sum = (num1 % num2);
console.log(sum);

function getFahrenheiht(celsius){
    fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
const thisFahrenheit = getFahrenheiht(7);
console.log(thisFahrenheit);