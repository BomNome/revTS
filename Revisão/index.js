var a = prompt('Digite um número');
var b = prompt('Digite mais um número');
function soma(a, b) {
    return a + b;
}
console.log(soma(Number(a), Number(b)));
document.body.innerHTML += "<div id='soma'>".concat(soma(Number(a), Number(b)), "</div>");
