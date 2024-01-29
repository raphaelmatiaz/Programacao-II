window.onload = () => {
    /**
     * -- Declaração e Manipulação de Variáveis --
     * Declara duas variáveis, (a , b) e atribui-lhes um valor.
     * Troca os valores de a e b sem usar uma variável temporária.
     * Faz console.log dessas 2 variáveis.
     */

    console.log(`
    
    ---------------------------------------------------------------
                              EXERCÍCIO 1

    `);

    let a = 5
    let b = 10

    a = 10
    b = 5

    console.log(a, b)


    /**
     * -- Instruções Condicionais --
     * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
     * O resultado dessa função verifica se o número é par ou ímpar.
     * Faz console.log desse resultado.
     */

    console.log(`
    
    ---------------------------------------------------------------
                              EXERCÍCIO 2

    `);

    let oddOrEven = (numero) => {

        if (numero % 2 != 0) {
            console.log(numero + " is an odd number")
        } else {
            console.log(numero + " is an even number")
        };
    };

    oddOrEven(17);


    /**
     * -- Arrays --
     * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
     * Itera sobre esse array e faz console.log apenas dos números pares.
     */

    console.log(`
    
    ---------------------------------------------------------------
                              EXERCÍCIO 3

    `)

    let arrayOfNumbers = [2, 123, 34, 65, 48];


    let arrayFilter = (array) => {

        array.forEach(element => {
            if (element % 2 === 0) {
                console.log(element);
            }
        });

    }

    arrayFilter(arrayOfNumbers)

    /**
     * -- Funções --
     * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
     * Faz console.log desse resultado.
     */

    console.log(`
    
    ---------------------------------------------------------------
                              EXERCÍCIO 4

    `)

    let x = 5;
    let y = 20;
    
    let AddTwoNumbers = (num1, num2) => {
        return num1 + num2;
    };
    
    console.log(AddTwoNumbers(x, y));  // Call the function with the values of x and y
    
    
    

    /**
     * -- Objetos --
     * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
     * Faz console.log dessas propriedades.
     */

    console.log(`
    
    ---------------------------------------------------------------
                              EXERCÍCIO 5

    `)

    let Person = {
        name: "Maria",
        age: 50,
        gender: "female"
    }

    console.log(Person)

    /**
     * -- Loops --
     * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
     * Faz console.log a cada iteração.
     */

    console.log(`
    
    ---------------------------------------------------------------
                              EXERCÍCIO 6

    `)
    
   // chosenNumber = prompt("Chose a number: ")
    
    let fibonacci = 0
    while (fibonacci < chosenNumber) {
        
        let n1 = 1
        let n2 = 0
        let n3 = 0

        console.log(fibonacci);
        fibonacci = n1 + n2;
        

    }

    /**
     * -- Manipulação do DOM --
     * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
     * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
     */

    console.log(`
    
    ---------------------------------------------------------------
                              EXERCÍCIO 7

    `)

    let button1 = document.createElement("button");
    button1.innerText = "Button I";

    let button2 = document.createElement("button")
    button2.innerText = "Button II";

    let p1 = document.createElement("p")


    let p2 = document.createElement("p")
    
    document.body.appendChild(button1)
    document.body.appendChild(button2)
    document.body.appendChild(p1)
    document.body.appendChild(p2)

    button1.addEventListener('click', () => {
        p1.innerText = "button 1 clicked!"
    })

    button2.addEventListener('click', () => {
        p2.innerText = "button 2 clicked!"
    })

    /**
     * -- Async/Await e Fetch --
     * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
     * e transforme o resultado desse fetch em formato json.
     * Faz console.log desse json.
     */

    console.log(`
    
    ---------------------------------------------------------------
                              EXERCÍCIO 8

    `)

    let loadData = async (url) => {

        let request = await fetch(url);
        let result = await request.json();
       
        console.log(result)
    }

    loadData("data.json")
    loadData("sample.json")



}