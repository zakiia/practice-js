function reverseString(text){
    let reverse = '';
    for(const element of text){
        reverse = element + reverse;
    }
    return reverse;
}
const greeting = 'Hello World';
const myReverse = reverseString(greeting);
console.log(myReverse);