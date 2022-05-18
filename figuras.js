// Código el cuadrdo

console.group("Cuadrados");


const ladoCuadrado = 5;
console.log("los lados del cuadrado miden: " + ladoCuadrado + "cm");

const perimetrocuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrdo es: " + perimetrocuadrado + "cm");

const areacuadro = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadro es: " + areacuadro + " cm^2");

console.groupEnd();

//Códifo del triangulo

console.group("Triangulo");

const ladotriangulo1 = 5;
const ladotriangulo2 = 5;
const basetriangulo = 15;

console.log(
    "los lados del triángulo miden: " 
    + ladotriangulo1 
    + "cm," 
    + ladotriangulo2 
    + "cm," 
    + basetriangulo 
    + "cm"
    );

const alturaTriangulo =5.5;
console.log("La altura del tiangulo miden: " + alturaTriangulo + "cm");

const perimetroTriangulo =5.5;
console.log("La perimetro del tiangulo es: " + ladotriangulo1 + "cm" + ladotriangulo2 + "cm" + basetriangulo + "cm");

const areatriangulo = (basetriangulo * alturaTriangulo) / 2;
console.log("El área del triangulo es: " + areatriangulo + " cm^2");

console.groupEnd();    


//Código del Circulo
console.group ("Circulos");

const radiocirculo = 4;
console.log("El radio del circulo es de: " + radiocirculo + "cm");

const diametrocirculo = radiocirculo*2;
console.log("El diametro del circulo es de: " + diametrocirculo + "cm");

//const Pi = 3.1415;
const Pi = Math.PI;
console.log("resultado de Pi es : " + Pi );

const perimetrocirculo = (diametrocirculo*Pi);
console.log("El perimetro del circulo es de: " + perimetrocirculo + "cm");

const areacirculo = (radiocirculo*radiocirculo)*Pi;
console.log("area del circulo es de:" + areacirculo + "cm^2");

console.groupEnd();
 