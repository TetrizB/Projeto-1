

const cars =  ['Volvo','Nissan','Porshe','Bugatti','Ford','Renault','Fiat','Ferrari','BMW','Saab','Rolls Royce', 'Cooper', 'Bentley','Aston Martin', 'Chevrolet', 'BYD','Audi','Mercedes', 'Mercedes-Bens','Hyundai','Honda', 'Jaguar', 'RAM', 'Subaru' ]

for( let i  = 0; i < cars.lenght; i++){
    console.log(cars[i]);
}
// ksdadjad

const numeros = [];

for (let i = 0; i < 10; i++) {
    const numero = parseInt(prompt(`Digite o número ${i + 1}:`));
    numeros.push(numero);
  }

  function imprimirNumerosOrdemCrescente() {
    const numerosOrdenados = numeros.slice().sort((a, b) => a - b);
    console.log("Números em ordem crescente:");
    for (let i = 0; i < numerosOrdenados.length; i++) {
      console.log(numerosOrdenados[i]);
    }
  }

  imprimirNumerosOrdemCrescente();



//   kakdskadk

  function calcularMedia() {
    const numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
    const numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
    const numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

    const media = (numero1 + numero2 + numero3) / 3;

  return media;
}

const mediaCalculada = calcularMedia();

console.log(`A média dos três números é: ${mediaCalculada}`);

// dkaskdakdkdk

function encontrarMenorNumero() {
    const numeros = [];
    for (let i = 0; i < 5; i++) {
        const numero = parseInt(prompt(`Digite o número ${i + 1}:`));
        numeros.push(numero);
      }
      let menorNumero = numeros[0];
      for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menorNumero) {
          menorNumero = numeros[i];
        }
      }
    
      return menorNumero;
    }
    const menorNumeroEncontrado = encontrarMenorNumero();
    console.log(`O menor número entre os cinco é: ${menorNumeroEncontrado}`);