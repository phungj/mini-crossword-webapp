"use client";

import { useEffect, useState } from "react";

import { Crossword } from "@guardian/react-crossword";
import { crossword } from "@/public/example";
import CompletionDialog from "@/components/CompletionDialog";

export enum CROSSWORD_VALIDATION {
    CORRECT,
    INCORRECT,
    INCOMPLETE

}

export default function App() {
    const [crosswordValidation, setCrosswordValidation] = useState<CROSSWORD_VALIDATION>(CROSSWORD_VALIDATION.INCOMPLETE);
    const [seconds, setSeconds] = useState<number>(0);
    const [intervalID, setIntervalID] = useState<NodeJS.Timeout>(null);

    useEffect(() => {
        window.addEventListener("localStorageSetItem", (e) => validateFullCrossword(e.detail.value));
    }, []);

    useEffect(() => {
        setIntervalID(setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000));
    }, []);

    // TODO: Add a timer to the UI here
    if (crosswordValidation == CROSSWORD_VALIDATION.INCOMPLETE) {
        return (
            <div>
                <h1 className="font-title text-heading text-2xl font-bold text-center mt-2">Mini Crossword</h1>
                <div className="mt-2 ml-5 mr-5 flex items-center justify-center h-full w-full">
                    <Crossword data={crossword}/>
                </div>
            </div>
        );
    } else {
        return <CompletionDialog completed={crosswordValidation}/>
    }

    function validateFullCrossword(crosswordGrid) {
        // TODO:
        console.log(crosswordGrid);
    }
}