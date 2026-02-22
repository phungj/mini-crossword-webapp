import {useEffect, useRef} from "react";

type StartDialogProps = {
    startTimer: () => void
}

export default function StartDialog({startTimer}: StartDialogProps) {
    const startDialogRef = useRef<HTMLDialogElement>(null);
    useEffect(() => startDialogRef.current?.show(), []);

    return (
        <dialog onClose={startTimer} ref={startDialogRef} className="text-center modal">
            <div className='modal-box'>
                <h1 className="font-title text-heading text-2xl font-bold text-center mb-2">Test</h1>
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