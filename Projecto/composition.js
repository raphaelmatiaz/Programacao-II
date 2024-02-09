import ArtPiece from "./artPieceClass.js";

export default class Composition extends ArtPiece {
    audio;
    constructor(data) {
        super(data)

        this.audio = data.audio;
        
        // let playStatus = null;
        // let audioPlayer;
        // let currentSong;


        const title = document.getElementById("artworks-title");
        this.view.addEventListener("mouseenter", () => {
        // Remove the current ID
        title.removeAttribute("artworks-title");

        // Add a new ID
        title.setAttribute("id", "compositions-title");
        title.textContent = "Compositions";
        })


        // this.view.addEventListener('click', () => {
                
        //     switch (playStatus) {

        //             case null:

        //                 if (currentSong != this.name) {
        //                     const allAudios = document.querySelectorAll('audio')
        //                     allAudios.forEach(audio => {
        //                         audio.parentNode.removeChild(audio);
        //                     });
        //                 } 
                        
        //                 else {
        //                 audioPlayer = document.createElement("audio");
        //                 audioPlayer.src = this.audio;
        //                 this.view.appendChild(audioPlayer);
        //                 audioPlayer.play();
        //                 playStatus = "playing";
        //                 currentSong = this.name;
        //                 }
        //                 break;

        //             case "playing":
        //                 // Pause the audio
        //                 audioPlayer.pause();
        //                 // Update the play status
        //                 playStatus = "paused";
        //                 break;
        //             case "paused":
        //                 // Resume playing the audio
        //                 audioPlayer.play();
        //                 // Update the play status
        //                 playStatus = "playing";
        //                 break;
        //         }
        //     });

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

    
