
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

    showLines(block.intro, () => {
        finishBlock(scene, object, key, block);
    });
}



function showLines(lines, onComplete) {
    if (!lines?.length) {
        onComplete();
        return;
    }

    let index = 0;

    function renderLine() {
        dialogueText.textContent = lines[index];
        dialogueChoices.replaceChildren();

        addButton("Continue...", () => {
            index++;

            if (index < lines.length) {
                renderLine();
            } else {
                onComplete();
            }
        });
    }

    renderLine();
}


function finishBlock(scene, object, key, block) {
    if (block.trigger) {
        completedIntroductions.add(
            completionKey(scene, object, key)
        );
    }

    if (block.choices) {
        showChoices(object, block);
    } else if (block.action) {
        if (block.prompt) {
            dialogueText.textContent = block.prompt;
            dialogueChoices.replaceChildren();

            addButton("Continue...", () => {
                executeAction(object, block.action);
            });
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
            showLines(choice.response, () => {
                executeAction(object, choice.action);
            });
        });
    }
}



function addButton(label, onClick) {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "dialogue-choice";
    button.textContent = label;
    button.addEventListener("click", onClick);

    dialogueChoices.appendChild(button);
}



function executeAction(object, action) {
    if (!action) return;

    const nextBlock = dialogues[object]?.[action];

    if (nextBlock) {
        showBlock(getCurrentScene(), object, action, nextBlock);
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
}