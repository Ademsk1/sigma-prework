function maxmin(array1) {
    let myMax = array1[0]
    let myMin = array1[0]
    array1.forEach(function findMaxAndMin(el,index,all) {
        if (myMax < el) {
            myMax = el;
        }
        if (myMin > el) {
            myMin = el;
        }
    })
    return [myMin,myMax];
}
array1 = Array.from({length:10}, () => Math.floor(Math.random() *100));
console.log(array1);
console.log(maxmin(array1));
