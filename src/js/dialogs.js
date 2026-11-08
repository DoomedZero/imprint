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

        thirdVisit: {

            title: "SYSTEM 3",

            trigger: {
                type: "sceneVisit",
                count: 3
            },

            intro: [
                "Ohh, so this door is called THE MAIN DOOR",
                "Well you have got your clues from the clock",
                "So I have to stay quite for a while...",
                "and not interfere..."
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

            title: "The Door",

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

            title: "The Clock",

            trigger: {
                type: "sceneVisit",
                count: 1
            },

            intro: [
                "Hey visitor",
                "(Ahem)...Oh my throat hurts..",
                "I am the clock...",
                "But - WHO ARE YOU?...",
                "What does individuality mean to you?",
                "And where is that individuality before birth and after death?"
            ],

            prompt: "Do you have any clue about it?",

            choices: [
                {
                    label: "Yes",

                    action: "commsClock2"
                },

                {
                    label: "More than you expect",

                    action: "commsClock2"
                }
            ],
        },

        commsClock2: {
            title: "??",

            intro: [
                "WAIT! you should think before answering..",
                "I suggest you should say",
                "YOU ARE RIGHT... I DON'T KNOW ABOUT ME...",
                "The Clock-"
            ],

            prompt: "What would like to do?",

            action: "commsClock4"
        },

        commsClock4: {
            title: "The clock",

            intro: [
                "No need to answer my question, I know it is hard....",
                "Anyways, You may wonder what this place is and why are you here",
                "for that- you should meet THE TV.",
                "But he is hard to reach, ",
                "so you will need to meet The RADIO before meeting TV",
                "Maybe Radio can help find you to find a way to the TV...",
                "and I can help you reach the radio, hold a second,",
                "...",
            ],

            prompt: `Yeah it's done! just utter "RADIO", Don't try anyhthing funny, PLEASE...`,

            choices: [
                {
                    label: 'Blurt out "RADIO"',
                    action: "radio"
                }
            ]
        }
    }
};