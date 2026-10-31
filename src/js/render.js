
import { dialogues } from "./dialogs.js";

const dialogueBox = document.getElementById("dialogue");
const dialogueTitle = document.getElementById("dialogue-title");
const dialogueText = document.getElementById("dialogue-text");
const dialogueChoices = document.getElementById("dialogue-choices");
const closeButton = document.getElementById("close-dialogue");

// Track which items have already shown their introduction.
const visitedItems = new Set();

let activeItem = null;

// Open an item and decide whether to show its introduction.
function openItem(item) {
    const dialogue = dialogues[item];

    if (!dialogue) return;

    activeItem = item;

    dialogueTitle.textContent =
        item === "rack" ? "Newspaper Rack" : "Gramophone";

    dialogueBox.classList.remove("hidden");

    if (!visitedItems.has(item)) {
        visitedItems.add(item);
        showIntroduction(item, dialogue.firstVisit, 0);
    } else {
        showChoices(item);
    }
}

// Display introduction lines one at a time.
function showIntroduction(item, lines, index) {
    dialogueChoices.replaceChildren();

    dialogueText.textContent = lines[index];

    const nextButton = document.createElement("button");
    nextButton.type = "button";
    nextButton.className = "dialogue-choice";
    nextButton.textContent =
        index < lines.length - 1 ? "Continue..." : "Continue to choices...";

    nextButton.addEventListener("click", () => {
        if (index < lines.length - 1) {
            showIntroduction(item, lines, index + 1);
        } else {
            showChoices(item);
        }
    });

    dialogueChoices.appendChild(nextButton);
}

// Display the item's choices.
function showChoices(item) {
    const dialogue = dialogues[item];

    dialogueText.textContent = dialogue.prompt;
    dialogueChoices.replaceChildren();

    dialogue.choices.forEach((choice) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "dialogue-choice";
        button.textContent = choice.label;

        button.addEventListener("click", () => {
            handleAction(choice.action);
        });

        dialogueChoices.appendChild(button);
    });
}

// Handle the selected choice.
function handleAction(action) {
    switch (action) {
        case "openCollection":
            closeDialogue();

            // Connect your newspaper collection behavior here.
            console.log("Open newspaper collection");
            break;

        case "playGramophone":
            closeDialogue();

            // Connect your gramophone behavior here.
            console.log("Release gramophone brake");
            break;

        case "close":
            closeDialogue();
            break;

        default:
            console.warn(`Unknown dialogue action: ${action}`);
    }
}

// Close the dialogue without resetting visitedItems.
function closeDialogue() {
    dialogueBox.classList.add("hidden");
    dialogueChoices.replaceChildren();
    activeItem = null;
}

// Connect the clickable objects using their existing HTML IDs.
document.querySelectorAll(".print-photo").forEach((element) => {
    element.addEventListener("click", () => {
        openItem(element.id);
    });
});

closeButton.addEventListener("click", closeDialogue);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDialogue();
    }
});
