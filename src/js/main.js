import { loadScene } from "./navigation.js";
import { initializeInteractions } from "./interactions.js";
import { infoData } from "./info.js";

const intro = document.getElementById("intro-screen");
const playButton = document.getElementById("play-button");

initializeInteractions();

// Scene HTML files currently registered in navigation.js.
const sceneFiles = [
    "src/scenes/door.html",
    "src/scenes/archive.html",
    "src/scenes/info.html",
    "src/scenes/clock.html",
    "src/scenes/lift.html",
    "src/scenes/radio.html",
    "src/scenes/tv.html"
];

// Images used directly by scenes.
const sceneImages = [
    "src/img/door.jpg",
    "src/img/Antique-Silver-Pot.jpg",
    "src/img/clock2.jpeg",
    "src/img/lift.png",
    "src/img/radio.png",
    "src/img/tv.png"
];

// Include all archive information images.
const infoImages = Object.values(infoData).map(item => item.image);

async function preloadAssets() {

    const sceneLoads = sceneFiles.map(async path => {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Failed to preload ${path}`);
        }

        return response.text();
    });

    const imageLoads = [...new Set([
        ...sceneImages,
        ...infoImages
    ])].map(src => {
        return new Promise((resolve, reject) => {
            const image = new Image();

            image.onload = async () => {
                try {
                    await image.decode();
                } catch { }

                resolve();
            };

            image.onerror = () => {
                reject(new Error(`Failed to preload ${src}`));
            };

            image.src = src;
        });
    });

    await Promise.all([
        ...sceneLoads,
        ...imageLoads
    ]);
}

// The intro must remain visible for at least 30 seconds.
const minimumTime = new Promise(resolve => {
    setTimeout(resolve, 5000);
});

// Play becomes available only when both conditions are met.
Promise.all([
    minimumTime,
    preloadAssets()
])
    .then(() => {
        playButton.disabled = false;
    })
    .catch(error => {
        console.error("IMPRINT preloading failed:", error);
    });

playButton.addEventListener("click", async () => {

    if (playButton.disabled) return;

    playButton.disabled = true;

    // Preserve your current starting scene.
    const loaded = await loadScene("door");

    if (!loaded) {
        playButton.disabled = false;
        return;
    }

    intro.classList.add("fade-out");

    setTimeout(() => {
        intro.remove();
    }, 1000);
});