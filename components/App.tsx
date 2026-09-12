"use client";

import {useEffect, useRef, useState} from "react";

import {Crossword} from "@guardian/react-crossword";

import {
    CAPICrossword,
    CrosswordData,
    hasValidSolution,
    getCompatibleSolutions,
    isCrosswordComplete
} from "@/data/crosswords";

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

    const [mounted, setMounted] = useState<boolean>(false);
    const [darkMode, setDarkMode] = useState<boolean>(false);

    const [displayCrosswordList, setDisplayCrosswordList] = useState<boolean>(true);

    const currentCrosswordRef = useRef<CrosswordData | null>(null);
    const [currentCrossword, setCurrentCrossword] = useState<CrosswordData | null>(null);

    const crosswordValidationRef = useRef<CROSSWORD_VALIDATION>(CROSSWORD_VALIDATION.INCOMPLETE);
    const [crosswordValidation, setCrosswordValidation] = useState<CROSSWORD_VALIDATION>(CROSSWORD_VALIDATION.INCOMPLETE);

    const [guardianCrossword, setGuardianCrossword] =
        useState<CAPICrossword | null>(null);

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
        if (!mounted) {
            return;
        }

        function handleLocalStorageSetItem(e: Event) {
            const event =
                e as CustomEvent<CrosswordLocalStorageSetItemEvent>;

            validateFullCrossword(event.detail.value);
        }

        window.addEventListener(
            "crosswordLocalStorageSetItem",
            handleLocalStorageSetItem
        );

        setDarkMode(
            window.matchMedia("(prefers-color-scheme: dark)").matches
        );

        return () => {
            window.removeEventListener(
                "crosswordLocalStorageSetItem",
                handleLocalStorageSetItem
            );
        };
    }, [mounted]);

    if (displayCrosswordList) {
        return <CrosswordList crosswords={crosswords} loadCrossword={loadCrossword}/>
    } else {
        return (
            <div>
                <StartDialog startTimer={startTimer} crossword={currentCrossword?.solutions[0].crossword as CAPICrossword}/>
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
                    <Crossword data={guardianCrossword as CAPICrossword} textColor={darkMode ? "white" : "black"} connectedBackgroundColor={darkMode ? "gray" : "yellow"} anagramHelperBackgroundColor={darkMode ? "black" : "white"}/>
                </div>
            </div>
        );
    }

    function loadCrossword(crossword: CrosswordData) {
        const solution = crossword.solutions[0];

        setCurrentCrossword(crossword);
        setGuardianCrossword(solution.crossword);

        setDisplayCrosswordList(false);
        localStorage.removeItem(`crosswords.${solution.crossword.id}`);
    }

    function validateFullCrossword(crosswordGrid: string) {
        const crossword = currentCrosswordRef.current;

        if (
            crosswordValidationRef.current === CROSSWORD_VALIDATION.CORRECT ||
            !crossword
        ) {
            return;
        }

        const progress = JSON.parse(crosswordGrid).value as string[][];

        const compatibleSolutions = getCompatibleSolutions(
            crossword,
            progress
        );

        if (compatibleSolutions.length > 0) {
            const solution = compatibleSolutions[0];

            setGuardianCrossword(solution.crossword);
        }

        const solution = crossword.solutions[0].solution;

        if (!isCrosswordComplete(progress, solution)) {
            setCrosswordValidation(CROSSWORD_VALIDATION.INCOMPLETE);
            return;
        }

        if (hasValidSolution(progress, crossword)) {
            setCrosswordValidation(CROSSWORD_VALIDATION.CORRECT);
        } else {
            setCrosswordValidation(CROSSWORD_VALIDATION.INCORRECT);
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
        const currentTimerIntervalID = timerIntervalID.current;

        if (currentTimerIntervalID !== null) {
            clearInterval(currentTimerIntervalID);
            timerIntervalID.current = null;
        }
    }

    function homeHandler() {
        setCurrentCrossword(null);
        setCrosswordValidation(CROSSWORD_VALIDATION.INCOMPLETE);

        setSeconds(0);
        stopTimer();

        setDisplayCrosswordList(true);
    }
}