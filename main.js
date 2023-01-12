let F;
let C;

let p = document.querySelector('p');

//let fahrenheitLabel = document.querySelector("#fahrenheit");
//let celsiusLabel = document.querySelector("#celsius");



function convertFahrenheit(){
    let valor = document.querySelector("#faInput").value;
    let t = valor.slice(0, valor.length-2 )
    let fahrenheitLabel = document.querySelector("#fahrenheit");

    if(t === ''){
        p.innerHTML = " "
    }else{
        F = (t * 1.8) + 32
        exibirValor(F,fahrenheitLabel)
    }
}

function convertCelsius(){
    let valor = document.querySelector("#ceInput").value;
    let celsiusLabel = document.querySelector("#celsius");

    if(valor === ''){
        p.innerHTML = " "
    }else{
        C = (valor -  32) / 1.8
        exibirValor(C,celsiusLabel)
    }
}

function exibirValor(valor,label){
    limparCampo(label)
    label.append(`${valor}°C`);
}

function limparCampo(campo){
    campo.innerHTML = " "
}
//exibirValor(convertFahrenheit(40), fahrenheitLabel)

function mudarValor(event){
   let camp =  event.target.value 
    let v1 = camp.replace(/^(\d[0-9]*).*/,`$1${"°F"}`);
    faInput.value = v1
    console.log(v1)
}

let faInput = document.querySelector('#faInput');
faInput.addEventListener('change',mudarValor)