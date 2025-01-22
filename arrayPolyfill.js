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

Array.prototype.myFilter = function(callback){
    let result = [];
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            result.push(this[i]);
        }
    }
    return result;
}

Array.prototype.myEvery = function(callback){
    for(let i = 0; i < this.length; i++){
        if(!callback(this[i], i, this)){
            return false;
        }
    }
    return true;
}

const everyValue = [1, 2, 3].myEvery((el, i) => el < 4);
console.log(everyValue)

const filterValue = [1, 2, 3].myFilter((el, i) => el % 2 === 0);
console.log(filterValue)


const reducedValue1 = [1, 2, 3].myReducer((acc, curr)=>{
    return acc + curr
}, 0)
console.log(reducedValue1);

const myMapValue = [1,2,3].myMap((x, i) => x * i)
console.log(myMapValue)