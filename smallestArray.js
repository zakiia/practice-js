function smallestElement(numbers){
    let smallest = numbers[0];
    for(let i = 0; i < numbers.length; i++){
        const element = numbers[i];
        if( element < smallest){
            smallest = element;
        }
    }
    return smallest;
}
const ages =[12, 54, 2, 34, 75, 32, 12];
const findsmallest = smallestElement(ages);
console.log(findsmallest);