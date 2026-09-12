import {CrosswordData} from "@/data/crosswords";

type CrosswordListProps = {
    crosswords: CrosswordData[],
    loadCrossword: (crossword: CrosswordData) => void
}

export default function CrosswordList({crosswords, loadCrossword}: CrosswordListProps) {
    return (
        <div className="min-h-screen">
            <h1 className="font-title text-heading text-2xl font-bold text-center mt-2">
                Crosswords
            </h1>
            <ol className="list grid">
                {crosswords.map(crossword => {
                    const crosswordData = crossword.solutions[0].crossword;

                    return (
                        <li
                            onClick={() => loadCrossword(crossword)}
                            key={crosswordData.id}
                            className="list-row flex"
                        >
                            {crosswordData.name}
                        </li>
                    );
                })}
            </ol>
        </div>
    )
}