
import { recordSceneVisit, getSceneVisits } from "./state.js";

const app = document.getElementById("app");

const scenes = {
    door: "src/scenes/door.html",
    archive: "src/scenes/archive.html",
    info: "src/scenes/info.html",
    lift: "src/scenes/lift.html",
    clock: "src/scenes/clock.html",
    tv: "src/scenes/tv.html",
};

let currentScene = "";
let isLoadingScene = false;

export function getCurrentScene() {
    return currentScene;
}

export async function loadScene(sceneName) {
    
    if (isLoadingScene) return false;

    const path = scenes[sceneName];

    if (!path) {
        console.warn(`Unknown scene: ${sceneName}`);
        return false;
    }

    isLoadingScene = true;
    app.classList.add("is-transitioning");

    try {
        await new Promise(resolve => setTimeout(resolve, 250));

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(
                `Could not load scene: ${response.status}`
            );
        }

        const html = await response.text();

        app.innerHTML = html;

        recordSceneVisit(sceneName);
        currentScene = sceneName;

        console.log(
            "Scene loaded:",
            currentScene,
            getSceneVisits(currentScene)
        );

        window.scrollTo(0, 0);

        return true;
    } catch (error) {
        console.error("Scene transition failed:", error);
        return false;
    } finally {
        isLoadingScene = false;

        requestAnimationFrame(() => {
            app.classList.remove("is-transitioning");
        });
    }
}
