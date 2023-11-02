function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const chairWood = 3;
    const tableWood = 10;
    const bedWood = 50;
    const chairWoodQuantity = chairWood * chairQuantity;
    const tableWoodQuantity = tableWood * tableQuantity;
    const bedWoodQuantity = bedWood * bedQuantity;
    const totalQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalQuantity;
}

const needWood = woodCalculator(7, 2, 1);
console.log(needWood);