let fn= function(){
    return `Ubuntu`;
}

fn();
console.log(`Output of fn is ${fn()}`);

//Arrow =>
let fn1 = () => { `Ubuntu`};
console.log(`Output of fn1 is ${fn1()}`);

//swapping of two numbers
let fn2 = (num1,num2) =>{
    let swp=num1;
    num1=num2;
    num2=swp;
    return `Swipped numbers are ${num1} and ${num2}`;
}

console.log(`Output of fn2 is ${fn2(45,60)}`);