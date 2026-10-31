
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
                    "Your choices are already made..."
                ],
                nextAction: "openDoor"
            }
        ]
    },
    pot: {
        firstVisit: [
            "You see a pot,",
            "Rather old and Antique,",
            "You wonder why it is here..."
        ],

        prompt: "What would you like to do?",

        choices: [
            {
                label: "Inspect the pot...",
                action: "inspectPot"
            },
            {
                label: "Let the pot be in peace",
                action: "sequence",
                lines: [
                    "You fell for it again?",
                    "Pitty.",
                    "You don't have choices...",
                ],
                nextAction: "inspectPot"
            }
        ]
    },
    "left-door": {
        firstVisit: [
            "You see a familliar door",
            'You wonder where this "left door" may lead'
        ],
        prompt: "What would you like to do?",

        choices: [
            {
                label : "Open the left door...",
                action: "openLeftDoor"
            },
            {
                label: "Get insulted Again...",
                action: "sequence",
                lines: [
                    "I like your curiosity...",
                    "You will be rewarded with INFORMATION",
                    "...This is a dream...",
                    "...The dream of the creator..."
                ],
                nextAction: "openLeftDoor"
            }
        ]
    },
    "right-door": {
        firstVisit: [
            "You see a familliar door",
            'You wonder where this "right door" may lead'
        ],
        prompt: "What would you like to do?",

        choices: [
            {
                label : "Open the right door...",
                action: "openRightDoor"
            },
            {
                label: "Get insulted Again...",
                action: "sequence",
                lines: [
                    "Guess what?...",
                    "You may not get what you want everytime",
                    "So just open the door..."
                ],
                nextAction: "openRightDoor"
            }
        ]
    }
};
