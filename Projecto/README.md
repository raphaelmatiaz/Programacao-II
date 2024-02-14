Breve descrição do projecto:

O objectivo deste projecto era aplicar os conteudos lecionados no módulo 'Programação II', atrarvés da criação de uma galeria de arte digital. No âmbito deste projecto decidi realizar uma galeria dedicada a desenehos e composições musicais minhas.


Para este efeito, o projecto contém os seguites ficheiros


Os incontornáveis:

index.html
normalize.css
style.css


JavaScript:

app.js ---> a aplicação principal

Gallery.js ----> a galeria que vai conter instancias de 'drawing' e 'composition'

artPiece.js ----> A classe 'Pai' que serve de construtor por defeito para classes derivadas

composition.js ----> Uma classe que extende de 'artPiece', com caracteristicas específicas a instancias de uma música(propriedades, métodos, especificos a audio, nomeadamente o audioPlayer) 

drawing.js ----> Uma classe que extende de 'artPiece', com caracteristicas específicas a instancias de uma música(propriedades, métodos, especificos a audio, nomeadamente o audioPlayer) 

Info.js ----> classe relativa a informação dos objectos da galeria

art.json ---> a base de dados que contém informações relativas a cada desenho e música, incluindo paths para img e audios




