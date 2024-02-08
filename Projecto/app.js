//-------------------------------------- CODE SETUP ----------------------------------

import Drawing from "./drawing.js";
import Composition from "./composition.js";




window.onload = async () => {
    
let arrayOfDrawings = [];
let arrayOfCompositions = [];

const loadData = async (url) => {
    let request = await fetch(url);
    let result = await request.json();
    return result;
}



const iterateOverArrayOfObjects = (array) => {
    array.forEach(obj => {
        if (obj.type === "drawing") {
            let newDrawing = new Drawing(obj.type, obj.title, obj.medium, obj.date, obj.image, obj.artist);
            arrayOfDrawings.push(newDrawing);
        } else {
            let newComposition = new Composition(obj.type, obj.title, obj.medium, obj.date, obj.image, obj.artist);
            arrayOfCompositions.push(newComposition);
        };
    });
    console.log(arrayOfDrawings);
    console.log(arrayOfCompositions);
}


//-------------------------------------- CODE EXECUTION ----------------------------------

const data = await loadData("art.json");
return iterateOverArrayOfObjects(data)


}
