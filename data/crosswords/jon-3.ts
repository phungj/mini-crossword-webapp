import {CrosswordData} from "@/data/crosswords";

export const CROSSWORD_DATA: CrosswordData = {
    solutions: [
        {
            crossword: {
                id: 'crosswords/jon/3',
                number: 3,
                name: 'Jon\'s Mini Crossword 3',
                creator: {
                    name: 'Jon Phung',
                    webUrl: 'https://github.com/phungj',
                },
                date: 1789189200000,
                webPublicationDate: 1789189200000,
                entries: [
                    {
                        id: '1-across',
                        number: 1,
                        humanNumber: '1',
                        clue: "Fruit slammed on Ryan's driveway",
                        direction: 'across',
                        length: 4,
                        group: ['1-across'],
                        position: { x: 0, y: 0 },
                        separatorLocations: {},
                        solution: 'LIME',
                    },
                    {
                        id: '5-across',
                        number: 5,
                        humanNumber: '5',
                        clue: 'Perfect',
                        direction: 'across',
                        length: 5,
                        group: ['5-across'],
                        position: { x: 0, y: 1 },
                        separatorLocations: {},
                        solution: 'IDEAL',
                    },
                    {
                        id: '7-across',
                        number: 7,
                        humanNumber: '7',
                        clue: 'Same, or a Pokémon that can mimic other things',
                        direction: 'across',
                        length: 5,
                        group: ['7-across'],
                        position: {x: 0, y: 2},
                        separatorLocations: {},
                        solution: 'DITTO'
                    },
                    {
                        id: '8-across',
                        number: 8,
                        humanNumber: '8',
                        clue: 'Tender spots',
                        direction: 'across',
                        length: 5,
                        group: ['8-across'],
                        position: {x: 0, y: 3},
                        separatorLocations: {},
                        solution: "SORES"
                    },
                    {
                        id: '9-across',
                        number: 9,
                        humanNumber: "9",
                        clue: "Manner of speaking",
                        direction: 'across',
                        length: 4,
                        group: ['9-across'],
                        position: {x: 1, y: 4},
                        separatorLocations: {},
                        solution: "TONE"
                    },
                    {
                        id: '1-down',
                        number: 1,
                        humanNumber: '1',
                        clue: 'Jar tops, or data structures used for managing load sources',
                        direction: 'down',
                        length: 4,
                        group: ['1-down'],
                        position: { x: 0, y: 0 },
                        separatorLocations: {},
                        solution: 'LIDS',
                    },
                    {
                        id: '2-down',
                        number: 2,
                        humanNumber: '2',
                        clue: 'No exemplar of erudition',
                        direction: 'down',
                        length: 5,
                        group: ['2-down'],
                        position: {x: 1, y: 0},
                        separatorLocations: {},
                        solution: 'IDIOT'
                    },
                    {
                        id: '3-down',
                        number: 3,
                        humanNumber: '3',
                        clue: 'Paris subway',
                        direction: 'down',
                        length: 5,
                        group: ['3-down'],
                        position: { x: 2, y: 0 },
                        separatorLocations: {},
                        solution: 'METRO',
                    },
                    {
                        id: '4-down',
                        number: 4,
                        humanNumber: '4',
                        clue: 'Demolished',
                        direction: 'down',
                        length: 5,
                        group: ['4-down'],
                        position: {x: 3, y: 0,},
                        separatorLocations: {},
                        solution: 'EATEN',
                    },
                    {
                        id: '5-down',
                        number: 5,
                        humanNumber: '5',
                        clue: 'Misplace',
                        direction: 'down',
                        length: 4,
                        group: ['5-down'],
                        position: {x: 4, y: 1},
                        separatorLocations: {},
                        solution: "LOSE"
                    }
                ],
                solutionAvailable: true,
                dateSolutionAvailable: 1789189200000,
                dimensions: {
                    cols: 5,
                    rows: 5,
                },
                crosswordType: 'mini',
                pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
            },
            solution: [
                [
                    "L",
                    "I",
                    "D",
                    "S",
                    ""
                ],
                [
                    "I",
                    "D",
                    "I",
                    "O",
                    "T"
                ],
                [
                    "M",
                    "E",
                    "T",
                    "R",
                    "O"
                ],
                [
                    "E",
                    "A",
                    "T",
                    "E",
                    "N"
                ],
                [
                    "",
                    "L",
                    "O",
                    "S",
                    "E"
                ]
            ]
        }
    ]
};