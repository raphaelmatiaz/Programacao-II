import ArtPiece from "./artPieceClass.js";

export default class Composition extends ArtPiece {

    songPlaying;
    songStatus;
    songInfo;
    audio;
    constructor(data) {
        super(data)

        
        this.audio = data.audio;

        // song Info
        let songStatus = document.querySelector("#current-song-status")
        let currentSongPlaying = document.querySelector("#current-song-name")
        
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
            song.src = this.audio;
            songStatus.innerText = "Now Playing:"
            currentSongPlaying.innerText = this.title;
            
            

            if (currentSong === this.name) {
                if (isPlaying) {
                    song.pause();
                    isPlaying = false;
                    songStatus.innerText = "";
                    currentSongPlaying.innerText = "";

                } else {
                    song.play();
                    isPlaying = true;
                }
            } else {
                // Se o 'this.name' da div na qual clicamos não corresponde ao current song (ou seja clicamos noutra musica) Parar a musica atual antes de tocar outra.
                song.pause();
                song.currentTime = 0; // Dar reset na playback position do audio que estava a tocar
                song.src = this.audio;
                song.play();
                isPlaying = true;
                currentSong = this.name;
            }



        });
        };
    }

    
