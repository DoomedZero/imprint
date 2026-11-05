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
                    label: "Open the door(Safe One)",
                    action: "openArchiveScene"
                },
                {
                    label: "Open the door(Real One)",
                    action: "openClockScene"
                }
            ]
        },

        fallback: {

            title: "??",

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
                "There is nothing to gather in this odd dimension",
                "You wonder why it is here...",
            ],

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Inspect the pot...",
                    action: "openLiftScene"
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
                    nextAction: "openLiftScene"
                }
            ]
        },
        fallback: {
            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Inspect the pot...",
                    action: "openLiftScene"
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
                    nextAction: "openLiftScene"
                }
            ]
        }
    },

    lift: {

        fallback: {

            title: "??",

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Open the main door...",
                    action: "openMainDoorScene"
                },
                {
                    label: "Open the archive...",
                    action: "openArchiveScene"
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
                    nextAction: "commsClock1"
                },
                {
                    label: "Try to pick it up...",
                    action: "sequence",
                    lines: [
                        "Picking up other's things is not good",
                        "But that doesn't make it bad...",
                        "Maybe clock can be helpful..."
                    ],
                    nextAction: "commsClock1"
                }
            ]
        },

        commsClock1: {

            title: "The Clock",

            intro: [
                "..................",
                "Ahem...Oh my throat hurts..",
                "There's been a long time since",
                "someone came to visit me",
                "It's just so good to see people around here",
                "Wait, why do you look surprised?",
                "Don't tell me that you don't know",
                "This place is WIERD"
            ],

            prompt: "Come on, say something....",

            action: "commsClock2"

        },

        commsClock2: {
            title: "??",

            intro: [
                "You seem confused??",
                "I thought you were ready for this",
                "Maybe you think, the clock doesn't seem as polite as others",
                "but thou shall never expect everyone to be same"
            ],

            prompt: "So now tell me, what you want do?",

            choices: [
                {
                    label: "Introduce yourself (This is the only thing you should do)",
                    action: "commsClock3"
                }
            ]
        },

        commsClock3: {
            title: "?",

            intro: [
                "Hello, I am......",
                "Wait...I dont know who I am...",
            ],

            action: "commsClock4"
        },

        commsClock4: {
            title: "The Clock",

            intro: [
                "There we go again...",
                "Let me tell YOU, you are not the only one, who don't know who they are...",
                "If you remove every trait from a person, You are left with nothing to point out",
                "So if you consider people as collection of traits- There is no you",
                "....Ha ha ha, how was that philosophical rant",
                "Wait wait wait, lemme tell ya, Existance comes with basic traits",
                "So primarily you are your point of view...."
            ]
        },

        commsClock5: {
            title: "??",

            intro: [
                "The clock seems to know something...",
                "You should ask about this place, NOW."
            ],

            action: "commsClock5"
        },

        commsClock6: {
            title: "?",

            intro: [
                "Well, that was some cool knowledge",
                "But do you know about this place?",
                "Why it is weird? Why so plain?",
                "Why you can talk?....."
            ]
        },

        commsClock7: {
            title: "The clock",

            intro: [
                "Well that's a big list of questions..",
                "Let's go rapid fire..",
                "This is a unique dimension where space and time are obsolete",
                "It looks weird because, it is plain",
                "The reason for it being plain is unknown to me too",
                'and what you mean by, "why" I can talk?',
                "Everyone can talk, you just can't hear it",
                "Maybe you need a lesson from THE RADIO..."
            ]
        },

        commsClock8: {
            title: "??",

            intro: [
                "The radio? we didn't saw that",
                "Maybe radio can be a next destination",
                "Ask the clock, who is the radio? and what I should learn from it?",
                "What are you wait for, ASK, POLIETLY."
            ],

            action: "commsClock9"
        },

        commsClock9: {
            title: "?",

            intro: [
                "Who is this radio? what I am supposed to learn from it?",
                "Why the door and the pot didn't talk like you?"
            ],

            action: "commsClock10"
        },

        commsClock10: {
            title: "??",

            intro: [
                "The radio is a radio who can teach you how to focus on frequncies",
                "So you hear...."
            ]
        }

    }
};