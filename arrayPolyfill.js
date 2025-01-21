// Question
// Level -> Easy
// ** Very frequently asked question **
// // Reduce is important among all

// Write custom polyfill for map, reduce, filter, every ?

// Solutions

Array.prototype.myMap =function (callback) {
    console.log(this)
    if(typeof callback !== 'function'){
        console.log(`Provided callback is not a function`);
    };
    let result = []; 
    for(let i = 0; i < this.length; i++){
        result.push(callback(this[i], i, this));
    }
    return result;
}

Array.prototype.myReducer = function(callback, initialValue = 0){
    if(typeof callback !== 'function'){
        throw new TypeError(`Defined callback is not a function`);
    }
    for(let i=0; i < this.length; i++){
        initialValue = callback(this[i], initialValue, this);
    }
    return initialValue;
}

const reducedValue1 = [1, 2, 3].myReducer((acc, curr)=>{
    return acc + curr
}, 0)
console.log(reducedValue1);

const myMapValue = [1,2,3].myMap((x, i) => x * i)
console.log(myMapValue)