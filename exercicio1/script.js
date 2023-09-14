// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.

const sacolao = []

const objeto1 =
{
    nome : "maçã",
    preco : 2,
    disponibilidade: true
}

const objeto2 = 
{
    nome: "banana",
    preco: 3,
    disponibilidade: false

}

const objeto3 = 
{
    nome: "acabaxi",
    preco: 8,
    disponibilidade: true

}
sacolao.push(objeto1)
sacolao.push(objeto2)
sacolao.push(objeto3)


console.log(sacolao)

