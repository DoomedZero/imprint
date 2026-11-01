
export const dialogues = {
    door: {
        firstVisit: [
            "You see a door,",
            "The door seems old but sturdy enough to",
            "be in same shape at same space",
            "But still you wonder where it may lead.",
            "The door can't answer, usually...",
            "...So you have to figure out your self"
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
            "There is nothing to gather in this odd dimension",
            "You wonder why it is here...",
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
                    "You may see two paths...",
                    "But you will never know where you will reach next...",
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
                label: "Walk Away...",
                action: "sequence",
                lines: [
                    "I like your refusal capabilities...",
                    "You will be rewarded with INFORMATION",
                    "...This is a maze.",
                    "Where you never know what might happen next"
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
                label: "Walk away...",
                action: "sequence",
                lines: [
                    "Guess what?...",
                    "You may not get what you want everytime",
                    "So just open the door..."
                ],
                nextAction: "openRightDoor"
            }
        ]
    },
    clock: {
        firstVisit: [
            "You see a clock",
            "It seems... stopped",
            "Think about it...",
            "The clock has stopped",
            "But who might need clock here?",
            "What does this clock even suggest?"
        ]
    }
};
