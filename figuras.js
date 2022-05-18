// Código el cuadrdo

console.group("Cuadrados");


//const ladoCuadrado = 5;
//console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

//const perimetrocuadrado = ladoCuadrado * 4;
//console.log("El perimetro del cuadrdo es: " + perimetrocuadrado + "cm");

function perimetrocuadrado (lado){
    return lado * 4;
};


// const areacuadro = ladoCuadrado * ladoCuadrado;
// console.log("El área del cuadro es: " + areacuadro + " cm^2");

function areacuadro (lado){
    return lado * lado;
};

console.groupEnd();

//Códifo del triangulo

console.group("Triangulo");

// const ladotriangulo1 = 5;
// const ladotriangulo2 = 5;
// const basetriangulo = 15;

function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
};

// console.log(
//     "los lados del triángulo miden: " 
//     + ladotriangulo1 
//     + "cm," 
//     + ladotriangulo2 
//     + "cm," 
//     + basetriangulo 
//     + "cm"
//     );

function areatriangulo (basetriangulo,alturaTriangulo){
    return (basetriangulo*alturaTriangulo)/2;
}

// const alturaTriangulo =5.5;
// console.log("La altura del tiangulo miden: " + alturaTriangulo + "cm");

// const perimetroTriangulo =5.5;
// console.log("La perimetro del tiangulo es: " + ladotriangulo1 + "cm" + ladotriangulo2 + "cm" + basetriangulo + "cm");

// const areatriangulo = (basetriangulo * alturaTriangulo) / 2;
// console.log("El área del triangulo es: " + areatriangulo + " cm^2");

console.groupEnd();    


//Código del Circulo
console.group ("Circulos");

// const radiocirculo = 4;
// console.log("El radio del circulo es de: " + radiocirculo + "cm");

function diametrocirculo (radio){
    return radio*2;
}


// const diametrocirculo = radiocirculo*2;
// console.log("El diametro del circulo es de: " + diametrocirculo + "cm");

// //const Pi = 3.1415;
const Pi = Math.PI;
// console.log("resultado de Pi es : " + Pi );

function perimetrocirculo(radio){
    const diametro =diametrocirculo(radio);
    return diametro * Pi;
}

// const perimetrocirculo = (diametrocirculo*Pi);
// console.log("El perimetro del circulo es de: " + perimetrocirculo + "cm");

function areacirculo (radio){
    return (radio * radio) * Pi;
}

// const areacirculo = (radiocirculo*radiocirculo)*Pi;
// console.log("area del circulo es de:" + areacirculo + "cm^2");

console.groupEnd();


function CalcularperimetroCuadro(){
    const input = document.getElementById("Inputcuadrado");
    const value = input.value;

    const perimetro = perimetrocuadrado(value);
    alert(perimetro);
}

function CalcularAreaCuadro(){
    const input = document.getElementById("Inputcuadrado");
    const value = input.value;

    const area = areacuadro(value);
    alert(area);
}
