"use client";

import {useEffect, useRef, useState} from "react";

import {Crossword} from "@guardian/react-crossword";
import {
    CROSSWORD as exampleCrossword,
    SOLUTION as exampleSolution
} from "@/public/example";
import CompletionDialog from "@/components/CompletionDialog";
import StartDialog from "@/components/StartDialog";

export enum CROSSWORD_VALIDATION {
    CORRECT,
    INCORRECT,
    INCOMPLETE

}

type CROSSWORD_LOCAL_STORAGE_SET_ITEM_EVENT = {
    key: string,
    value: string
}

export default function App() {
    const COUNTDOWN_ARIA_LABEL = "Counter";

    const timerIntervalID = useRef<NodeJS.Timeout | null>(null);

    const crosswordCompleted = useRef<boolean>(false);

    const [mounted, setMounted] = useState<boolean>(false);

    const [crosswordValidation, setCrosswordValidation] = useState<CROSSWORD_VALIDATION>(CROSSWORD_VALIDATION.INCOMPLETE);
    const [seconds, setSeconds] = useState<number>(0);

    const [timerMinutes, timerSeconds] = computeTimeComponents();
    const timerComponent = (
        <span className="countdown font-mono">
            <span style={{"--value": timerMinutes, "--digits": 2} as React.CSSProperties} aria-live="polite" aria-label={COUNTDOWN_ARIA_LABEL}>{timerMinutes}</span>:
            <span style={{"--value": timerSeconds, "--digits": 2} as React.CSSProperties} aria-live="polite" aria-label={COUNTDOWN_ARIA_LABEL}>{timerSeconds}</span>
        </span>
    );

    useEffect(() => setMounted( true), []);

    useEffect(() => {
        if (mounted) {
            window.addEventListener("crosswordLocalStorageSetItem", (e) => {
                const crosswordLocalStorageSetItemEvent = e as CustomEvent<CROSSWORD_LOCAL_STORAGE_SET_ITEM_EVENT>;

                validateFullCrossword(crosswordLocalStorageSetItemEvent.detail.value)
            });
        }
    }, [mounted]);

    useEffect(() => {
        localStorage.removeItem(`crosswords.${exampleCrossword.id}`)
    }, [])

    return (
        <div>
            <StartDialog startTimer={startTimer}/>
            <CompletionDialog completed={crosswordValidation} timerComponent={timerComponent} startTimer={startTimer} stopTimer={stopTimer}/>
            <h1 className="font-title text-heading text-2xl font-bold text-center mt-2">Mini Crossword</h1>
            <span className="text-2xl ml-5">{timerComponent}</span>
            <div className="mt-2 ml-5 mr-5 flex items-center justify-center h-full w-full">
                <Crossword data={exampleCrossword}/>
            </div>
        </div>
    );

    function validateFullCrossword(crosswordGrid: string) {
        if (!crosswordCompleted.current) {
            const parsedCrosswordGrid = JSON.parse(crosswordGrid).value;

            let crosswordValidation = CROSSWORD_VALIDATION.CORRECT;

            for (let r = 0; r < parsedCrosswordGrid.length; r++) {
                for (let c = 0; c < parsedCrosswordGrid[0].length; c++) {
                    if (parsedCrosswordGrid[r][c] === "" && exampleSolution[r][c] !== "") {
                        setCrosswordValidation(CROSSWORD_VALIDATION.INCOMPLETE);
                        return;
                    } else if (parsedCrosswordGrid[r][c] !== exampleSolution[r][c]) {
                        crosswordValidation = CROSSWORD_VALIDATION.INCORRECT;
                    }
                }
            }

            if (crosswordValidation === CROSSWORD_VALIDATION.CORRECT) {
                crosswordCompleted.current = true;
            }

            setCrosswordValidation(crosswordValidation);
        }
    }

    function computeTimeComponents() {
        const MINUTE_TO_SECONDS = 60;
        const minutes = Math.floor(seconds / MINUTE_TO_SECONDS);

        return [minutes, seconds - minutes * MINUTE_TO_SECONDS];
    }

    function startTimer() {
        timerIntervalID.current = (setInterval(() => {
            setSeconds(seconds => seconds + 1);
        }, 1000));
    }

    function stopTimer() {
        if (timerIntervalID.current) {
            clearInterval(timerIntervalID.current);
            timerIntervalID.current = null;
        }
    }
}