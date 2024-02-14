// Imports de Classes
import Gallery from "./Gallery.js";
import Info from "./Info.js";


// window Onload e fetch dos dados do ficheiro json
window.onload = async () => {

    const request = await fetch("art.json");
    const result = await request.json();

    // criar uma nova Gallery com Callback
    const gallery = new Gallery((itemData) => {
        Info.update(itemData);
    });
    
    // para cada objecto no resultado do json, adicionar o objecto à Gallery. (ESPECIFICAÇÃO: Implementar loops for ou foreach para iterar sobre o array de obras de arte.)
    result.forEach(obj => {
        gallery.addItem(obj)
    });

    const info = new Info(() => {
    });
}