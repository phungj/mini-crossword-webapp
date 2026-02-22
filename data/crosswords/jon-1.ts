import {CAPICrossword} from "@/data/crosswordType";

export const CROSSWORD: CAPICrossword = {
  id: 'crosswords/jon/1',
  number: 1,
  name: 'Jon\'s 5x5 Mini Crossword 1',
  creator: {
    name: 'Jon Phung',
    webUrl: 'https://github.com/phungj',
  },
  date: 1714453200000,
  webPublicationDate: 1714453200000,
  entries: [
    {
      id: '1-across',
      number: 1,
      humanNumber: '1',
      clue: 'Most people are this',
      direction: 'across',
      length: 5,
      group: ['1-across'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'ASIAN',
    },
    {
      id: '6-across',
      number: 6,
      humanNumber: '6',
      clue: 'Italian grandmother',
      direction: 'across',
      length: 5,
      group: ['6-across'],
      position: { x: 0, y: 1 },
      separatorLocations: {},
      solution: 'NONNA',
    },
    {
      id: '7-across',
      number: 7,
      humanNumber: '7',
      clue: 'Wedding VIP',
      direction: 'across',
      length: 5,
      group: ['7-across'],
      position: {x: 0, y: 2},
      separatorLocations: {},
      solution: 'GROOM'
    },
    {
      id: '8-across',
      number: 8,
      humanNumber: '8',
      clue: 'Perceive',
      direction: 'across',
      length: 5,
      group: ['8-across'],
      position: {x: 0, y: 3},
      separatorLocations: {},
      solution: "SENSE"
    },
    {
      id: '9-across',
      number: 9,
      humanNumber: "9",
      clue: "Marijuana euphemism",
      direction: 'across',
      length: 5,
      group: ['9-across'],
      position: {x: 0, y: 4},
      separatorLocations: {},
      solution: "TREES"
    },
    {
      id: '1-down',
      number: 1,
      humanNumber: '1',
      clue: 'Teen problem',
      direction: 'down',
      length: 5,
      group: ['1-down'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'ANGST',
    },
    {
      id: '2-down',
      number: 2,
      humanNumber: '2',
      clue: 'More achy',
      direction: 'down',
      length: 5,
      group: ['2-down'],
      position: {x: 1, y: 0},
      separatorLocations: {},
      solution: 'SORER'
    },
    {
      id: '3-down',
      number: 3,
      humanNumber: '3',
      clue: 'Hole-__-____',
      direction: 'down',
      length: 5,
      group: ['3-down'],
      position: { x: 2, y: 0 },
      separatorLocations: {
        '-': [0, 2],
      },
      solution: 'INONE',
    },
    {
      id: '4-down',
      number: 4,
      humanNumber: '4',
      clue: 'Close horse racing victory',
      direction: 'down',
      length: 5,
      group: ['4-down'],
      position: {x: 3, y: 0,},
      separatorLocations: {},
      solution: 'ANOSE',
    },
    {
      id: '5-down',
      number: 5,
      humanNumber: '5',
      clue: 'Identifies people',
      direction: 'down',
      length: 5,
      group: ['5-down'],
      position: {x: 4, y: 0},
      separatorLocations: {},
      solution: "NAMES"
    }
  ],
  solutionAvailable: true,
  dateSolutionAvailable: 1714453200000,
  dimensions: {
    cols: 5,
    rows: 5,
  },
  crosswordType: 'mini',
  pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
};

export const SOLUTION = [
  [
    "A",
    "N",
    "G",
    "S",
    "T"
  ],
  [
    "S",
    "O",
    "R",
    "E",
    "R"
  ],
  [
    "I",
    "N",
    "O",
    "N",
    "E"
  ],
  [
    "A",
    "N",
    "O",
    "S",
    "E"
  ],
  [
    "N",
    "A",
    "M",
    "E",
    "S"
  ]
] as const;