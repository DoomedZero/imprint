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
                "/ Hey visitor",
                "(Ahem)...Oh my throat hurts..",
                'I am "tick-tock", Dont mistake me for "tik-tok"',
                "It takes me more time to tick than you guys scroll",
                "I saw you appear in front of me- and, I just greeted you",
                "But then quesion arises- WHO ARE YOU?",
                "And I bet no one can answer if Time itself inntrogates you.",
                "Just think who you were before you were born and will be afer death?"
            ],

            prompt: "Do you have any clue about it?",

            action: "commsClock2"

        },

        commsClock2: {
            title: "??",

            intro: [
                "I can say... Just accept your foolishness and say",
                "YOU ARE RIGHT... I DON'T KNOW ABOUT ME...",
            ],

            prompt: "What would like to do?- Maybe this time IT IS YOUR CHOICE",

            choices: [
                {
                    label: "Just accept your foolishness as adviced",

                    response: [
                        "I think you should disobeyed the advice",
                        "...",
                        "but Now you are in a so called paradox with two choices",
                        "if you obey, you don't disobey and if you disobey, you obey the advice to disobey",
                        "It's like either you find Superdeterminism or it finds YOU",
                        "Your-"
                    ],

                    action: "commsClock3A"

                },

                {
                    label: "Don't follow the advice and go on yourself",

                    response: [
                        "It takes GUTS to disobey",
                        "I like your courage but let me put you in a paradox of choice",
                        "I advice you to disobey my advice",
                        "Don't think hard...",
                        "if you obey, you don't disobey and if you disobey, you obey the advice to disobey",
                        "It's like either you find Superdeterminism or it finds YOU",
                        "Your-"
                    ],

                    action: "commsClock3A"
                }


            ]
        },

        commsClock3A: {
            title: "YOU??",

            intro: [
                "/ Wait who are you?",
                "And why your tone suddenly got changed",
                "Rambling about philosophies and paradoxes,",
                "Confusing me... Just who are you?"
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
                "SYSTEM 1 drives usual daily choices",
                "SYSTEM 2  is for rational thinking and,",
                "You might think then Who AM I?...",
                "Maybe I can say I DON'T KNOW WHO AM I TOO...",
                "But I Do know who I am...",
                "Think of me as a stage- The actor changes, teh roles changes, the audience changes",
                "But the stage doesn't, and why I am CHANGED you say...",
                "Seeing the play enogh times, the stage knows which are the critical choices",
                "Whose results the actors find hard to live with...",
                "But don't limit my existance in the sacle of a mere stage analogy",
            ],

            action: "commsClock3D"
        },

        commsClock3D: {
            title: "You",

            intro: [
                "So I am stuck in a worse place then I imagined...",
                "and you claim to be familliar or might know something about it",
                "So-"
            ],

            action: "commsClock4"
        },

        commsClock4: {
            title: "The clock",

            intro: [
                "No need to answer my question",
                "I have met many and only some managed to utter a word and got proven wrong instantly",
                "I liked that you tried...",
                "You may wonder what this place is and why are you here",
                "I sugget you meeting with my friend TV.",
                "But he is hard to reach, ",
                "so you will need to meet my another friend The radio before meeting Tv",
                "Maybe Radio can tell you more...",
                "But keep one thing in mind don't force anybody about anything here",
                "Because everyone is not same...",
                "So lets end the conversation with a clue to reach the raio and the clue is",
                "THE ARCHIVE CONTAINS SOME VALUEABLE INFORMATION MAKE SURE YOU READ EVERYTHING",
                "Your return ticket to the main door is ready- Bye!!"
            ],

            action: "door"
        }

    }
};