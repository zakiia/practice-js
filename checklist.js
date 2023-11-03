// 1. variable check
    let num = 5;
    let str = 'zakia';
    let value = true;

//2. variable check (changable variable)
    let myStr = 'Zakia is a student';
    myStr = 'Zakia started a job';
    // not changable
    const myStr2 = 'Zakia is a girl';
//3. Simple math operation
    let x = 7;
    let y = 21;
    const add = x + y;
    const subtract = y - x;
    const multiplication = x * y;
    const division = y / x;
    const modulas = y % x;
    const sum = [add, subtract, multiplication,
    division, modulas];
    console.log(sum);
//4. comparison
    let a = 7;
    let b = 5;
    if(a > b){
        console.log('true');
    }
    else{
        console.log('false');
    }

    if (a < b) {
        console.log('true');
    }
    else{
        console.log('false');
    }

    if (a == b) {
        console.log('true');
    }
    else{
        console.log('false');
    }

    if (a != b) {
        console.log('true');
    }
    else{
        console.log('false');
    }

    if(a >= b){
        console.log('true');
    }
    else{
        console.log('false');
    }

    if (a <= b) {
        console.log('true');
    }
    else{
        console.log('false');
    }
//.5 condition
let myNum = 20;
    if ((myNum % 5 == 0) && (myNum % 4 == 0)) {
        console.log('condition1 execute');
    }
    else{
        console.log('condition1 not execute');
    }
    if ((myNum % 3 == 0) || (myNum % 2 == 0)) {
        console.log('condition2 execute');
    }
    else{
        console.log('condition2 not execute');
    }
//.6 while loop
    var i = 7;
    while(i <= 19){
        console.log(i);
        i++;
    }
    var item = 7;
    while(item <= 19){
    console.log(item);
    item+=2;
}

//.7 array declaration
    let arr = [3, 5, 7, 9, 13];
    arr[3] = 17;
    arr.push(12);
    arr.pop();
    console.log(arr.includes(9));


//.8 for loop
    let myArr = [3, 5, 7, 9, 13, 17];
    for(let i = 0; i < myArr.length; i++){
        let element = myArr[i];
        console.log(element);
    }

//.10 array condition
    let myArr2 = [ 57, 79, 83, 89, 77, 97, 99, 47];
    for(i = 0; i < myArr2.length; i++){
        var number = myArr2[i];
        if (number > 80) {
            console.log(number);
        }
    }

// function
function multiplication2 (e, f, g){
    let sum = e * f * g;
    return sum
}
const mySum = multiplication2(7, 8, 9);
console.log(mySum);

const cart = [
    { name : 'laptop', price : 43000, quantity : 1},
    { name : 'phone', price : 55000, quantity : 1},
    { name : 'watch', price : 4500, quantity : 2},
    { name : 'airbuds', price : 2100, quantity : 3},
];
cart[0].price = 67000;
console.log(cart);