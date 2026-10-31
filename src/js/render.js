
import { dialogues } from "./dialogs.js";

const dialogueBox = document.getElementById("dialogue");
const dialogueTitle = document.getElementById("dialogue-title");
const dialogueText = document.getElementById("dialogue-text");
const dialogueChoices = document.getElementById("dialogue-choices");
const closeButton = document.getElementById("close-dialogue");

const visitedItems = new Set();

function openItem(item) {
    const dialogue = dialogues[item];

    if (!dialogue) return;

    dialogueTitle.textContent =
        item === "door" ? "The Door" : item;

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
            window.location.href = "archive.html";
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

document.querySelectorAll(".print-photo").forEach((element) => {
    element.addEventListener("click", () => {
        openItem(element.id);
    });
});

closeButton?.addEventListener("click", closeDialogue);

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeDialogue();
    }
});
