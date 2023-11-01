function findLargest(x, y, z){
    let large ='';
    if ((x > y) && (x > z)){
        large = 'x is largest';
    }
    else if ((y > x) && (y > z)){
        large = 'y is largest';
    }

    else{
        large = 'z is largest';
    }
    return large;
}

const whoLarge = findLargest(800, 700, 900);
console.log(whoLarge);