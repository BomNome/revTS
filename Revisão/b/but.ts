const input1 = document.getElementById("num1") as HTMLInputElement;
const input2 = document.getElementById("num2") as HTMLInputElement;
const button = document.getElementById("button");

function sum(a: number, b:number){
    return a + b;
}

button.addEventListener("click", function(){
    console.log(sum(Number(input1.value), Number(input2.value)));
    let verif = 1;
});

if(verif==1){
    document.body.innerHTML += `${sum(Number(input1.value), Number(input2.value))}`;
    let verif = 0;
}

