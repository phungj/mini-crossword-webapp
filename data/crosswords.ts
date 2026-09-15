import type {CrosswordProps} from "@guardian/react-crossword";

export type CAPICrossword = CrosswordProps["data"];

type CrosswordSolution = {
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

export function getClosestSolution(
    crossword: CrosswordData,
    progress: string[][]
): CrosswordSolution {
    let closestSolution = crossword.solutions[0];
    let closestDistance = getSolutionDistance(progress, closestSolution.solution);

    for (let i = 1; i < crossword.solutions.length; i++) {
        const solution = crossword.solutions[i];
        const distance = getSolutionDistance(progress, solution.solution);

        if (distance < closestDistance) {
            closestSolution = solution;
            closestDistance = distance;
        }
    }

    return closestSolution;
}

export function getSolutionDistance(
    progress: string[][],
    solution: string[][]
): number {
    let distance = 0;

    for (let r = 0; r < progress.length; r++) {
        for (let c = 0; c < progress[r].length; c++) {
            // Ignore black/unplayable cells and blank player cells.
            if (
                progress[r][c] !== "" &&
                progress[r][c] !== solution[r][c]
            ) {
                distance++;
            }
        }
    }

    return distance;
}