import fs from "fs";
import path from "path";
import {CrosswordData} from "@/components/App";

export async function loadCrosswords(): Promise<CrosswordData[]> {
    const files = fs.readdirSync(path.join(process.cwd(), "data/crosswords"));

    return files.map(file => {
        const crossword = require(`./crosswords/${file}`);

        return {
            crossword: crossword.CROSSWORD,
            solution: crossword.SOLUTION
        } as CrosswordData
    });
}