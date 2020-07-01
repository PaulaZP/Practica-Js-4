let salir = false;
let arreglo_num = [];

while (!salir) {
    let numero = prompt('Ingrese un número');

    if (!isNaN(parseInt(numero))) {
        arreglo_num.push(numero);
    } else {
        if (numero == "") {
            salir = true;

            console.log(arreglo_num);
            
            //sacar promedio
            let suma = arreglo_num.reduce((previous, current) => current += previous);
            let prom = suma / arreglo_num.length;
            console.log('El promedio es:',prom);

            //A comodar en orden 
            arreglo_num.sort((a, b) => a - b);

            //sacar el número menor
            let num_menor = Math.min.apply(null,arreglo_num);
            console.log('El numero menor es:',num_menor);

            //sacar el número mayor
            let num_mayor = Math.max.apply(null,arreglo_num);
            console.log('El numero mayor es:',num_mayor);

            //sacar la mediana
            let mediana_1 = Math.floor((arreglo_num.length - 1) / 2);
            let mediana_2 = Math.ceil((arreglo_num.length - 1) / 2);
            let mediana = (arreglo_num[mediana_1] + arreglo_num[mediana_2]) / 2;
            console.log('La mediana es:',mediana);
        }
    }
}
