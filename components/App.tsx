"use client"

import {Crossword} from "@guardian/react-crossword";
import {crossword} from "@/public/example";

export default function App() {
    return (
        <div className="mt-5 ml-5 mr-5">
            <Crossword data={crossword}/>
        </div>
    );
}