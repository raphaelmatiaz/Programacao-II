------------------------------------------------------------------------------------------------------------------------------------------
PROJECTO FINAL PROGRAMAÇÃO II - GALERIA DE ARTE
------------------------------------------------------------------------------------------------------------------------------------------
Breve descrição do projecto:

O objectivo deste projecto era aplicar os conteudos lecionados no módulo 'Programação II', atrarvés da criação de uma galeria de arte digital. No âmbito deste projecto decidi realizar uma galeria dedicada a desenehos e composições musicais minhas.


Para este efeito, o projecto contém os seguites ficheiros com os respetivos objectivos:


Os incontornáveis:

    index.html:


    ----> linked ao normalize.css style.css e app.js (como type: module)
    ----> com um aside dedicado a uma apresentação minha e links para redes sociais
    ----> uma secção "right-section" dedicada à aplicação da galeria de arte

normalize.css

    ----> a normalizar o display de browser para browser

style.css

    ----> estilização tanto do aside no element html, como do right side dedicado à app, nomeadamente atravéz de atribuição e remoção de classes e id com o js



JavaScript:

app.js ---> a aplicação principal, que se desenrola da seguinte forma:

    1. começamos com os imports: import Gallery from "./Gallery.js"; import Info from "./Info.js";.

    2. O evento 'window.onload' dá trigger a uma função assinrona (que no fundo é a app toda).

    3. Fazemos um fetch dos dados do ficheiro 'art.json' e guardamo-los na constante 'result' em formato json.

    4. Cria-se uma nova instancia da classe 'Gallery'.

    5 Com um loop 'forEach' itera-se sobre o array de objectos contidos no result do fetch aos dados do documento json, e para cada um deles adicionamo-lo à galeria previamente instanciada chamando o método 'addItem' da classe 'Gallery'.

    6 Cria-se uma nova instancia da classe 'Info' declara uma variavel 'artPiece' e atravez de um switch/case, se o data.type contido na informação do argumento (data) corresponde a um 'drawing' ou a uma 'composition'. Em consequencia, cria uma instancia ou da classe 'Drawing' ou da classe 'Composition' (que extendem as duas da classe 'ArtPiece')

    7 Funcao 'removeItem', não a uso no desenrolar da aplicação, mas adicionei pois estava nos requerimentos do projecto.



Gallery.js ----> a galeria que vai conter instancias de 'drawing' e 'composition'

    1. Na sua instanciação, a 'view' de gallery vai buscar uma div com class 'art-gallery' declarada no index.html. Também se declara um array vazio para acolher futuras instancias de obras.

    2. Temos um event listner que observa se damos scroll e permimte navegar para a esqueda e para a direita na nossa galeria.

    3. O metodo 'addItem' 

artPiece.js ----> A classe 'Pai' que serve de construtor por defeito para classes derivadas

    1. No construtor vai receber todas as propriedades dos objectos json retornados do 'fetch' feito na app.js, e fabricar uma instancia da classe com esses dados. Quando se cria uma nova 'drawing' ou 'composition' é para este construtor que se remete a operação.

    2. São criados elementos HTML dinamicamente, dado src à img e feito os appends necessários para fazer o display das instancias de artPiece

    3. São definidas uma série de regras de extilização bazeadas nos eventos 'mousein' e 'mouseout', para trazer algum comportamento visual à galeria.

composition.js ----> Uma classe que extende de 'artPiece', com caracteristicas específicas a instancias de uma música(propriedades, métodos, especificos a audio, nomeadamente o audioPlayer) 

drawing.js ----> Uma classe que extende de 'artPiece', com caracteristicas específicas a instancias de uma música(propriedades, métodos, especificos a audio, nomeadamente o audioPlayer) 

Info.js ----> classe relativa a informação dos objectos da galeria

art.json ---> a base de dados que contém informações relativas a cada desenho e música, incluindo paths para img e audios

------------------------------------------------------------------------------------------------------------------------------------------


