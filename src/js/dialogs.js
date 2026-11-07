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
                    label: [
                        "Open the door..."
                    ],

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
                    action: "archive"
                },
                {
                    label: "Open the door(Real One)",
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
                    action: "archive"
                },
                {
                    label: "Extinguish your fire of curiosity with laziness...",
                    action: "sequence",
                    lines: [
                        "Nice try, but you can't.",
                        "You are in a special dimension.",
                        "Your choices are already made..."
                    ],
                    nextAction: "archive"
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
                    action: "lift"
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
                    nextAction: "lift"
                }
            ]
        },
        fallback: {
            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Inspect the pot...",
                    action: "lift"
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
                    nextAction: "lift"
                }
            ]
        }
    },

    lift: {

        fallback: {

            title: "??",

            intro: [
                "Oh!, A lift,",
                "Will it work?",
                "The lift can't answer, usually...",
                "...So you have to figure out your self."
            ],

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Press Main Door button in the lift",
                    action: "door"
                },
                {
                    label: "Press The Archive button in the lift...",
                    action: "archive"
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
                "Old and antqiue as usual",
                "You wonder..."
            ],
            prompt: "What would you like to do?",

            action: "commsClock1"
        },

        commsClock1: {

            title: "The Clock",

            intro: [
                "....Ayyy wassup.....",
                "(Ahem)...Oh my throat hurts..",
                'Hey I am "tick-tock", Dont mistake me for "tik-tok',
                "There's been a long time since someone came to visit me",
                "It's so good to see people around here",
            ],

            prompt: "Come on, say something....",

            action: "commsClock2"

        },

        commsClock2: {
            title: "??",

            intro: [
                "You seem MORE confused??",
                "How can this old clock speak like this?"
            ],

            action: "commsClock3"

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
            ],

            action: "commsClock5"
        },

        commsClock5: {
            title: "??",

            intro: [
                "The clock seems to know something...",
                "You should ask about this place, NOW."
            ],

            action: "commsClock6"
        },

        commsClock6: {
            title: "?",

            intro: [
                "Well, that was some cool knowledge",
                "But do you know about this place?",
                "Why it is weird? Why so plain?",
                "Why you can talk?....."
            ],

            action: "commsClock7"
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
            ],

            action: "commsClock8"
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
                "Why the doo    r and the pot didn't talk like you?"
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