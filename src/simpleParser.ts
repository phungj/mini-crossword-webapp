import { writeFileSync } from 'node:fs';

type Direction = 'across' | 'down';

type Clue = {
    number: number;
    clue: string;
    direction: Direction;
};

//
// ============================================================
// INPUT
// ============================================================
//

// Each line is one row.
//
// # = blocked cell
// A-Z = solution letter
//
// Example:
//
// C##
// A##
// TAB
//
const GRID = `
#####H####
#####OCTAL
MYFINGERS#
#####BLEAK
#####OLAPA
#####M#T#N
#####B####
`;

// Put clues here using the crossword number.
//
// The converter will automatically determine which numbers
// correspond to which entries.
//
const CLUES: Record<string, string> = {
    '1-down': 'A 3740 disaster',
    '2-across': 'The numerical system used to write every number within this puzzle\'s clues',
    '3-down': 'Estimated to be around 664,435,325,760,000 of these in the human body (Singular)',
    '4-down': 'Trick or',
    '5-down': 'When Jon probably wanted these puzzles to be completed',
    '6-across': 'Something one would declare to bite off whole hog mode (2 words)',
    '7-across': 'How the chance of getting our share of GDP is looking this year',
    '8-down': 'The three-letter abbreviation for the 42nd state',
    '9-across': 'The goddess of the moon in Maasai mythology (practiced in Kenya and Tanzania) and a genus of moths found throughout Africa'
};

const TITLE = 'Emily\'s Mini Crossword';
const CREATOR_NAME = 'Emily M.';
const CREATOR_URL = 'https://emily-mcnett.github.io';
const CROSSWORD_ID = 'crosswords/emily/1';

//
// ============================================================
// PARSE GRID
// ============================================================
//

function parseGrid(input: string): string[][] {
    const rows = input
        .trim()
        .split(/\r?\n/)
        .map(row => row.trim());

    if (rows.length === 0) {
        throw new Error('Grid is empty.');
    }

    const width = rows[0].length;

    if (width === 0) {
        throw new Error('Grid contains an empty row.');
    }

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].length !== width) {
            throw new Error(
                `Grid is not rectangular: row ${i + 1} has ` +
                `${rows[i].length} columns, expected ${width}.`
            );
        }

        for (const char of rows[i]) {
            if (char !== '#' && !/[A-Za-z]/.test(char)) {
                throw new Error(
                    `Invalid character "${char}" in row ${i + 1}. ` +
                    `Use letters or #.`
                );
            }
        }
    }

    return rows.map(row =>
        [...row].map(char =>
            char === '#' ? '' : char.toUpperCase()
        )
    );
}

function isOpen(
    grid: string[][],
    x: number,
    y: number
): boolean {
    return (
        y >= 0 &&
        y < grid.length &&
        x >= 0 &&
        x < grid[0].length &&
        grid[y][x] !== ''
    );
}

//
// ============================================================
// DISCOVER ENTRIES
// ============================================================
//

type Entry = {
    number: number;
    direction: Direction;
    x: number;
    y: number;
    solution: string;
};

function discoverEntries(
    grid: string[][]
): Entry[] {
    const entries: Entry[] = [];

    const rows = grid.length;
    const cols = grid[0].length;

    let number = 0;

    for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
            if (!isOpen(grid, x, y)) {
                continue;
            }

            const startsAcross =
                x === 0 ||
                !isOpen(grid, x - 1, y);

            const startsDown =
                y === 0 ||
                !isOpen(grid, x, y - 1);

            if (!startsAcross && !startsDown) {
                continue;
            }

            number++;

            if (startsAcross) {
                let solution = '';

                for (let cx = x; cx < cols; cx++) {
                    if (!isOpen(grid, cx, y)) {
                        break;
                    }

                    solution += grid[y][cx];
                }

                // A one-cell word isn't normally an entry.
                if (solution.length > 1) {
                    entries.push({
                        number,
                        direction: 'across',
                        x,
                        y,
                        solution,
                    });
                }
            }

            if (startsDown) {
                let solution = '';

                for (let cy = y; cy < rows; cy++) {
                    if (!isOpen(grid, x, cy)) {
                        break;
                    }

                    solution += grid[cy][x];
                }

                if (solution.length > 1) {
                    entries.push({
                        number,
                        direction: 'down',
                        x,
                        y,
                        solution,
                    });
                }
            }
        }
    }

    return entries;
}

//
// ============================================================
// BUILD CROSSWORD ENTRIES
// ============================================================
//

function buildCrosswordEntries(
    entries: Entry[]
) {
    return entries.map(entry => {
        const id = `${entry.number}-${entry.direction}`;

        return {
            id,
            number: entry.number,
            humanNumber: String(entry.number),
            clue: CLUES[id] ?? '',
            direction: entry.direction,
            length: entry.solution.length,
            group: [id],
            position: {
                x: entry.x,
                y: entry.y,
            },
            separatorLocations: {},
            solution: entry.solution,
        };
    });
}

//
// ============================================================
// BUILD SOLUTION
// ============================================================
//

function buildSolution(
    grid: string[][]
): string[][] {
    const sourceRows = grid.length;
    const sourceCols = grid[0].length;

    //
    // Your CrosswordData format uses the transposed
    // orientation relative to the little grid above.
    //
    const solution = Array.from(
        { length: sourceCols },
        () => Array(sourceRows).fill('')
    );

    for (let y = 0; y < sourceRows; y++) {
        for (let x = 0; x < sourceCols; x++) {
            solution[x][y] = grid[y][x];
        }
    }

    return solution;
}

//
// ============================================================
// OUTPUT
// ============================================================
//

function generate() {
    const grid = parseGrid(GRID);
    const entries = discoverEntries(grid);

    const crosswordEntries =
        buildCrosswordEntries(entries);

    const solution = buildSolution(grid);

    const crossword = {
        id: CROSSWORD_ID,
        number: 1,
        name: TITLE,

        creator: {
            name: CREATOR_NAME,
            webUrl: CREATOR_URL,
        },

        date: 1790830800000,
        webPublicationDate: 1790830800000,

        entries: crosswordEntries,

        solutionAvailable: true,
        dateSolutionAvailable: 1790830800000,

        dimensions: {
            cols: grid.length,
            rows: grid[0].length,
        },

        crosswordType: 'mini',
        pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
    };

    const result = {
        solutions: [
            {
                crossword,
                solution,
            },
        ],
    };

    const output =
        `import { CrosswordData } from "@/data/crosswords";\n\n` +
        `export const CROSSWORD_DATA: CrosswordData = ` +
        `${JSON.stringify(result, null, 2)};\n`;

    writeFileSync(
        'emily.ts',
        output,
        'utf8'
    );

    console.log(
        `Generated CROSSWORD_DATA.ts`
    );

    console.log(
        `${grid.length} × ${grid[0].length} grid`
    );

    console.log(
        `${crosswordEntries.length} entries`
    );
}

generate();