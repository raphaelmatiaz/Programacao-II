import ArtPiece from "./artPieceClass.js";

export default class Composition extends ArtPiece {
    audio;
    constructor(data) {
        super(data)

        this.audio = data.audio;
        
        let playStatus = null;
        let audioPlayer;
        let currentSong;


        const title = document.getElementById("artworks-title");
        this.view.addEventListener("mouseenter", () => {
        // Remove the current ID
        title.removeAttribute("artworks-title");

        // Add a new ID
        title.setAttribute("id", "compositions-title");
        title.textContent = "Compositions";
        })

        this.view.addEventListener('click', () => {
            let audioPlayer = this.view.querySelector('audio'); // Check if an audio player already exists
                switch (playStatus) {
                    case null:


                        audioPlayer = document.createElement("audio");
                        // Set the audio source
                        audioPlayer.src = this.audio;
                        // Append the audio element to the view
                        this.view.appendChild(audioPlayer);
                        // Play the audio
                        audioPlayer.play();
                        // Update the play status
                        playStatus = "playing";
                        break;
                    case "playing":
                        // Pause the audio
                        audioPlayer.pause();
                        // Update the play status
                        playStatus = "paused";
                        break;
                    case "paused":
                        // Resume playing the audio
                        audioPlayer.play();
                        // Update the play status
                        playStatus = "playing";
                        break;
                }
            });
            
        };
        
    }

    
