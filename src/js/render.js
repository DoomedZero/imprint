
import { dialogues } from "./dialogs.js";

const dialogueBox = document.getElementById("dialogue");
const dialogueTitle = document.getElementById("dialogue-title");
const dialogueText = document.getElementById("dialogue-text");
const dialogueChoices = document.getElementById("dialogue-choices");
const closeButton = document.getElementById("close-dialogue");

const visitedItems = new Set();

const app = document.getElementById("app");

async function loadScene(path) {
    try {
        const response = await fetch(path);

        if (!response.ok) {
            throw new Error(`Could not load scene: ${response.status}`);
        }

        const sceneHTML = await response.text();
        app.innerHTML = sceneHTML;
        closeDialogue();
    } catch (error) {
        console.error("Scene transition failed:", error);
    }
}

function openItem(item) {
    const dialogue = dialogues[item];

    if (!dialogue) return;

    const titles = {
        door: "The Door",
        pot: "The Pot",
        "left-door": "The Left Door",
        "right-door": "The Right Door"
    };

    dialogueTitle.textContent = titles[item] || item;

    dialogueBox.classList.remove("hidden");

    if (!visitedItems.has(item)) {
        visitedItems.add(item);
        showIntroduction(item, dialogue.firstVisit, 0);
    } else {
        showChoices(item);
    }
}

function showIntroduction(item, lines, index) {
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
            showIntroduction(item, lines, index + 1);
        } else {
            showChoices(item);
        }
    });

    dialogueChoices.appendChild(button);
}

function showChoices(item) {
    const dialogue = dialogues[item];

    dialogueText.textContent = dialogue.prompt;
    dialogueChoices.replaceChildren();

    dialogue.choices.forEach((choice) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "dialogue-choice";

        // Support either a single label or multiple lines.
        button.textContent = Array.isArray(choice.label)
            ? choice.label.join(" ")
            : choice.label;

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

    button.textContent =
        index < lines.length - 1
            ? "Continue..."
            : "Continue...";

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
            loadScene("src/scenes/archive.html");
            break;

        case "inspectPot":
            loadScene("src/scenes/two-doors.html");
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

app.addEventListener("click", (event) => {
    const item = event.target.closest(".print-photo");

    if (!item || !app.contains(item)) return;

    openItem(item.id);
});

closeButton?.addEventListener("click", closeDialogue);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDialogue();
    }
});
