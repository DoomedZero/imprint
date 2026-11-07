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
                        "Well tell me if pushing and pulling opens the door",
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
                        "Well tell me if pushing and pulling opens the door",
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
                        "You are in a special dimension.",
                        "Your choices are already made..."
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
                        '"Ignorance is bliss"- You say',
                        "What a pitty.",
                        "Maybe Ignoring the truth brings happiness",
                        "But what does happiness bring?",
                        "What about curiosity which led you know this?",
                        "Do you really think we take birth just to die",
                        "Don't be an ignorant...", 
                        "Even after when your choices don't matter..."
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
                        "Giving up is a personal choice",
                        "But there are no personal choices here.",
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
                "....Ayyy wassup.....",
                "(Ahem)...Oh my throat hurts..",
                'Hey I am "tick-tock", Dont mistake me for "tik-tok"',
            ],

            prompt: "Come on, say something....",

            action: "commsClock2"

        },

        }
};