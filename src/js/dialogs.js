export const dialogues = {
    rack: {
        firstVisit: [
            "You notice an old newspaper rack filled with carefully arranged newspapers.",
            "The masthead reads IMPRINT..."
        ],

        prompt: "What would you like to do?",

        choices: [
            {
                label: "Browse newspapers...",
                action: "openCollection"
            },
            {
                label: "Leave the rack in peace...",
                action: "close"
            }
        ]
    },

    gramophone: {
        firstVisit: [
            "You notice an old gramophone with a shellac record resting on its turntable.",
            "The record label reads PASSION..."
        ],

        prompt: "What would you like to do?",

        choices: [
            {
                label: "Release the brake...",
                action: "playGramophone"
            },
            {
                label: "Leave the gramophone in peace...",
                action: "close"
            }
        ]
    }
};