// //-------------------------------------- CODE SETUP ----------------------------------

import Gallery from "./Gallery.js";
import ArtPiece from "./artPieceClass.js";

// import Drawing from "./drawing.js";
// import Composition from "./composition.js";




// window.onload = async () => {
    
// let arrayOfDrawings = [];
// let arrayOfCompositions = [];

// const loadData = async (url) => {
//     let request = await fetch(url);
//     let result = await request.json();
//     return result;
// }



// const iterateOverArrayOfObjects = (array) => {
//     array.forEach(obj => {
//         if (obj.type === "drawing") {
//             let newDrawing = new Drawing(obj.type, obj.title, obj.medium, obj.date, obj.image, obj.artist);
//             arrayOfDrawings.push(newDrawing);
//         } else {
//             let newComposition = new Composition(obj.type, obj.title, obj.medium, obj.date, obj.image, obj.artist);
//             arrayOfCompositions.push(newComposition);
//         };
//     });
//     console.log(arrayOfDrawings);
//     console.log(arrayOfCompositions);
// }


// //---------------------------------------------
// // MouseEnters - MouseOuts

// const prevImg = document.querySelector("#previous-img")
// const nextImg = document.querySelector("#next-img")

// prevImg.addEventListener('mouseenter', () => {
//     prevImg.style.boxShadow = "15px 15px 50px rgba(0, 0, 0, 0.7)";
// })

// prevImg.addEventListener('mouseout', () => {
//     prevImg.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
// })

// nextImg.addEventListener('mouseenter', () => {
//     nextImg.style.boxShadow = "15px 15px 50px rgba(0, 0, 0, 0.7)";
// })

// nextImg.addEventListener('mouseout', () => {
//     nextImg.style.boxShadow = "0px 0px 0px rgba(0, 0, 0, 0)";
// })




// //-------------------------------------- CODE EXECUTION ----------------------------------

// const data = await loadData("art.json");
// return iterateOverArrayOfObjects(data)


// }


window.onload = async () => {

    const request = await fetch("art.json");
    const result = await request.json();
    const gallery = new Gallery();


    result.forEach(obj => {
        gallery.addItem(obj)
    });


    
}