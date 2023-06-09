let a = prompt('Digite um número');
let b = prompt('Digite mais um número');

function soma(a: number, b: number){
    return a + b;
}

console.log(soma(Number(a), Number(b)));

document.body.innerHTML += `<div id='soma'>${soma(Number(a), Number(b))}</div>`