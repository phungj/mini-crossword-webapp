import {CAPICrossword} from "@/data/crosswordType";

export const CROSSWORD: CAPICrossword = {
    id: 'crosswords/boston-globe/2',
    number: 1,
    name: 'Boston Globe 2/28/26 Mini Crossword',
    creator: {
        name: 'Sowmya Ramkumar',
        webUrl: 'https://www.bostonglobe.com/games/mini-crossword/',
    },
    date: 1772258400000,
    webPublicationDate: 1772258400000,
    entries: [
        {
            id: '1-across',
            number: 1,
            humanNumber: '1',
            clue: 'Musician\'s booking',
            direction: 'across',
            length: 3,
            group: ['1-across'],
            position: { x: 1, y: 0 },
            separatorLocations: {},
            solution: 'GIG',
        },
        {
            id: '4-across',
            number: 4,
            humanNumber: '4',
            clue: 'Make void',
            direction: 'across',
            length: 5,
            group: ['4-across'],
            position: {x: 0, y: 1},
            separatorLocations: {},
            solution: 'ANNUL'
        },
        {
            id: '6-across',
            number: 6,
            humanNumber: '6',
            clue: '___ Drive (Beverly Hills street)',
            direction: 'across',
            length: 5,
            group: ['6-across'],
            position: { x: 0, y: 2 },
            separatorLocations: {},
            solution: 'RODEO',
        },
        {
            id: '7-across',
            number: 7,
            humanNumber: '7',
            clue: 'Out of kilter',
            direction: 'across',
            length: 5,
            group: ['7-across'],
            position: {x: 0, y: 3},
            separatorLocations: {},
            solution: 'AMISS'
        },
        {
            id: '8-across',
            number: 8,
            humanNumber: '8',
            clue: 'Beauty and the ___',
            direction: 'across',
            length: 5,
            group: ['8-across'],
            position: {x: 0, y: 4},
            separatorLocations: {},
            solution: "BEAST"
        },
        {
            id: '1-down',
            number: 1,
            humanNumber: '1',
            clue: 'Garden decoration',
            direction: 'down',
            length: 5,
            group: ['1-down'],
            position: { x: 1, y: 0 },
            separatorLocations: {},
            solution: 'GNOME',
        },
        {
            id: '2-down',
            number: 2,
            humanNumber: '2',
            clue: 'Birthplace of Google C.E.O. Sundar Pichai',
            direction: 'down',
            length: 5,
            group: ['2-down'],
            position: {x: 2, y: 0},
            separatorLocations: {},
            solution: 'INDIA'
        },
        {
            id: '3-down',
            number: 3,
            humanNumber: '3',
            clue: 'Speculate',
            direction: 'down',
            length: 5,
            group: ['3-down'],
            position: { x: 3, y: 0 },
            separatorLocations: {},
            solution: 'GUESS',
        },
        {
            id: '4-down',
            number: 4,
            humanNumber: '4',
            clue: 'Part of U.A.E.',
            direction: 'down',
            length: 4,
            group: ['4-down'],
            position: {x: 0, y: 1,},
            separatorLocations: {},
            solution: 'ARAB',
        },
        {
            id: '5-down',
            number: 5,
            humanNumber: '5',
            clue: 'Clueless',
            direction: 'down',
            length: 4,
            group: ['5-down'],
            position: {x: 4, y: 1},
            separatorLocations: {},
            solution: "LOST"
        }
    ],
    solutionAvailable: true,
    dateSolutionAvailable: 1772258400000,
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
        "A",
        "R",
        "A",
        "B"
    ],
    [
        "G",
        "N",
        "O",
        "M",
        "E"
    ],
    [
        "I",
        "N",
        "D",
        "I",
        "A"
    ],
    [
        "G",
        "U",
        "E",
        "S",
        "S"
    ],
    [
        "",
        "L",
        "O",
        "S",
        "T"
    ]
] as const;