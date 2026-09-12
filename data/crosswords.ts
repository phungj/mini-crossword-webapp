import type {CrosswordProps} from "@guardian/react-crossword";

export type CAPICrossword = CrosswordProps["data"];

type CrosswordSolution = {
    crossword: CAPICrossword;
    solution: string[][];
};

export type CrosswordData = {
    solutions: CrosswordSolution[];
};