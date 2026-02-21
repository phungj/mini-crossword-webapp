"use client";

import { useEffect } from "react";

import { Crossword } from "@guardian/react-crossword";
import { crossword } from "@/public/example";


export default function App() {
    useEffect(() => {
        window.addEventListener("localStorageSetItem", (e) => validateFullCrossword(e.detail.value));
    }, [])

    return (
        <div>
            <h1 className="font-title text-heading text-2xl font-bold text-center mt-2">Mini Crossword</h1>
            <div className="mt-2 ml-5 mr-5">
                <Crossword data={crossword}/>
            </div>
        </div>
    );

    function parseCrosswordSolution(crosswordData) {

    }

    function validateFullCrossword(crosswordGrid) {
        console.log(crosswordGrid);
    }
}