import ArtPiece from "./artPieceClass.js";

export default class Drawing extends ArtPiece {

    constructor(data) {
        super(data)

        

        const title = document.querySelector("h4");
        this.view.addEventListener("mouseenter", () => {
            title.textContent = "Artworks";
            title.removeAttribute("compositions-title")
            title.setAttribute("id", "artworks-title");

        })
    }
}