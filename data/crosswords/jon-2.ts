import {CAPICrossword} from "@/data/crosswordType";

export const CROSSWORD: CAPICrossword = {
  id: 'crosswords/jon/2',
  number: 1,
  name: 'Jon\'s 5x5 Mini Crossword 2',
  creator: {
    name: 'Jon Phung',
    webUrl: 'https://github.com/phungj',
  },
  date: 1714539600000,
  webPublicationDate: 1714539600000,
  entries: [
    {
      id: '1-across',
      number: 1,
      humanNumber: '1',
      clue: 'Fencing tool to laypeople',
      direction: 'across',
      length: 5,
      group: ['1-across'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'SWORD',
    },
    {
      id: '6-across',
      number: 6,
      humanNumber: '6',
      clue: 'Feudal estate',
      direction: 'across',
      length: 5,
      group: ['6-across'],
      position: { x: 0, y: 1 },
      separatorLocations: {},
      solution: 'MANOR',
    },
    {
      id: '7-across',
      number: 7,
      humanNumber: '7',
      clue: 'Become apparent',
      direction: 'across',
      length: 5,
      group: ['7-across'],
      position: {x: 0, y: 2},
      separatorLocations: {},
      solution: 'ARISE'
    },
    {
      id: '8-across',
      number: 8,
      humanNumber: '8',
      clue: 'Nickname for Cecilia (Possessive)',
      direction: 'across',
      length: 5,
      group: ['8-across'],
      position: {x: 0, y: 3},
      separatorLocations: {},
      solution: "CICIS"
    },
    {
      id: '9-across',
      number: 9,
      humanNumber: "9",
      clue: "Leg joints",
      direction: 'across',
      length: 5,
      group: ['9-across'],
      position: {x: 0, y: 4},
      separatorLocations: {},
      solution: "KNEES"
    },
    {
      id: '1-down',
      number: 1,
      humanNumber: '1',
      clue: 'Strike',
      direction: 'down',
      length: 5,
      group: ['1-down'],
      position: { x: 0, y: 0 },
      separatorLocations: {},
      solution: 'SMACK',
    },
    {
      id: '2-down',
      number: 2,
      humanNumber: '2',
      clue: 'Phrase referring to events in places like Ukraine',
      direction: 'down',
      length: 5,
      group: ['2-down'],
      position: {x: 1, y: 0},
      separatorLocations: {},
      solution: 'WARIN'
    },
    {
      id: '3-down',
      number: 3,
      humanNumber: '3',
      clue: 'Chilling',
      direction: 'down',
      length: 5,
      group: ['3-down'],
      position: { x: 2, y: 0 },
      separatorLocations: {},
      solution: 'ONICE',
    },
    {
      id: '4-down',
      number: 4,
      humanNumber: '4',
      clue: 'WWII riveter',
      direction: 'down',
      length: 5,
      group: ['4-down'],
      position: {x: 3, y: 0,},
      separatorLocations: {},
      solution: 'ROSIE',
    },
    {
      id: '5-down',
      number: 5,
      humanNumber: '5',
      clue: 'Attire',
      direction: 'down',
      length: 5,
      group: ['5-down'],
      position: {x: 4, y: 0},
      separatorLocations: {},
      solution: "DRESS"
    }
  ],
  solutionAvailable: true,
  dateSolutionAvailable: 1714539600000,
  dimensions: {
    cols: 5,
    rows: 5,
  },
  crosswordType: 'mini',
  pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
};

export const SOLUTION = [
  [
    "S",
    "M",
    "A",
    "C",
    "K"
  ],
  [
    "W",
    "A",
    "R",
    "I",
    "N"
  ],
  [
    "O",
    "N",
    "I",
    "C",
    "E"
  ],
  [
    "R",
    "O",
    "S",
    "I",
    "E"
  ],
  [
    "D",
    "R",
    "E",
    "S",
    "S"
  ]
] as const;