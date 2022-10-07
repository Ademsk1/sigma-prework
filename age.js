const chosenDate = ['1982','10','03']
const milliSecond = Date.now();
const chosenDateParsed = Date.parse(`${chosenDate[0]}-${chosenDate[1]}-${chosenDate[2]}-00:00:00 GMT`) 
console.log(chosenDateParsed);
let timeDif = (Date.now() - chosenDateParsed)/(1000*3600*24*365.25);
console.log(timeDif)
