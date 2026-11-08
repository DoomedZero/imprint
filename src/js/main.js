import { loadScene } from "./navigation.js";
import { initializeInteractions } from "./interactions.js";
import { startMusic } from "./music.js";

initializeInteractions();

const welcomeScreen = document.getElementById("welcome-screen");
const playButton = document.getElementById("play-button");

playButton.addEventListener("click", async () => {

    playButton.disabled = true;

    // Start music directly from the user's click.
    const musicPromise = startMusic();

    // Load the door scene.
    const loaded = await loadScene("door");

    if (!loaded) {
        playButton.disabled = false;
        return;
    }

    await musicPromise;
    welcomeScreen.remove();
});