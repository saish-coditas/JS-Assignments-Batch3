// Day - 9 Assignment


// Check if type of '70' is equal to 70
console.log('70' === 70); //false

// Check if parseInt('8.8') is equal to 9
console.log(parseInt('8.8')===9); //false

// Boolean value is either true or false.
// Write five JavaScript statement which provide falsy value.
console.log("Falsy Values: '', false, 0, NaN, undefined, null");
// Write five JavaScript statement which provide truthy value.
console.log("Truthy Values: 'saish', 123, true, '0', 'false'");



/*
Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
5 > 4
4 >= 3
4 < 3
4 <= 3
5 == 5
9 === 9
9 == '9'
8 === '8'
4 != 4
4 !== 4
4 != '4'
4 != '4'
4 !== '4'
*/
console.log(5 > 4); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(5 == 5); //true
console.log(9 === 9); //true
console.log(9 == '9'); //true
console.log(8 === '8'); //false
console.log(4 != 4); //false
console.log(4 !== 4); //false
console.log(4 != '4'); //false
console.log(4 !== '4'); //true

//Find the length of python and jargon and make a falsy comparison statement.
const subjectName = "python";
const comparisonStr = "jargon";
console.log(subjectName.length != comparisonStr.length);

/*
Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
4 > 3 && 10 < 12
4 > 3 && 10 > 12
4 > 3 || 10 < 12
4 > 3 || 10 > 12
!(4 > 3)
!(4 < 3)
!(false)
!(4 > 3 && 10 < 12)
!(4 > 3 && 10 > 12)
!(4 === '4')
*/
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true

// There is no 'on' in both dragon and python
console.log(!("dragon".includes("on") && "python".includes("on")));