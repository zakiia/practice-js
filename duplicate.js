function removeDuplicate(num){
    const unique = [];
    for(const element of num){
        if (unique.indexOf(element) == -1){
            unique.push(element);
        }
    }
    return unique;
}
const myNum = [5,7,9,13,3,5,13,7,17,9];
const uniqueNames = removeDuplicate(myNum);
console.log(uniqueNames);