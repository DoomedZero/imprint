const audio = document.getElementById("bgm");

audio.currentTime = 1; 

async function startMusic() {
    if (!audio || !audio.paused) return;

    try {
        await audio.play();
    } catch {
        // The browser may require another explicit interaction.
    }
}

document.addEventListener("pointerdown", startMusic, { once: true });
document.addEventListener("keydown", startMusic, { once: true });