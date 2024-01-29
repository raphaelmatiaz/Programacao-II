window.onload = () => {
    /**
     * -- Declaração e Manipulação de Variáveis --
     * Declara duas variáveis, (a , b) e atribui-lhes um valor.
     * Troca os valores de a e b sem usar uma variável temporária.
     * Faz console.log dessas 2 variáveis.
     */

    let a = 1
    let b = 2

    a = 2
    b = 1


    /**
     * -- Instruções Condicionais --
     * Escreve uma função (isEven, por ex.) que recebe um parâmetro numérico.
     * O resultado dessa função verifica se o número é par ou ímpar.
     * Faz console.log desse resultado.
     */

    // const IsEven = (number) => {
    //     number = prompt("Choose a number: ")
    //     if (number % 2 != 0) {
    //         console.log(number + " is odd!")
    //     } else {
    //         console.log(number + " is even!")
    //     }

    // } 

    // IsEven()

    /**
     * -- Arrays --
     * Escreve uma função que recebe um array de 5 números (por ex: [2, 123, 34, 65, 48]).
     * Itera sobre esse array e faz console.log apenas dos números pares.
     */
    
    cenas= [2, 123, 34, 65, 48]

    const funcaoRecebearray = (array) => {
    
    array.forEach(element => {
        console.log(element)
    });

    }     

    funcaoRecebearray(cenas)

    /**
     * -- Funções --
     * Escreve uma função que recebe dois parâmetros, num1, num2, e retorna a soma deles.
     * Faz console.log desse resultado.
     */

    const recebeDoisNumerosEFazCenas = (num1, num2) => {
        return num1 + num2
    }
    
    result = console.log(recebeDoisNumerosEFazCenas(50, 50))

    /**
     * -- Objetos --
     * Cria um objeto que represente uma pessoa com as  propriedades nome, idade e genero.
     * Faz console.log dessas propriedades.
     */

    let objectoPessoa = {
        "nome": "Raquel",
        "idade": 59,
        "genero": "feminino"
    }
   
    console.log(objectoPessoa)

    /**
     * -- Loops --
     * Escreve um for loop que imprime a sequência de Fibonacci até um número específico de items (10, por ex.).
     * Faz console.log a cada iteração.
     */

    

    /**
     * -- Manipulação do DOM --
     * No ficheiro index.html, cria dois elementos do tipo <button> e <p> dentro do  <body>.
     * Cria um evento onclick no botão que quando “clicado”, insere o texto “button clicked” no elemento <p>.
     */

    let button1 = document.createElement("Button")
    button1.innerText = "Button1"

    document.body.appendChild(button1)
    
    let button2 = document.createElement("Button")
    button2.innerText = "Button2"

    document.body.appendChild(button2)

    let p1 = document.createElement("p")
    let p2 = document.createElement("p")

    document.body.appendChild(p1)
    document.body.appendChild(p2)

    button1.addEventListener("click", () => {
        p1.innerText = "Button1 Clicked!"
    })

    button2.addEventListener("click", () => {
        p2.innerText = "Button2 Clicked!"
    })
    
    /**
     * -- Async/Await e Fetch --
     * Cria uma função (loadData, por ex) que faça fetch do ficheiro “data.json”
     * e transforme o resultado desse fetch em formato json.
     * Faz console.log desse json.
     */

    console.log(`
    
        --------------- Exercice last one ...............
    
    `)

    const loadData = async (url) => {
        
        let fetchRequest = await fetch(url);
        let fetchResult = fetchRequest.json()
        
        
    }
    
    // calling the function

    sampleJsonData = console.log(loadData("sample.json"))
    
}