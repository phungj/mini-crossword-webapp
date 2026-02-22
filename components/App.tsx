"use client";

import {useEffect, useRef, useState} from "react";

import {Crossword} from "@guardian/react-crossword";

import {CAPICrossword} from "@/data/crosswordType";

import CompletionDialog from "@/components/CompletionDialog";
import StartDialog from "@/components/StartDialog";
import CrosswordList from "@/components/CrosswordList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faHome} from "@fortawesome/free-solid-svg-icons";

export enum CROSSWORD_VALIDATION {
    CORRECT,
    INCORRECT,
    INCOMPLETE

}

export type CrosswordData = {
    crossword: CAPICrossword,
    solution: string[][]
}

type CrosswordLocalStorageSetItemEvent = {
    key: string,
    value: string
}

type AppProps = {
    crosswords: CrosswordData[]
}

export default function App({crosswords}: AppProps) {
    const COUNTDOWN_ARIA_LABEL = "Counter";

    const timerIntervalID = useRef<NodeJS.Timeout | null>(null);

    const currentSolution = useRef<string[][] | null>(null);

    const [mounted, setMounted] = useState<boolean>(false);

    const [displayCrosswordList, setDisplayCrosswordList] = useState<boolean>(true);

    const currentCrosswordRef = useRef<CAPICrossword | null>(null);
    const [currentCrossword, setCurrentCrossword] = useState<CAPICrossword | null>(null);

    const crosswordValidationRef = useRef<CROSSWORD_VALIDATION>(CROSSWORD_VALIDATION.INCOMPLETE);
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

    useEffect(() => {currentCrosswordRef.current = currentCrossword}, [currentCrossword]);

    useEffect(() => {crosswordValidationRef.current = crosswordValidation}, [crosswordValidation]);

    useEffect(() => {
        if (mounted) {
            window.addEventListener("crosswordLocalStorageSetItem", (e) => {
                const crosswordLocalStorageSetItemEvent = e as CustomEvent<CrosswordLocalStorageSetItemEvent>;

                validateFullCrossword(crosswordLocalStorageSetItemEvent.detail.value)
            });
        }
    }, [mounted]);

    if (displayCrosswordList) {
        return <CrosswordList crosswords={crosswords} loadCrossword={loadCrossword}/>
    } else {
        return (
            <div>
                <StartDialog startTimer={startTimer} crossword={currentCrossword as CAPICrossword}/>
                <CompletionDialog completed={crosswordValidation} timerComponent={timerComponent} startTimer={startTimer} stopTimer={stopTimer}/>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="flex-none">
                        <FontAwesomeIcon onClick={homeHandler} icon={faHome} className='ml-2 fa-2xl'/>
                    </div>
                    <div className="flex-1">
                        <h1 className="font-title text-heading text-2xl font-bold text-center mt-2">Mini Crossword</h1>
                    </div>
                </div>
                <span className="text-2xl ml-5">{timerComponent}</span>
                <div className="mt-2 ml-5 mr-5 flex items-center justify-center h-full w-full">
                    <Crossword data={currentCrossword as CAPICrossword}/>
                </div>
            </div>
        );
    }

    function loadCrossword({crossword, solution}: CrosswordData) {
        currentSolution.current = solution;
        setCurrentCrossword(crossword);
        setDisplayCrosswordList(false);
        localStorage.removeItem(`crosswords.${crossword.id}`);
    }

    function validateFullCrossword(crosswordGrid: string) {
        const solutionGrid = currentSolution.current;

        if (crosswordValidationRef.current !== CROSSWORD_VALIDATION.CORRECT && currentCrosswordRef.current && solutionGrid) {
            const parsedCrosswordGrid = JSON.parse(crosswordGrid).value;

            let crosswordValidation = CROSSWORD_VALIDATION.CORRECT;

            for (let r = 0; r < parsedCrosswordGrid.length; r++) {
                for (let c = 0; c < parsedCrosswordGrid[0].length; c++) {
                    if (parsedCrosswordGrid[r][c] === "" && solutionGrid[r][c] !== "") {
                        setCrosswordValidation(CROSSWORD_VALIDATION.INCOMPLETE);
                        return;
                    } else if (parsedCrosswordGrid[r][c] !== solutionGrid[r][c]) {
                        crosswordValidation = CROSSWORD_VALIDATION.INCORRECT;
                    }
                }
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

    function homeHandler() {
        currentSolution.current = null;
        setCurrentCrossword(null);
        setCrosswordValidation(CROSSWORD_VALIDATION.INCOMPLETE);

        setSeconds(0);
        stopTimer();

        setDisplayCrosswordList(true);
    }
}