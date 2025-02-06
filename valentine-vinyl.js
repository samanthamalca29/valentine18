document.addEventListener('DOMContentLoaded', () => {
    fetch("./vinyl.svg")
      .then((response) => response.text())
      .then((svg) => {
        const playerContainer = document.getElementById("player-container");
        playerContainer.innerHTML = svg;

        const vinyl = document.querySelector("svg");
        const playButton = document.getElementById("play-button");
        const audio = document.getElementById("love-song");
        const valentineNote = document.getElementById("valentine-note"); // La hoja
        let isPlaying = false;

        playButton.addEventListener("click", () => {
          if (!isPlaying) {
            vinyl.style.animation = "spin 2s linear infinite";
            audio.play();
            playButton.textContent = "Pause";
            valentineNote.style.display = "block"; // Muestra la hoja
            isPlaying = true;
          } else {
            vinyl.style.animation = "";
            audio.pause();
            playButton.textContent = "Play";
            valentineNote.style.display = "none"; // Oculta la hoja
            isPlaying = false;
          }
        });
      })
      .catch((err) => console.error("Error loading SVG:", err));
});
