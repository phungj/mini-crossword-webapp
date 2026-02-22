import {useEffect, useRef} from "react";
import {CAPICrossword} from "@/data/crosswordType";

type StartDialogProps = {
    startTimer: () => void,
    crossword: CAPICrossword
}

export default function StartDialog({startTimer, crossword}: StartDialogProps) {
    const startDialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => startDialogRef.current?.show(), []);

    return (
        <dialog onClose={startTimer} ref={startDialogRef} className="text-center modal">
            <div className='modal-box'>
                <h1 className="font-title text-heading text-2xl font-bold text-center mb-1">{crossword.name}</h1>
                <h2><span className="font-bold">Author: </span>{crossword.creator?.name}</h2>
                <h2 className="mb-2"><span className="font-bold">Date: </span>{new Date(crossword.date).toLocaleDateString()}</h2>
                <form method="dialog">
                    <button className="block mx-auto btn btn-sm btn-primary">Start</button>
                </form>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button/>
            </form>
        </dialog>
    )
}