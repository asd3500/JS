

// ---------------------------==============Number
// Number .toString(base) 2 8 16 36
let num = 100;
let str = num.toString(16);

// Number .toFixed(n)  
num = num / 3.;         //33.3333333
num = num.toFixed(2);   //33.33    

// Number isFinite() isNaN()
let bool = isFinite(num);          // true
bool = isNaN(str);             // true

// Number parseInt(str, base) parseFloat() 
str = '100px';
num = parseInt(str);    // 100
str = 'a123';
num = parseInt(str);    // NaN
str = '0xff';
num = parseInt(str, 16);    // 255
// Number==============---------------------------


// ---------------------------------------------------------==============String
// String .length
str = 'строка';
num = str.length;

// String [i] read only
let char = str[1];          // т
char = str[20];             // undefined
// String .charAt(pos)
char = str.charAt(4);       // к
char = str.charAt(20);      // ''

// String for(let char of String)
for(let char of str) {
    console.log(char);
}

// String .toUpperCase() .toLowerCase()
str = str.toUpperCase();

// String .indexOf(substr, start) |-->| .lastIndexOf |<--|
str = 'Widget with id';
num = str.indexOf('Widget');        // 0
num = str.indexOf('widget');        // -1
num = str.indexOf('get');           // 3

// String .includes() .startWith() .endsWith()
bool = str.includes('Widget');      // true
bool = str.startsWith('Wid');       // true
bool = str.endsWith('di');          // false

// String .slice(start [, end]) от start(включая) до end(не включая)
let str2 = str.slice(0,6);          // 'Widget'
str2 = str.slice(7);                // 'with id'
str2 = str.slice(6,0);              // ''
// String .substring(start,end) между start(включая) и end(не включая)
str2 = str.substring(0,6);          // 'Widget'
str2 = str.substring(6,0);          // 'Widget'
// String .substr(start [, length])
str2 = str.substr(7,4);             // 'with'

// String .codePointAt(pos)
num = str.codePointAt(2);           // 100 ('d')

// String String.fromCodePoint(code)
str = 'abc';
str = str + String.fromCodePoint(100); // 'abcd'

// String .localeCompare(str)
str2 = 'efgh';
num = str.localeCompare(str2);          // -1 (str2 > str)
num = str2.localeCompare(str);          // 1 (str < str2)
num = str.localeCompare(str);           // 0

// String .trim()
str = '    abc   ';
str = str.trim();               // 'abc'

// String .repeat(n)
str = str.repeat(3);            // 'abcabcabc'
// String==============---------------------------------------------------------



// Array==============---------------------------------------------------------
// Array .push(items)           |arr| <--
// Array .pop()                 |arr| -->
// Array .shift()           <-- |arr|
// Array .unshift(items)    --> |arr|

// Array .splice(index [, deleteCount, elem1, ..., elemN])
let arr = [1,2,3,4,5,6];
arr.splice(2,2,'ad1','ad2');    // [1,2,'ad1','ad2',5,6]
let res = arr.splice(3,2);      // ['ad2',5]

// Array .slice([start], [end])
arr = [1,2,3,4,5,6];
res = arr.slice(2,4);           // [3, 4]

// Array .concat(arg1, arg2, ...)
arr = arr.concat(res);          // [1, 2, 3, 4, 5, 6, 3, 4]
console.log(arr);

// Array .forEach(f(item, index, array))
arr.forEach((item, index, array) => {
    console.log(`index: ${index} item: ${item}`);
});

// Array .indexOf(item [,from]) |->| .lastIndexOf(item [,from]) |<-| .includes(item [,from])
num = arr.indexOf(3,3);         // 6
num = arr.lastIndexOf(3);       // 6
bool = arr.includes(10);        // false

// Array .find(f(item, index, array) [, thisArg]) (return item) 
// Array .findIndex(f(item, index, array) [, thisArg]) (return index)
arr = [
    {id: 1, name: 'one'},
    {id: 2, name: 'two'},
    {id: 3, name: 'three'}
]
res = arr.find((item) => item.id === 2);        // {id: 2, name: 'two'}
num = arr.findIndex((item) => item.id === 3);   // 2

// Array .filter(f(item, index, array) [, thisArg])
res = arr.filter((item) => item.id < 3);        // [{id: 1, name: 'one'},{id: 2, name: 'two'}]

// Array .map(f(item, index, array) [, thisArg])
res = arr.map((item) => {                       //  [ {id: 1, name: 'one', newKey: '1'},
    item.newKey = (item.id).toString();         //    {id: 2, name: 'two', newKey: '2'},
    return item;                                //    {id: 3, name: 'three', newKey: '3'}]
});

// Array .sort([f(a,b)])
arr = ['one', 'two', 'three'];
arr.sort();                         // ['one', 'three', 'two'];
arr = [1,5,8,6,9,10,3,7,4,2];
arr.sort();                         // [1, 10, 2, 3, 4, 5, 6, 7, 8, 9]
arr.sort((a,b) =>
    a > b ? 1 : (a === b ? 0 : -1));// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Array .reverse()
arr.reverse();                      // [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]               

// Array .join(glue)
str = arr.join(';');                // '10;9;8;7;6;5;4;3;2;1'

// Array .split(delim);
arr = str.split(';');               // ["10", "9", "8", "7", "6", "5", "4", "3", "2", "1"]

// Array .reduce(f(previousValue, item, index, array), [initial])       |->|
// Array .reduceRight(f(previousValue, item, index, array), [initial])  |<-|
arr = [1,5,8,6,9,10,3,7,4,2];
num = arr.reduce(function(sum, item) {      // 55
    return sum+=item;
}, 0);

// Array Array.isArray();
bool = Array.isArray(arr);  // true
bool = Array.isArray(num);  // false

// console.log(bool);
// console.log(num);
// console.log(str);
// console.log(arr);           
// console.log(res);

