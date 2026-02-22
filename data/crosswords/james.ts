import {CAPICrossword} from "@/data/crosswordType";

export const CROSSWORD: CAPICrossword = {
  id: 'crosswords/james/1',
  number: 1,
  name: 'A Friend\'s 5x5 Mini Crossword',
  creator: {
    name: 'James',
    webUrl: '',
  },
  date: 1714453200000,
  webPublicationDate: 1714453200000,
  entries: [
    {
      id: '1-across',
      number: 1,
      humanNumber: '1',
      clue: 'A rounded thickly curled hairdo',
      direction: 'across',
      length: 4,
      group: ['1-across'],
      position: { x: 1, y: 0 },
      separatorLocations: {},
      solution: 'AFRO',
    },
    {
      id: '5-across',
      number: 5,
      humanNumber: '5',
      clue: 'Old-fashioned term for boyfriend',
      direction: 'across',
      length: 4,
      group: ['5-across'],
      position: { x: 1, y: 1 },
      separatorLocations: {},
      solution: 'BEAU',
    },
    {
      id: '6-across',
      number: 6,
      humanNumber: '6',
      clue: 'Cigarette that contains marijuana',
      direction: 'across',
      length: 5,
      group: ['6-across'],
      position: {x: 0, y: 2},
      separatorLocations: {},
      solution: 'JOINT'
    },
    {
      id: '7-across',
      number: 7,
      humanNumber: '7',
      clue: 'Sudden thrust of the body',
      direction: 'across',
      length: 5,
      group: ['7-across', '2-down'],
      position: {x: 0, y: 3},
      separatorLocations: {},
      solution: 'LUNGE'
    },
    {
      id: '8-across',
      number: 8,
      humanNumber: '8',
      clue: 'Carnivorous aquatic mammal, distant cousin of badgers, weasels, and wolverines',
      direction: 'across',
      length: 5,
      group: ['8-across'],
      position: {x: 0, y: 4},
      separatorLocations: {},
      solution: "OTTER"
    },
    {
      id: '1-down',
      number: 1,
      humanNumber: '1',
      clue: 'Adverb meaning “reasonably close to”',
      direction: 'down',
      length: 5,
      group: ['1-down'],
      position: { x: 1, y: 0 },
      separatorLocations: {},
      solution: 'ABOUT',
    },
    {
      id: '2-down',
      number: 2,
      humanNumber: '2',
      clue: 'A deceptive and pretend attack, often used in conjunction with 7 ACROSS',
      direction: 'down',
      length: 5,
      group: ['2-down', '7-across'],
      position: {x: 2, y: 0},
      separatorLocations: {},
      solution: 'FEINT'
    },
    {
      id: '3-down',
      number: 3,
      humanNumber: '3',
      clue: 'The difference between the largest and smallest values in a statistical distribution',
      direction: 'down',
      length: 5,
      group: ['3-down'],
      position: { x: 3, y: 0 },
      separatorLocations: {},
      solution: 'RANGE',
    },
    {
      id: '4-down',
      number: 4,
      humanNumber: '4',
      clue: 'Not in the center; further away',
      direction: 'down',
      length: 5,
      group: ['4-down'],
      position: {x: 4, y: 0,},
      separatorLocations: {},
      solution: 'OUTER',
    },
    {
      id: '6-down',
      number: 6,
      humanNumber: '6',
      clue: 'Nickname of massively influential American entertainer of the 1990s and 2000s',
      direction: 'down',
      length: 3,
      group: ['5-down'],
      position: {x: 0, y: 2},
      separatorLocations: {},
      solution: "JLO"
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
    "",
    "",
    "J",
    "L",
    "O"
  ],
  [
    "A",
    "B",
    "O",
    "U",
    "T"
  ],
  [
    "F",
    "E",
    "I",
    "N",
    "T"
  ],
  [
    "R",
    "A",
    "N",
    "G",
    "E"
  ],
  [
    "O",
    "U",
    "T",
    "E",
    "R"
  ]
] as const;