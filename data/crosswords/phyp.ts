import {CAPICrossword} from "@/data/crosswordType";

export const CROSSWORD: CAPICrossword = {
  id: 'crosswords/ibm/2',
  number: 1,
  name: 'IBM Mini Crossword 2',
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
      clue: 'Internet protocol',
      direction: 'across',
      length: 4,
      group: ['1-across'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'HTTP',
    },
    {
      id: '5-across',
      number: 5,
      humanNumber: '5',
      clue: 'Recursive data structures',
      direction: 'across',
      length: 5,
      group: ['5-across'],
      position: {x: 0, y: 1},
      separatorLocations: {},
      solution: 'TREES'
    },
    {
      id: '7-across',
      number: 7,
      humanNumber: '7',
      clue: 'Year constituent',
      direction: 'across',
      length: 5,
      group: ['7-across'],
      position: { x: 0, y: 2 },
      separatorLocations: {},
      solution: 'MONTH',
    },
    {
      id: '8-across',
      number: 8,
      humanNumber: '8',
      clue: 'Short for gambling game',
      direction: 'across',
      length: 5,
      group: ['8-across'],
      position: {x: 0, y: 3},
      separatorLocations: {},
      solution: 'LOTTO'
    },
    {
      id: '9-across',
      number: 9,
      humanNumber: '9',
      clue: 'Don\'t believe the hype surrounding Power?',
      direction: 'across',
      length: 4,
      group: ['9-across'],
      position: {x: 1, y: 4},
      separatorLocations: {},
      solution: "PHYP"
    },
    {
      id: '1-down',
      number: 1,
      humanNumber: '1',
      clue: 'Internet file format',
      direction: 'down',
      length: 4,
      group: ['1-down'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'HTML',
    },
    {
      id: '2-down',
      number: 2,
      humanNumber: '2',
      clue: 'Scout group',
      direction: 'down',
      length: 5,
      group: ['2-down'],
      position: {x: 1, y: 0},
      separatorLocations: {},
      solution: 'TROOP'
    },
    {
      id: '3-down',
      number: 3,
      humanNumber: '3',
      clue: 'Last Commandment',
      direction: 'down',
      length: 5,
      group: ['3-down'],
      position: { x: 2, y: 0 },
      separatorLocations: {},
      solution: 'TENTH',
    },
    {
      id: '4-down',
      number: 4,
      humanNumber: '4',
      clue: 'Trivial',
      direction: 'down',
      length: 5,
      group: ['4-down'],
      position: {x: 3, y: 0},
      separatorLocations: {},
      solution: 'PETTY',
    },
    {
      id: '6-down',
      number: 6,
      humanNumber: '6',
      clue: 'Store',
      direction: 'down',
      length: 4,
      group: ['6-down'],
      position: {x: 4, y: 1},
      separatorLocations: {},
      solution: "SHOP"
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
    "H",
    "T",
    "M",
    "L",
    ""
  ],
  [
    "T",
    "R",
    "O",
    "O",
    "P"
  ],
  [
    "T",
    "E",
    "N",
    "T",
    "H"
  ],
  [
    "P",
    "E",
    "T",
    "T",
    "Y"
  ],
  [
    "",
    "S",
    "H",
    "O",
    "P"
  ]
] as const;