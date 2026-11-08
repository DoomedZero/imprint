// Closing the scene doesn't increase sceneVisit- tested
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
                "You wonder where it might lead.",
                "The door can't answer, usually...",
                "...So you have to figure out yourself."
            ],

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Open the door...",

                    response: [],

                    action: "archive"
                },
                {
                    label: "Extinguish the fire of curiosity with laziness...",

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

                    action: "clock"
                },
                {
                    label: "Pull it",

                    action: "clock"
                }
            ]
        },

        thirdVisit: {

            title: "The Door",

            trigger: {
                type: "sceneVisit",
                count: 3
            },

            intro: [
                "Looks like you can hear me, but it surely took a while...",
                "As you know, I am the door. I can lead you the archive",
                "But sometimes some specific events trigger some specific locations",
                "Just like you visited the clock and the one who visits the clock has one goal only...",
                "Find the TV....",
                "Well I can't help you about that",
                "Maybe reading in the archive can help just like the clock said...",
            ],

            prompt: "So would you like to go to the archive?",

            choices: [
                {
                    label: "Yes",

                    action: "archive"
                },
                {
                    label: "Extinguish the fire of curiosity with laziness?",

                    response: [
                        "Nice try, but you can't.",
                    ],

                    action: "archive"
                }
            ]
        },

        fallback: {

            title: "The Door",

            prompt: "would you like to go to the archive?",

            choices: [
                {
                    label: "Yes",

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
                        "What a pity.",
                        "Maybe Ignoring the truth brings happiness",
                        "But what does happiness bring?",
                        "and What about curiosity which led you know this?",
                        "Don't ignore at least in this place..."
                    ],

                    action: "lift"
                }
            ]
        },

        secondVisit: {
            title: "The Pot",

            trigger: {
                type: "objectVisit",
                count: 2
            },

            intro: [
                "So you are not deaf anymore...",
                "Well...I am the pot",
                "I would have suggested you to read the archive",
                "But do you think that can help you?",
                "It's your choice...but-",
                "if you wonder how can I put you in front of the lift or the archive",
                "Well... It's magic, yeah, let it be magic for now..."
            ],

            prompt: "So, would like to go the archive or the lift?",

            choices: [
                {
                    label: "The archive",

                    action: "archive"
                },

                {
                    label: "The lift",

                    action: "lift"
                }
            ]
        },

        sixthVisit: {
            title: "The Pot",

            trigger: {
                type: "objectVisit",
                count: 6
            },

            intro: [
                "So you are determined...",
                "After being with these archive articles for many years",
                "I have gained wisdom just like the TV",
                "but the TV's wisdom lies far beyond mine...",
                "I am impressed by your dedication but let me tell you,",
                "I am the only one who has the ability to reach the TV, how? well-",
                "We both walk on the path of wisdom",
                "and I think you should meet him...",
                "Let me do my magic..."
            ],

            action: "tv"
        },

        fallback: {

            title: "The Pot",
            
            prompt: "Where would you like to do?",

            choices: [
                {
                    label: "The archive",

                    action: "archive"
                },

                {
                    label: "The lift",

                    action: "lift"
                }
            ]
        },
    },

    lift: {

        firstVisit: {

            title: "??",

            trigger: {
                type: "sceneVisit",
                count: 1
            },

            intro: [
                "Oh an Ascending Room!,",
                "But with no operator",
                "Can you use it?"
            ],

            prompt: "What would you like to do?",

            choices: [
                {
                    label: "Try to operate the lift...",

                    response: [],

                    action: "door"
                },
                {
                    label: "Give up...",

                    response: [
                        "If you don't come out of your comfort zone you see yourself where you started...",
                    ],

                    action: "door"
                }
            ]
        },

        secondVisit: {

            title: "The lift",

            trigger: {
                type: "sceneVisit",
                count: 2
            },

            intro: [
                "Helloow, I am the lift,",
                "I am pleased, that you can hear me...",
                "But your last ride caused some problems and now you can only go to the archive...",
            ],

            prompt: "So would you like to go to the archive",

            choices: [
                {
                    label: "Press the archive button",

                    action: "archive"
                },
            ]
        },

        fallback: {

            title: "??",

            prompt: "Sorry for the inconvenience but you can only go to the archive",

            choices: [
                {
                    label: "Press The Archive button in the lift",

                    action: "archive"
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
                "Do you have any clue about it?"
            ],

            action: "commsClock2"
        },

        commsClock2: {
            title: "??",

            intro: [
                "Th-"
            ],

            action: "commsClock4"
        },

        commsClock4: {
            title: "The clock",

            intro: [
                "No need to answer my question, I know you can't....",
                "Anyways, You may wonder what this place is and why are you here",
                "for that- you should meet THE TV.",
                "But he is hard to reach, ",
                "so you will need to meet The RADIO before meeting TV",
                "Maybe Radio can help you find a way to reach the TV...",
                "and I can help you reach the radio, Just hold on a second",
                "...",
            ],

            prompt: `Yeah it's done! just utter "RADIO", Don't try anything funny, PLEASE...`,

            choices: [
                {
                    label: 'Blurt out "RADIO"',
                    action: "radio"
                }
            ]
        }
    },
    radio: {
        firstVisit: {
            title: "The Radio",

            trigger: {
                type: "sceneVisit",
                count: 1
            },

            intro: [
                ".... I heard a visitor is coming to meet me",
                "I am pleased to meet you visitor",
                "I am the radio.",
                "and my powers lie in listening",
                "I was listening to your conversation with the clock",
                "But my hearing abilities are not sharp as they were before",
                "Let's be on the topic, You wanted to meet the TV right?",
                "TV is an old friend of mine",
                "Just like I hear everything, He has the ability of information",
                "He has knowledge about many topics you can have endless conversation with him",
                'Well "The power of information comes with isolation"- He said, when I saw him for the last time',
                "You want to meet TV, and I want to meet him too",
                "I guess it would not be that easy...",
                "but with the powers I grant you, will let you reach him",
                "From now on you can hear everyone's words-",
                "(Coughs)",
                "You should start the search... (Coughs severely)..."
            ],

            action: "door"
        }
    },

    tv: {

        firstVisit: {

            title: "The TV",

            trigger: {
                type: "sceneVisit",
                count: 1
            },

            intro: [
                "Welcome visitor.....",
                "I am the TV and I am here to give you the information",
                "You may have questions like",
                "What is this place? and why you are here?",
                "all questions can be answered with this one question-",
                "tell me whose words described The Door?,",
                "The Pot and The Lift....",
                "That was just you...",
                "This place is your dream. you are here because you are lucid dreaming",
                "and in 20 seconds, Mom will wake you up because you have to get ready for the halloween party",
                "Enjoy the party and Happy Halloween..."
            ],

            action: "end"
        }
    }
};