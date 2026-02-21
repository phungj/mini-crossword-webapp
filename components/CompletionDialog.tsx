import {CROSSWORD_VALIDATION} from "@/components/App";

type CompletionDialogProps = {
    completed: CROSSWORD_VALIDATION
}

export default function CompletionDialog({completed}: CompletionDialogProps) {
    if (completed == CROSSWORD_VALIDATION.CORRECT) {
        // TODO: Wrap in dialog, get button working, etc
        // tODO: return to this once you get timing integrated
        return (
            <h1 className='font-title text-heading text-2xl font-bold text-center mt-2'>Congratulations!</h1>
            <h2>You completed thhe crossword in PLACEHOLDER TIME</h2>
        );
    } else {
        // tODO: Wrap in dialog, get button working, etc
        return (
            <h1 className='font-title text-heading text-2xl font-bold text-center mt-2'>Ope!</h1>
            <h2>The crossword is not correct.</h2>
        );
    }
}