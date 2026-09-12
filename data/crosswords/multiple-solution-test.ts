import {CrosswordData} from "@/data/crosswords";

export const CROSSWORD_DATA: CrosswordData = {
    solutions: [
        {
            solutionID: 'crosswords/example/2-1',
            crossword: {
                    id: 'crosswords/example/2',
                    number: 2,
                    name: 'Multiple Solution Test Crossword',
                    creator: {
                        name: 'Jon Phung',
                        webUrl: 'https://github.com/phungj',
                    },
                    date: 1789189200000,
                    webPublicationDate: 1789189200000,
                    entries: [
                        {
                            id: '1-down',
                            number: 1,
                            humanNumber: '1',
                            clue: 'Black halloween animal',
                            direction: 'down',
                            length: 3,
                            group: ['1-down'],
                            position: { x: 0, y: 0 },
                            separatorLocations: {},
                            solution: 'BAT',
                        },
                        {
                            id: '2-across',
                            number: 2,
                            humanNumber: '2',
                            clue: 'Indent key',
                            direction: 'across',
                            length: 3,
                            group: ['2-across'],
                            position: {x: 0, y: 2},
                            separatorLocations: {},
                            solution: 'TAB'
                        },
                    ],
                    solutionAvailable: true,
                    dateSolutionAvailable: 1789189200000,
                    dimensions: {
                        cols: 3,
                        rows: 3,
                    },
                    crosswordType: 'mini',
                    pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
                },
            solution: [
                ['B', 'A', 'T'],
                ['', '', 'A'],
                ['', '', 'B'],
            ]
        },
        {
            solutionID: 'crosswords/example/2-2',
            crossword: {
                id: 'crosswords/example/2',
                number: 2,
                name: 'Multiple Solution Test Crossword',
                creator: {
                    name: 'Jon Phung',
                    webUrl: 'https://github.com/phungj',
                },
                date: 1789189200000,
                webPublicationDate: 1789189200000,
                entries: [
                    {
                        id: '1-down',
                        number: 1,
                        humanNumber: '1',
                        clue: 'Black halloween animal',
                        direction: 'down',
                        length: 3,
                        group: ['1-down'],
                        position: { x: 0, y: 0 },
                        separatorLocations: {},
                        solution: 'CAT',
                    },
                    {
                        id: '2-across',
                        number: 2,
                        humanNumber: '2',
                        clue: 'Indent key',
                        direction: 'across',
                        length: 3,
                        group: ['2-across'],
                        position: {x: 0, y: 2},
                        separatorLocations: {},
                        solution: 'TAB'
                    },
                ],
                solutionAvailable: true,
                dateSolutionAvailable: 1789189200000,
                dimensions: {
                    cols: 3,
                    rows: 3,
                },
                crosswordType: 'mini',
                pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
            },
            solution: [
                ['C', 'A', 'T'],
                ['', '', 'A'],
                ['', '', 'B']
            ]
        }
    ]
}