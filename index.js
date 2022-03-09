//exercicio2

var nomeCompleto = "Frederic Rodrigues";
console.log(nomeCompleto);

//exercicio3

var numeroA = 20;
var numeroB = 13;
var resultado;
console.log(numeroA * numeroB);

//exercicio4

function saudacao(){
    console.log("Cafeeeee, quero Cafeeeee");
    }

    saudacao();

//exercicio5
    
function multiplica(numA, numB){
    var resultado = numA * numB;
    console.log(resultado)
}

multiplica(20, 2);

//exercicio6

function podedirigir(idade){
    if (idade >= 18){
    console.log("pode dirigir");
} else{
    console.log("não pode dirigir")
}
}

podedirigir(18);
podedirigir(19);
podedirigir(17);

//exercicio7

for(var x=0; x <=20; x++){
console.log(x)
}

//exercicio8

for(var y=1; y <=20; y+=2){
console.log(y)
}

//exercicio9

function tabuada(numero){
    for( var x=1; x<=10; x++);
    console.log(numero * x);
}

tabuada(7);

//exericio10.

function convert(minutos){
    console.log(minutos / 60 + "horas")
}
convert(90);