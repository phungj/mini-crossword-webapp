import {CAPICrossword} from "@/data/crosswordType";

export const CROSSWORD: CAPICrossword = {
  id: 'crosswords/ibm/1',
  number: 1,
  name: 'IBM Mini Crossword 1',
  creator: {
    name: 'Jon Phung',
    webUrl: 'https://github.com/phungj',
  },
  date: 1772344800000,
  webPublicationDate: 1772344800000,
  entries: [
    {
      id: '1-across',
      number: 1,
      humanNumber: '1',
      clue: 'Formerly known as AS/400',
      direction: 'across',
      length: 4,
      group: ['1-across'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'IBMI',
    },
    {
      id: '5-across',
      number: 5,
      humanNumber: '5',
      clue: 'Step through code',
      direction: 'across',
      length: 5,
      group: ['5-across'],
      position: {x: 0, y: 1},
      separatorLocations: {},
      solution: 'TRACE'
    },
    {
      id: '7-across',
      number: 7,
      humanNumber: '7',
      clue: 'Chocolate constituent',
      direction: 'across',
      length: 5,
      group: ['7-across'],
      position: { x: 0, y: 2 },
      separatorLocations: {},
      solution: 'COCOA',
    },
    {
      id: '8-across',
      number: 8,
      humanNumber: '8',
      clue: 'Band section',
      direction: 'across',
      length: 5,
      group: ['8-across'],
      position: {x: 0, y: 3},
      separatorLocations: {},
      solution: 'HORNS'
    },
    {
      id: '9-across',
      number: 9,
      humanNumber: '9',
      clue: 'Greatest',
      direction: 'across',
      length: 4,
      group: ['9-across'],
      position: {x: 1, y: 4},
      separatorLocations: {},
      solution: "MOST"
    },
    {
      id: '1-down',
      number: 1,
      humanNumber: '1',
      clue: 'Craving',
      direction: 'down',
      length: 4,
      group: ['1-down'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'ITCH',
    },
    {
      id: '2-down',
      number: 2,
      humanNumber: '2',
      clue: 'Used to sweep',
      direction: 'down',
      length: 5,
      group: ['2-down'],
      position: {x: 1, y: 0},
      separatorLocations: {},
      solution: 'BROOM'
    },
    {
      id: '3-down',
      number: 3,
      humanNumber: '3',
      clue: 'Computer shortcut',
      direction: 'down',
      length: 5,
      group: ['3-down'],
      position: { x: 2, y: 0 },
      separatorLocations: {},
      solution: 'MACRO',
    },
    {
      id: '4-down',
      number: 4,
      humanNumber: '4',
      clue: 'Symbols',
      direction: 'down',
      length: 5,
      group: ['4-down'],
      position: {x: 3, y: 0},
      separatorLocations: {},
      solution: 'ICONS',
    },
    {
      id: '6-down',
      number: 6,
      humanNumber: '6',
      clue: 'The first wind in mahjong',
      direction: 'down',
      length: 4,
      group: ['6-down'],
      position: {x: 4, y: 1},
      separatorLocations: {},
      solution: "EAST"
    }
  ],
  solutionAvailable: true,
  dateSolutionAvailable: 1772344800000,
  dimensions: {
    cols: 5,
    rows: 5,
  },
  crosswordType: 'mini',
  pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
};

export const SOLUTION = [
  [
    "I",
    "T",
    "C",
    "H",
    ""
  ],
  [
    "B",
    "R",
    "O",
    "O",
    "M"
  ],
  [
    "M",
    "A",
    "C",
    "R",
    "O"
  ],
  [
    "I",
    "C",
    "O",
    "N",
    "S"
  ],
  [
    "",
    "E",
    "A",
    "S",
    "T"
  ]
] as const;