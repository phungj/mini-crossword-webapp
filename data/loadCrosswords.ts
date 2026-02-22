import fs from "fs";
import path from "path";

// TODO: Figure out if there's a better way to work with the paths here
export async function loadCrosswords() {
    const files = fs.readdirSync(path.join(process.cwd(), "data/crosswords"));

    return files.map(file => {
        const crossword = require(`./crosswords/${file}`);

        return {
            crossword: crossword.CROSSWORD,
            solution: crossword.SOLUTION
        }
    })
}