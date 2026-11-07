import { dialogues } from "./dialogs.js";
import {
    getSceneVisits,
    recordObjectVisit,
    getObjectVisits
} from "./state.js";
import { getCurrentScene, loadScene } from "./navigation.js";
import { renderInfo } from "./render.js";

const app = document.getElementById("app");
const dialogueBox = document.getElementById("dialogue");
const dialogueTitle = document.getElementById("dialogue-title");
const dialogueText = document.getElementById("dialogue-text");
const dialogueChoices = document.getElementById("dialogue-choices");
const closeButton = document.getElementById("close-dialogue");

const completedIntroductions = new Set();


function closeDialogue() {
    dialogueBox.classList.add("hidden");
    dialogueChoices.replaceChildren();
}


async function navigateTo(sceneName) {
    const loaded = await loadScene(sceneName);

    if (loaded) closeDialogue();

    return loaded;
}


function completionKey(scene, object, block) {
    return `${scene}:${object}:${block}`;
}


function triggerMatches(trigger, scene, object) {
    if (!trigger) return false;

    const counts = {
        sceneVisit: getSceneVisits(scene),
        objectVisit: getObjectVisits(object)
    };

    return counts[trigger.type] === trigger.count;
}


// Dialogue data is object-based: dialogues.door, dialogues.pot, dialogues.clock...
function selectDialogue(scene, object) {
    const objectDialogues = dialogues[object];

    if (!objectDialogues) return null;

    for (const [key, block] of Object.entries(objectDialogues)) {
        if (key === "fallback" || !block.trigger) continue;

        const completed = completedIntroductions.has(
            completionKey(scene, object, key)
        );

        if (!completed && triggerMatches(block.trigger, scene, object)) {
            return { key, block };
        }
    }

    return objectDialogues.fallback
        ? { key: "fallback", block: objectDialogues.fallback }
        : null;
}


function openItem(object) {
    const scene = getCurrentScene();

    if (!scene || !dialogues[object]) return;

    recordObjectVisit(object);

    const selected = selectDialogue(scene, object);
    if (!selected) return;

    dialogueBox.classList.remove("hidden");

    showBlock(scene, object, selected.key, selected.block);
}


function showBlock(scene, object, key, block) {
    dialogueTitle.textContent = block.title || object;

    if (block.intro?.length) {
        showIntroduction(scene, object, key, block, 0);
        return;
    }

    finishBlock(scene, object, key, block);
}


function showIntroduction(scene, object, key, block, index) {
    dialogueText.textContent = block.intro[index];
    dialogueChoices.replaceChildren();

    addButton(
        index < block.intro.length - 1 ? "Continue..." : "Continue...",
        () => {
            if (index < block.intro.length - 1) {
                showIntroduction(scene, object, key, block, index + 1);
            } else {
                finishBlock(scene, object, key, block);
            }
        }
    );
}


function finishBlock(scene, object, key, block) {
    if (block.trigger) {
        completedIntroductions.add(completionKey(scene, object, key));
    }

    if (block.choices) {
        showChoices(object, block);
    } else if (block.action) {
        if (block.prompt) {
            dialogueText.textContent = block.prompt;
            dialogueChoices.replaceChildren();
            addButton("Continue...", () => executeAction(object, block.action));
        } else {
            executeAction(object, block.action);
        }
    } else if (block.prompt) {
        dialogueText.textContent = block.prompt;
        dialogueChoices.replaceChildren();
    }
}


function showChoices(object, block) {
    dialogueText.textContent = block.prompt || "";
    dialogueChoices.replaceChildren();

    for (const choice of block.choices) {
        addButton(choice.label, () => {
            if (choice.action === "sequence") {
                showSequence(object, choice.lines || [], 0, choice.nextAction);
            } else {
                executeAction(object, choice.action);
            }
        });
    }
}


function showSequence(object, lines, index, nextAction) {
    if (!lines.length) {
        executeAction(object, nextAction);
        return;
    }

    dialogueText.textContent = lines[index];
    dialogueChoices.replaceChildren();

    addButton("Continue...", () => {
        if (index < lines.length - 1) {
            showSequence(object, lines, index + 1, nextAction);
        } else {
            executeAction(object, nextAction);
        }
    });
}


function addButton(label, onClick) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "dialogue-choice";
    button.textContent = label;
    button.addEventListener("click", onClick);
    dialogueChoices.appendChild(button);
}


// An action is either another block under this object, a scene ID, or "close".
function executeAction(object, action) {
    if (!action) return;

    const nextBlock = dialogues[object]?.[action];

    if (nextBlock) {
        showBlock(getCurrentScene(), object, action, nextBlock);
    } else if (action === "close") {
        closeDialogue();
    } else {
        navigateTo(action);
    }
}


export function initializeInteractions() {
    app.addEventListener("click", async event => {
        const archiveItem = event.target.closest(".archive-item");

        if (archiveItem && app.contains(archiveItem)) {
            event.preventDefault();

            const item = archiveItem.querySelector("[id]");
            if (!item) return;

            const loaded = await navigateTo("info");

            if (loaded) renderInfo(item.id);
            return;
        }

        const object = event.target.closest(".print-photo");

        if (object && app.contains(object)) {
            openItem(object.id);
        }
    });

    closeButton?.addEventListener("click", closeDialogue);

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeDialogue();
    });
}
