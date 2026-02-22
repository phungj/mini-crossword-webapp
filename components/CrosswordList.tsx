import {CrosswordData} from "@/components/App";

type CrosswordListProps = {
    crosswords: [CrosswordData],
    loadCrossword: (CrosswordData) => void
}

export default function CrosswordList({crosswords, loadCrossword}: CrosswordListProps) {
    return (
        <div>
            <h1 className="font-title text-heading text-2xl font-bold text-center mt-2">Crosswords</h1>
            <ol className="list grid">
                {crosswords.map(crossword => <li onClick={() => loadCrossword(crossword)} key={crossword.crossword.id} className="list-row flex">{crossword.crossword.name}</li>)}
            </ol>
        </div>
    )
}