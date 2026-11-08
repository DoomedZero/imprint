const audio = document.getElementById("bgm");

export async function startMusic() {
    if (!audio || !audio.paused) return;

    try {
        audio.currentTime = 1;
        await audio.play();
    } catch {
        console.warn("Music playback was blocked.");
    }
}