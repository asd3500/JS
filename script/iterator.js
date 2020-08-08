// SYMBOL.ITERATOR

// object
let range = {
    from: 1,
    to: 10
};

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return {done: false, value: this.current++};
            } else {
                return {done: true};
            }
        }
    }
};

for(let num of range) console.log(num);  //1,2,3,4...10


//string
let str = 'abcd';
for(let char of str) console.log(char); //a,b,c,d

let iterator = str[Symbol.iterator]();
while(true) {
    let result = iterator.next();
    if(result.done) break;
    console.log(result.value);
}                                   //a,b,c,d

// Array.from(obj[, mapFn, thisArg])
let pseudoArray = {
    0: 'Hello',
    1: 'World',
    length: 2
};
let arr = Array.from(pseudoArray);
console.log(arr); // ['Hello','World']
arr = Array.from(str); 
console.log(arr); // ["a", "b", "c", "d"]
arr = Array.from(range,  n => n*n);
console.log(arr); // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]

