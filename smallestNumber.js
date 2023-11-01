function findSmallest( x, y, z){
    const min = Math.min(x, y, z);
    return min;
}
const whoSmallest = findSmallest(7, 5,9);
console.log(whoSmallest);