import {CROSSWORD_VALIDATION} from "@/components/App";
import {useEffect, useRef} from "react";

type CompletionDialogProps = {
    completed: CROSSWORD_VALIDATION,
    timerComponent,
    startTimer: () => void,
    stopTimer: () => void
}

export default function CompletionDialog({completed, timerComponent, startTimer, stopTimer}: CompletionDialogProps) {
    const completionDialogRef = useRef<HTMLDialogElement>(null);

    useEffect(() => {
            if (completed !== CROSSWORD_VALIDATION.INCOMPLETE) {
                completionDialogRef.current?.show();
                stopTimer();
            }
        }, [completed]);

    let dialogContents = null;
    let onClose = () => {};

    if (completed === CROSSWORD_VALIDATION.CORRECT) {
        dialogContents = (
            <div>
                <h1 className="font-title text-heading text-2xl font-bold text-center mb-1">Congratulations!</h1>
                <h2 className="mb-2">You completed the crossword in {timerComponent}!</h2>
                <form method="dialog">
                    <button className="block mx-auto btn btn-sm btn-primary">Continue</button>
                </form>
            </div>
        );
    } else if (completed === CROSSWORD_VALIDATION.INCORRECT) {
        onClose = startTimer;

        dialogContents = (
            <div>
                <h1 className="font-title text-heading text-2xl font-bold text-center mb-1">Ope!</h1>
                <h2 className="mb-2">The crossword is not correct.</h2>
                <form method="dialog">
                    <button className="block mx-auto btn btn-sm btn-primary">Try Again</button>
                </form>
            </div>
        );
    }

    return (
        <dialog onClose={onClose} ref={completionDialogRef} className="text-center modal">
            <div className='modal-box'>
                {dialogContents}
            </div>
            <form method="dialog" className="modal-backdrop">
                <button/>
            </form>
        </dialog>
    )
}