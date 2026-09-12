import type {CrosswordProps} from "@guardian/react-crossword";

export type CAPICrossword = CrosswordProps["data"];

type CrosswordSolution = {
    solutionID: string
    crossword: CAPICrossword;
    solution: string[][];
};

export type CrosswordData = {
    solutions: CrosswordSolution[];
};

export function isSolutionCompatible(
    progress: string[][],
    solution: string[][]
): boolean {
    for (let r = 0; r < progress.length; r++) {
        for (let c = 0; c < progress[r].length; c++) {
            if (
                progress[r][c] !== "" &&
                progress[r][c] !== solution[r][c]
            ) {
                return false;
            }
        }
    }

    return true;
}

export function getCompatibleSolutions(
    crossword: CrosswordData,
    progress: string[][]
): CrosswordSolution[] {
    return crossword.solutions.filter(({solution}) =>
        isSolutionCompatible(progress, solution)
    );
}

export function isCrosswordComplete(
    progress: string[][],
    solution: string[][]
): boolean {
    for (let r = 0; r < progress.length; r++) {
        for (let c = 0; c < progress[r].length; c++) {
            if (solution[r][c] !== "" && progress[r][c] === "") {
                return false;
            }
        }
    }

    return true;
}

export function hasValidSolution(
    progress: string[][],
    crossword: CrosswordData
): boolean {
    return crossword.solutions.some(({solution}) =>
        isSolutionCompatible(progress, solution)
    );
}