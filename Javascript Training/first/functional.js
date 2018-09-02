let nrmFm= function(x){
    return x*x;
}

let inFn = x => x*x;


console.log(nrmFm(50))
console.log(inFn(5))


// clojoure
function fun2() {
    return function () {
        return `Pure Eco Soft`
    }
}

let fnOut = fun2()

console.log(`Well function is ${fnOut()}`)


// Module Design Pattern
let Car = (function () { // IIFE
    return {
        spd: 15,
        eng: 4
    }
})()

let Mercedez = (cr => {
    console.log(`Speed of car is ${cr.spd}`)
    return () => console.log(`Mercedez Called`)
})(Car)()


//Promise 
let prm = new Promise((res, rej) => {
    setTimeout(() => res('codekul'), 1500)
    // connections for web sockets
}).then(resDt => {
    console.log('In then block ' + resDt)
    // data sent or receiving 
});


