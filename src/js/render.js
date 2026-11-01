
import { dialogues } from "./dialogs.js";
import { infoData } from "./info.js";

const dialogueBox = document.getElementById("dialogue");
const dialogueTitle = document.getElementById("dialogue-title");
const dialogueText = document.getElementById("dialogue-text");
const dialogueChoices = document.getElementById("dialogue-choices");
const closeButton = document.getElementById("close-dialogue");

const scenes = {
    door: "src/scenes/door.html",
    archive: "src/scenes/archive.html",
    "two-doors": "src/scenes/two-doors.html",
    info: "src/scenes/info.html",
    lift: "src/scenes/lift.html",
    clock: "src/scenes/clock.html",
    tv: "src/scenes/tv.html",
    gramophone: "src/scenes/gramophone.html"
};

const visitedItems = new Set();
const sceneVisits = {};

const app = document.getElementById("app");

async function loadScene(sceneName) {
    const path = scenes[sceneName];

    if (!path) {
        console.warn(`Unknown scene: ${sceneName}`);
        return false;
    }

    app.classList.add("is-transitioning");

    try {
        await new Promise(resolve => setTimeout(resolve, 250));

        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Could not load scene: ${response.status}`);
        }

        app.innerHTML = await response.text();

        sceneVisits[sceneName] = (sceneVisits[sceneName] || 0) + 1;

        window.scrollTo(0, 0);
        closeDialogue();

        return true;
    } catch (error) {
        console.error("Scene transition failed:", error);
        return false;
    } finally {
        requestAnimationFrame(() => {
            app.classList.remove("is-transitioning");
        });
    }
}

function openItem(item) {
    const dialogue = dialogues[item];

    if (!dialogue) return;

    const titles = {
        door: "??",
        pot: "??",
        "left-door": "??",
        "right-door": "??",
        clock: "??"
    };

    dialogueTitle.textContent = titles[item] || item;
    dialogueBox.classList.remove("hidden");

    if (item === "door" && sceneVisits.door === 2) {
        showIntroduction(
            item,
            dialogue.secondVisit,
            0,
            () => showChoices(item, dialogue.secondChoices)
        );
    } else if (!visitedItems.has(item)) {
        visitedItems.add(item);
        showIntroduction(item, dialogue.firstVisit, 0);
    } else {
        showChoices(item);
    }
}

function showIntroduction(item, lines, index = 0, onComplete = null) {
    dialogueText.textContent = lines[index];
    dialogueChoices.replaceChildren();

    const button = document.createElement("button");
    button.type = "button";
    button.className = "dialogue-choice";

    button.textContent =
        index < lines.length - 1
            ? "Continue..."
            : "Continue to choices...";

    button.addEventListener("click", () => {
        if (index < lines.length - 1) {
            showIntroduction(item, lines, index + 1, onComplete);
        } else if (onComplete) {
            onComplete();
        } else {
            showChoices(item);
        }
    });

    dialogueChoices.appendChild(button);
}

function showChoices(item, choices = dialogues[item].choices) {
    const dialogue = dialogues[item];

    dialogueText.textContent = dialogue.prompt;
    dialogueChoices.replaceChildren();

    choices.forEach(choice => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "dialogue-choice";
        button.textContent = choice.label;

        button.addEventListener("click", () => {
            if (choice.action === "sequence") {
                showSequence(
                    choice.lines,
                    0,
                    choice.nextAction
                );
            } else {
                handleAction(choice.action);
            }
        });

        dialogueChoices.appendChild(button);
    });
}

function showSequence(lines, index, nextAction) {
    dialogueText.textContent = lines[index];
    dialogueChoices.replaceChildren();

    const button = document.createElement("button");
    button.type = "button";
    button.className = "dialogue-choice";
    button.textContent = "Continue...";

    button.addEventListener("click", () => {
        if (index < lines.length - 1) {
            showSequence(lines, index + 1, nextAction);
        } else {
            handleAction(nextAction);
        }
    });

    dialogueChoices.appendChild(button);
}

function handleAction(action) {
    switch (action) {
        case "openDoor":
            loadScene("archive");
            break;

        case "openClockScene":
            loadScene("clock");
            break;

        case "inspectPot":
            loadScene("two-doors");
            break;

        case "openLeftDoor":
            loadScene("door");
            break;

        case "openRightDoor":
            loadScene("archive");
            break;

        case "close":
            closeDialogue();
            break;

        default:
            console.warn(`Unknown dialogue action: ${action}`);
    }
}

function closeDialogue() {
    dialogueBox.classList.add("hidden");
    dialogueChoices.replaceChildren();
}

function renderInfo(itemId) {
    const data = infoData[itemId];

    if (!data) {
        console.warn(`No information found for: ${itemId}`);
        return;
    }

    const image = document.getElementById("info-image");
    const description = document.querySelector(".info-desc");

    if (!image || !description) {
        console.warn("Information page elements were not found.");
        return;
    }

    image.src = data.image;
    image.alt = itemId;

    description.replaceChildren();

    data.longData.forEach(text => {
        const paragraph = document.createElement("p");
        paragraph.textContent = text;
        description.appendChild(paragraph);
    });
}

app.addEventListener("click", async event => {
    const archiveItem = event.target.closest(".archive-item");

    if (archiveItem && app.contains(archiveItem)) {
        event.preventDefault();

        const item = archiveItem.querySelector("[id]");
        if (!item) return;

        const loaded = await loadScene("info");

        if (loaded) {
            renderInfo(item.id);
        }

        return;
    }

    const item = event.target.closest(".print-photo");

    if (!item || !app.contains(item)) return;

    openItem(item.id);
});

closeButton?.addEventListener("click", closeDialogue);

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        closeDialogue();
    }
});

loadScene("door");