
function getGrade(grade){
    let myGrade = '';
    if((grade >= 80) && (grade <= 100)){
        myGrade = 'A+'
    }
    else if((grade >= 70) && (grade < 80)){
        myGrade = 'A+'
    }
    else if((grade >= 60) && (grade < 70)){
        myGrade = 'A+'
    }
    else if((grade >=50 ) && (grade < 60)){
        myGrade = 'A+'
    }
    else{
        myGrade = 'Fail';
    }
    return myGrade
}
const thisGrade = getGrade(49);
console.log(thisGrade);