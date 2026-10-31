
export const dialogues = {
    door: {
        firstVisit: [
            "You see a door,",
            "You wonder where it may lead."
        ],

        prompt: "What would you like to do?",

        choices: [
            {
                label: "Open the door...",
                action: "openDoor"
            },
            {
                label: "Extinguish your fire of curiosity with laziness...",
                action: "sequence",
                lines: [
                    "Nice try, but you can't.",
                    "You are in a special dimension.",
                    "Your choices are already made.",
                    "Now get ready..."
                ],
                nextAction: "openDoor"
            }
        ]
    }
};
