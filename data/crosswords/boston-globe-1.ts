import {CAPICrossword} from "@/data/crosswordType";

export const CROSSWORD: CAPICrossword = {
    id: 'crosswords/boston-globe/1',
    number: 1,
    name: 'Boston Globe 2/26/26 Mini Crossword',
    creator: {
        name: 'Sowmya Ramkumar',
        webUrl: 'https://www.bostonglobe.com/games/mini-crossword/',
    },
    date: 1772085600000,
    webPublicationDate: 1772085600000,
    entries: [
        {
            id: '1-across',
            number: 1,
            humanNumber: '1',
            clue: 'Workout unit, familiarly',
            direction: 'across',
            length: 3,
            group: ['1-across'],
            position: { x: 2, y: 0 },
            separatorLocations: {},
            solution: 'REP',
        },
        {
            id: '4-across',
            number: 4,
            humanNumber: '4',
            clue: 'Oil-yielding rock',
            direction: 'across',
            length: 5,
            group: ['4-across'],
            position: {x: 0, y: 1},
            separatorLocations: {},
            solution: 'SHALE'
        },
        {
            id: '6-across',
            number: 6,
            humanNumber: '6',
            clue: 'Lounged (around)',
            direction: 'across',
            length: 5,
            group: ['6-across'],
            position: { x: 0, y: 2 },
            separatorLocations: {},
            solution: 'LAZED',
        },
        {
            id: '7-across',
            number: 7,
            humanNumber: '7',
            clue: 'Smell of delicious food',
            direction: 'across',
            length: 5,
            group: ['7-across'],
            position: {x: 0, y: 3},
            separatorLocations: {},
            solution: 'AROMA'
        },
        {
            id: '8-across',
            number: 8,
            humanNumber: '8',
            clue: 'Jeopardy',
            direction: 'across',
            length: 5,
            group: ['8-across'],
            position: {x: 0, y: 4},
            separatorLocations: {},
            solution: "PERIL"
        },
        {
            id: '1-down',
            number: 1,
            humanNumber: '1',
            clue: 'Gillette product',
            direction: 'down',
            length: 5,
            group: ['1-down'],
            position: { x: 2, y: 0 },
            separatorLocations: {},
            solution: 'RAZOR',
        },
        {
            id: '2-down',
            number: 2,
            humanNumber: '2',
            clue: 'Lacquer ingredient',
            direction: 'down',
            length: 5,
            group: ['2-down'],
            position: {x: 3, y: 0},
            separatorLocations: {},
            solution: 'ELEMI'
        },
        {
            id: '3-down',
            number: 3,
            humanNumber: '3',
            clue: 'Part of a bicycle',
            direction: 'down',
            length: 5,
            group: ['3-down'],
            position: { x: 4, y: 0 },
            separatorLocations: {},
            solution: 'PEDAL',
        },
        {
            id: '4-down',
            number: 4,
            humanNumber: '4',
            clue: 'High-five, e.g.',
            direction: 'down',
            length: 4,
            group: ['4-down'],
            position: {x: 0, y: 1,},
            separatorLocations: {},
            solution: 'SLAP',
        },
        {
            id: '5-down',
            number: 5,
            humanNumber: '5',
            clue: 'Fabled animal beaten by a tortoise',
            direction: 'down',
            length: 4,
            group: ['5-down'],
            position: {x: 1, y: 1},
            separatorLocations: {},
            solution: "HARE"
        }
    ],
    solutionAvailable: true,
    dateSolutionAvailable: 1772085600000,
    dimensions: {
        cols: 5,
        rows: 5,
    },
    crosswordType: 'mini',
    pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
};

export const SOLUTION = [
    [
        "",
        "S",
        "L",
        "A",
        "P"
    ],
    [
        "",
        "H",
        "A",
        "R",
        "E"
    ],
    [
        "R",
        "A",
        "Z",
        "O",
        "R"
    ],
    [
        "E",
        "L",
        "E",
        "M",
        "I"
    ],
    [
        "P",
        "E",
        "D",
        "A",
        "L"
    ]
] as const;