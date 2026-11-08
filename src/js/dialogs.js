export const dialogues = {
    door: {

        firstVisit: {

            title: "??",

            trigger: {
                type: "sceneVisit",
                count: 1
            },

            intro: [
                "You see a door,",
                "You wonder where it may lead.",
                "The door can't answer, usually...",
                "...So you have to figure out your self."
            ],

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Open the door...",

                    response: [],

                    action: "archive"
                },
                {
                    label: "Extinguish your fire of curiosity with laziness...",

                    response: [
                        "Nice try, but you can't.",
                    ],

                    action: "archive"
                }
            ]
        },

        secondVisit: {

            title: "??",

            trigger: {
                type: "sceneVisit",
                count: 2
            },

            intro: [
                "ATTENTION!!",
                "This is not your familliar door",
                "Even though it may seem...",
                "There is something that seems DIFFERENT..."
            ],

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Push it",

                    response: [
                        "So you choose to push",
                        "Well if pushing and pulling opens the door",
                        "Do we really need both options?",
                        "Maybe yes",
                        "Maybe YES FOR SURE!!"
                    ],

                    action: "archive"
                },
                {
                    label: "Pull it",

                    response: [
                        "So you choose to pull",
                        "Well if pulling and pushing opens the door",
                        "Do we really need both options?",
                        "Maybe yes",
                        "Maybe YES FOR SURE!!"
                    ],

                    action: "clock"
                }
            ]
        },

        fallback: {

            title: "??",

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Open the door...",

                    response: [],

                    action: "archive"
                },
                {
                    label: "Extinguish your fire of curiosity with laziness...",

                    response: [
                        "Nice try, but you can't.",
                    ],

                    action: "archive"
                }
            ]
        }
    },
    pot: {
        firstVisit: {
            title: "??",

            trigger: {
                type: "objectVisit",
                count: 1
            },

            intro: [
                "You see a pot,",
                "Rather old and Antique,",
                "You wonder why it is here...",
            ],

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Inspect the pot...",

                    response: [],

                    action: "lift"
                },
                {
                    label: "Ignore it...",

                    response: [
                        '"Ignorance is bliss"-',
                        "What a pitty.",
                        "Maybe Ignoring the truth brings happiness",
                        "But what does happiness bring?",
                        "and What about curiosity which led you know this?",
                        "Don't ignore atleast in this place..."
                    ],

                    action: "lift"
                }
            ]
        },
        fallback: {
            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Inspect the pot yourself...",

                    response: [],

                    action: "lift"
                },
                {
                    label: "Let the pot inspect you...",

                    response: [
                        "You may have thought you will get another ramble",
                        "Guess you will not",
                        "Sometimes things don't go as you wish...",
                    ],

                    action: "lift"
                }
            ]
        }
    },

    lift: {

        firstVisit: {

            title: "??",

            trigger: {
                type: "sceneVisit",
                count: 1
            },

            intro: [
                "Oh! a Ascending Room!,",
                "But with no operator",
                "Can you use it?"
            ],

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Try to operate the lift...",

                    response: [],

                    action: "archive"
                },
                {
                    label: "Give up...",

                    response: [
                        "If you don't come out of comfort zone you see yourself where you started",
                        "You may have NOT guessed it, but you are going back to the start...",
                        "As per the rules...Obviously"
                    ],

                    action: "door"
                }
            ]
        },

        fallback: {

            title: "??",

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Press The Archive button in the lift",

                    response: [],

                    action: "archive"
                },
                {
                    label: "Press The Main Door button in the lift...",

                    response: [],

                    action: "door"
                }
            ]

        }
    },

    clock: {

        firstVisit: {

            title: "??",

            trigger: {
                type: "sceneVisit",
                count: 1
            },

            intro: [
                "You see a clock",
                "yet another antique piece",
                "You wonder..."
            ],

            action: "commsClock1"
        },

        commsClock1: {

            title: "The Clock",

            intro: [
                "Hey visitor",
                "(Ahem)...Oh my throat hurts..",
                "I saw you appear in front of me- and, I just greeted you",
                "I am the clock...",
                "But then quesion arises- WHO ARE YOU?...",
                "I bet no one can answer it when you are forced to think...",
                "...Who you were before you were BORN and will be afer DEATH?"
            ],

            prompt: "Do you have any clue about it?",

            action: "commsClock2"

        },

        commsClock2: {
            title: "??",

            intro: [
                "...hmm..I think you should say..",
                "YOU ARE RIGHT... I DON'T KNOW ABOUT ME...",
            ],

            prompt: "What would like to do?",

            choices: [
                {
                    label: "Accept the adviced",

                    response: [
                        "I think you should disobeyed the advice",
                        "Do you think you think you don't have individual choice",
                        "It's like either you find Superdeterminism or it finds YOU",
                        "Your-"
                    ],

                    action: "commsClock3A"

                },

                {
                    label: "Don't accept the advice",

                    response: [
                        "I like your courage but this is a paradox of choice",
                        "I adviced you to disobey my advice too which was labled as a choice",
                        "It's like either you find Superdeterminism or it finds YOU",
                        "Your-"
                    ],

                    action: "commsClock3A"
                }


            ]
        },

        commsClock3A: {
            title: "?",

            intro: [
                "Wait who are YOU?",
            ],

            action: "commsClock3B"
        },

        commsClock3B: {
            title: "??",

            intro: [
                "I am...SYSTEM 3"
            ],

            action: "commsClock3C"
        },

        commsClock3C: {
            title: "System 3",

            intro: [
                "Think of me as a stage- The actor changes, teh roles changes, the audience changes",
                "But the stage doesn't",
                "Seeing the play enogh times, the stage knows which are the critical choices",
                "Whose results the actors find hard to live with...",
                "But don't limit my existance in the sacle of a mere stage analogy",
            ],

            action: "commsClock3D"
        },

        commsClock3D: {
            title: "?",

            intro: [
                "So-"
            ],

            action: "commsClock4"
        },

        commsClock4: {
            title: "The clock",

            intro: [
                "No need to answer my question, I know it is hard, but also..",
                "You may wonder what this place is and why are you here",
                "for that- I sugget you meeting with my friend TV.",
                "But he is hard to reach, ",
                "so you will need to meet my another friend The radio before meeting Tv",
                "Maybe Radio can tell you more... or may help find a way to TV...",
                "This may help you to find the radio-",
                "THE ARCHIVE CONTAINS SOME VALUEABLE INFORMATION MAKE SURE YOU READ EVERYTHING",
                "...",
                "Your return ticket to the main door is ready- Bye!!"
            ],

            action: "door"
        }
    }
};