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
##############F#########
##############R#########
#############YIP########
##############S#########
##############B#########
######BOOF####E#########
#########L####E#########
########PARKING#########
####P####P####O#########
####I####D#M##LOREREVIEW
####C####O#I##F###U#####
####K####O#N######G#####
####L####D#I#U##########
HAMMERSCHLAGEN##########
A####Y###E#O#I##########
LIMINAL##S#L#O##########
F####N#####F#N##########
`;

// Put clues here using the crossword number.
//
// The converter will automatically determine which numbers
// correspond to which entries.
//
const CLUES: Record<string, string> = {
    '1-down': 'ROH featuring JDD',
    '2-across': 'The smallest a dog can be',
    '3-across': 'The largest a dog can be',
    '4-down': 'A safe default panic activity',
    '5-across': '________ Lot Dip (a Midwest delicacy)',
    '6-down': 'First ROH theme',
    '7-down': 'Last July\'s ROH',
    '8-across': 'Every August',
    '9-down': 'Rob User Group',
    '10-down': 'Surprise first ROH theme',
    '11-across': 'This month\'s ROH',
    '11-down': 'Splitting things in ____',
    '12-down': 'Hunting ____ in the woods',
    '13-across': 'Space with enforced quiet hours'
};

const TITLE = 'Rob\'s Crossword';
const CREATOR_NAME = 'Rob B.';
const CREATOR_URL = 'https://github.com/RobertBerger5';
const CROSSWORD_ID = 'crosswords/rob/1';

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
                (x === 0 || !isOpen(grid, x - 1, y)) &&
                (x + 1 < cols && isOpen(grid, x + 1, y));

            const startsDown =
                (y === 0 || !isOpen(grid, x, y - 1)) &&
                (y + 1 < rows && isOpen(grid, x, y + 1));

            // This cell doesn't begin a real crossword entry.
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

                entries.push({
                    number,
                    direction: 'across',
                    x,
                    y,
                    solution,
                });
            }

            if (startsDown) {
                let solution = '';

                for (let cy = y; cy < rows; cy++) {
                    if (!isOpen(grid, x, cy)) {
                        break;
                    }

                    solution += grid[cy][x];
                }

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

        date: 1791435600000,
        webPublicationDate: 1791435600000,

        entries: crosswordEntries,

        solutionAvailable: true,
        dateSolutionAvailable: 1791435600000,

        dimensions: {
            cols: grid[0].length,
            rows: grid.length,
        },

        crosswordType: 'quick',
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
        'rob.ts',
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