
import { infoData } from "./info.js";

export function renderInfo(itemId) {
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
