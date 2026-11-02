
export const dialogues = {
    door: {
        firstVisit: [
            "You see a door,",
            "You wonder where it may lead.",
            "The door can't answer, usually...",
            "...So you have to figure out your self"
        ],

        prompt: "What would you like to do?",

        choices: [
            {
                label: "Open the door...",
                action: "openArchiveScene"
            },
            {
                label: "Extinguish your fire of curiosity with laziness...",
                action: "sequence",
                lines: [
                    "Nice try, but you can't.",
                    "You are in a special dimension.",
                    "Your choices are already made..."
                ],
                nextAction: "openArchiveScene"
            }
        ],

        secondVisit: [
            "ATTENTION!!",
            "This is not your familliar door",
            "Even though it may seem...",
            "There is something that seems DIFFERENT..."
        ],

        secondChoices: [
            {
                label: "Open the door(Safe One)",
                action: "openArchiveScene"
            },
            {
                label: "Open the door(Real One)",
                action: "openClockScene"
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
                action: "openTwoDoorsScene"
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
                nextAction: "openTwoDoorsScene"
            }
        ]
    },
    "left-door": {
        firstVisit: [
             "You see a door",
            "Rather familliar and your broad gaze suggests",
            "It is not the only one",
            'You wonder where this "left door" may lead'
        ],
        prompt: "What would you like to do?",

        choices: [
            {
                label : "Open the left door...",
                action: "openMainDoorScene"
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
                nextAction: "openMainDoorScene"
            }
        ]
    },
    "right-door": {
        firstVisit: [
            "You see a door",
            "Rather familliar and your broad gaze suggests",
            "It is not the only one",
            'You wonder where this "right door" may lead'
        ],
        prompt: "What would you like to do?",

        choices: [
            {
                label : "Open the right door...",
                action: "openArchiveScene"
            },
            {
                label: "Walk away...",
                action: "sequence",
                lines: [
                    "Guess what?...",
                    "You may not get what you want everytime",
                    "So just open the door..."
                ],
                nextAction: "openArchiveScene"
            }
        ]
    },
    clock: {
        firstVisit: [
            "You see a clock",
            "It seems... stopped",
            "But who might need clock here?",
            "What does this clock even suggest?"
        ],
        prompt: "What would you like to do?",

        choices: [
            {
                label: "Talk with the clock??...",
                action: "sequence",
                lines: [
                    "Try to communicate with clock?",
                    "Are you serious? well you can try...",
                    "Maybe clock might know something about this place...",
                ],
                nextAction: "commsClock"
            },
            {
                label: "Try to pick it up...",
                action: "sequence",
                lines: [
                    "Picking up other's things is not good",
                    "But that doesn't make it bad...",
                    "Maybe clock can be helpful..."
                ],
                nextAction: "commsClock"
            }
        ]
    }
};