import ArtPiece from "./artPieceClass.js";

export default class Composition extends ArtPiece {

    audio;
    constructor(data) {
        super(data)

        this.audio = data.audio;
        
        // seleciona o título da secção gallery (Artworks ou Composistions)
        const title = document.getElementById("artworks-title");

        //adiciona um mouseenter event listner
        this.view.addEventListener("mouseenter", () => {

            // remover o ID atual
            title.removeAttribute("artworks-title");

            // atribuir um novo ID e um novo texto
            title.setAttribute("id", "compositions-title");
            title.textContent = "Compositions";
            })


        // audioPlayer
        let song = document.querySelector('audio');   
        let currentSong;
        let isPlaying = false;

        this.view.addEventListener('click', () => {
            currentSong = this.name;
            song.src = this.audio;

            if (currentSong === this.name) {
                if (isPlaying) {
                    song.pause();
                    isPlaying = false;
                } else {
                    song.play();
                    isPlaying = true;
                }
            } else {
                // Stop the current song and play the new one
                song.pause();
                song.currentTime = 0; // Reset the playback position
                song.src = this.audio;
                song.play();
                isPlaying = true;
                currentSong = this.name;
            }
        });
        };
    }

    
