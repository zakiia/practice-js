function getInterest( p, r, t){
    SI = ((p * r* t) / 100);
    return SI;
}
const myInterest = getInterest(1000, 7, 2);
console.log(myInterest);