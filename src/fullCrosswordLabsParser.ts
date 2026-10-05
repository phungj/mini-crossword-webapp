import { writeFileSync } from 'node:fs';

type Direction = 'across' | 'down';

type CrosswordLabsClue = {
    index: number;
    number: number;
    clue: string;
    direction: Direction;
};

type CrosswordLabsGridCell = {
    char: string;
    across: {
        index: number;
        is_start_of_word: boolean;
        rtl?: number;
    } | null;
    down: {
        index: number;
        is_start_of_word: boolean;
    } | null;
};

type CrosswordEntry = {
    id: string;
    number: number;
    humanNumber: string;
    clue: string;
    direction: Direction;
    length: number;
    group: string[];
    position: {
        x: number;
        y: number;
    };
    separatorLocations: Record<string, number[]>;
    solution: string;
};

//
// ============================================================
// PASTE YOUR CROSSWORDLABS DATA HERE
// ============================================================
//

// Optional metadata
const TITLE = 'Parker\'s Crossword 3';
const CREATOR_NAME = 'Parker Y.';
const CREATOR_URL = 'https://github.com/parker8283';
const CROSSWORD_ID = 'crosswords/parker/3';

// Paste the contents of the CrosswordLabs clue bar here.
const CLUE_HTML = String.raw`
<div id="clues-bar">
                <div id="clues">
                    <div id="across-box">
                        <h5>Across</h5>
                        <ol id="across" class="valid-parent">
                            <li role="button" tabindex="0" id="clue-28">
                                <strong>7.</strong>
                                LPAR: Logical _________
                            </li>
                            <li role="button" tabindex="0" id="clue-26">
                                <strong>11.</strong>
                                EBCDIC: Extended Binary Coded Decimal ___________ Code
                            </li>
                            <li role="button" tabindex="0" id="clue-14">
                                <strong>13.</strong>
                                LPP: Licensed Program _______
                            </li>
                            <li role="button" tabindex="0" id="clue-8">
                                <strong>14.</strong>
                                VMC: ________ Microcode
                            </li>
                            <li role="button" tabindex="0" id="clue-25">
                                <strong>16.</strong>
                                DST: _________ Service Tools
                            </li>
                            <li role="button" tabindex="0" id="clue-6">
                                <strong>20.</strong>
                                OBI: Object _____ Information
                            </li>
                            <li role="button" tabindex="0" id="clue-11">
                                <strong>21.</strong>
                                ACS: Access Client _________
                            </li>
                            <li role="button" tabindex="0" id="clue-7">
                                <strong>23.</strong>
                                OFT: Object File ________
                            </li>
                            <li role="button" tabindex="0" id="clue-24">
                                <strong>25.</strong>
                                RPG: Report Program _________
                            </li>
                            <li role="button" tabindex="0" id="clue-9">
                                <strong>27.</strong>
                                HMC: Hardware Management _______
                            </li>
                            <li role="button" tabindex="0" id="clue-18">
                                <strong>28.</strong>
                                ASP: _________ Storage Pool
                            </li>
                            <li role="button" tabindex="0" id="clue-19">
                                <strong>30.</strong>
                                TIMI: Technology ___________ Machine Interface
                            </li>
                            <li role="button" tabindex="0" id="clue-0">
                                <strong>31.</strong>
                                PTF: Program _________ Fix
                            </li>
                        </ol>
                    </div>
                    <div id="down-box">
                        <h5>Down</h5>
                        <ol id="down" class="valid-parent">
                            <li role="button" tabindex="0" id="clue-12">
                                <strong>1.</strong>
                                SQL: __________ Query Language
                            </li>
                            <li role="button" tabindex="0" id="clue-23">
                                <strong>2.</strong>
                                IPL: _______ Program Load
                            </li>
                            <li role="button" tabindex="0" id="clue-29">
                                <strong>3.</strong>
                                PASE: Portable ___________ Solutions Environment
                            </li>
                            <li role="button" tabindex="0" id="clue-22">
                                <strong>4.</strong>
                                DASD: Direct ________ Storage Device
                            </li>
                            <li role="button" tabindex="0" id="clue-16">
                                <strong>5.</strong>
                                BMC: _________ Management Controller
                            </li>
                            <li role="button" tabindex="0" id="clue-10">
                                <strong>6.</strong>
                                IFS: __________ File System
                            </li>
                            <li role="button" tabindex="0" id="clue-21">
                                <strong>8.</strong>
                                IOP: Input/Output _________
                            </li>
                            <li role="button" tabindex="0" id="clue-2">
                                <strong>9.</strong>
                                MRI: Machine Readable ___________
                            </li>
                            <li role="button" tabindex="0" id="clue-17">
                                <strong>10.</strong>
                                IBM: International ________ Machines
                            </li>
                            <li role="button" tabindex="0" id="clue-15">
                                <strong>12.</strong>
                                FSP: ________ Service Processor
                            </li>
                            <li role="button" tabindex="0" id="clue-13">
                                <strong>15.</strong>
                                SLIC: System ________ Internal Code
                            </li>
                            <li role="button" tabindex="0" id="clue-20">
                                <strong>17.</strong>
                                LID: License Information ________
                            </li>
                            <li role="button" tabindex="0" id="clue-3">
                                <strong>18.</strong>
                                APAR: Authorized _______ Analysis Report
                            </li>
                            <li role="button" tabindex="0" id="clue-1">
                                <strong>19.</strong>
                                XPF: eXtended _______ Program Facility
                            </li>
                            <li role="button" tabindex="0" id="clue-5">
                                <strong>22.</strong>
                                BOR: Build _______ Repository
                            </li>
                            <li role="button" tabindex="0" id="clue-4">
                                <strong>24.</strong>
                                CMVC: Configuration __________ Version Control
                            </li>
                            <li role="button" tabindex="0" id="clue-27">
                                <strong>26.</strong>
                                ILE: Integrated Language ___________
                            </li>
                            <li role="button" tabindex="0" id="clue-30">
                                <strong>29.</strong>
                                BRMS: Backup, Recovery, and _____ Services
                            </li>
                        </ol>
                    </div>
                </div>
`;

// Paste the complete:
// var grid = [[...]];
// here.
const GRID_JS = String.raw`
var grid = [[null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 12,
            "is_start_of_word": true
        },
        "char": "S",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 23,
            "is_start_of_word": true
        },
        "char": "I",
        "across": null
    }, null, null, null, null, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "R",
        "across": null
    }, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": true
        },
        "char": "A",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 22,
            "is_start_of_word": true
        },
        "char": "A",
        "across": null
    }, null, {
        "down": {
            "index": 23,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, null, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "U",
        "across": null
    }, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "P",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 16,
            "is_start_of_word": true
        },
        "char": "B",
        "across": null
    }, null, {
        "down": {
            "index": 22,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, {
        "down": {
            "index": 23,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, null, {
        "down": {
            "index": 10,
            "is_start_of_word": true
        },
        "char": "I",
        "across": null
    }, null, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "C",
        "across": null
    }, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "P",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, null, null, {
        "across": {
            "index": 28,
            "is_start_of_word": true,
            "rtl": 0
        },
        "char": "P",
        "down": null
    }, {
        "down": {
            "index": 16,
            "is_start_of_word": false
        },
        "char": "A",
        "across": {
            "index": 28,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 28,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "R",
        "down": null
    }, {
        "down": {
            "index": 22,
            "is_start_of_word": false
        },
        "char": "T",
        "across": {
            "index": 28,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 28,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "I",
        "down": null
    }, {
        "down": {
            "index": 23,
            "is_start_of_word": false
        },
        "char": "T",
        "across": {
            "index": 28,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 28,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "I",
        "down": null
    }, {
        "across": {
            "index": 28,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "O",
        "down": null
    }, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "N",
        "across": {
            "index": 28,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, null, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "L",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, {
        "down": {
            "index": 21,
            "is_start_of_word": true
        },
        "char": "P",
        "across": null
    }, null, null, null, null, null, null, null, {
        "down": {
            "index": 2,
            "is_start_of_word": true
        },
        "char": "I",
        "across": null
    }, null, {
        "down": {
            "index": 16,
            "is_start_of_word": false
        },
        "char": "S",
        "across": null
    }, null, {
        "down": {
            "index": 22,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, {
        "down": {
            "index": 23,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, null, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "U",
        "across": null
    }, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, {
        "down": {
            "index": 21,
            "is_start_of_word": false
        },
        "char": "R",
        "across": null
    }, null, null, {
        "down": {
            "index": 17,
            "is_start_of_word": true
        },
        "char": "B",
        "across": null
    }, null, null, null, {
        "across": {
            "index": 26,
            "is_start_of_word": true,
            "rtl": 0
        },
        "char": "I",
        "down": null
    }, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "N",
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "T",
        "down": null
    }, {
        "down": {
            "index": 16,
            "is_start_of_word": false
        },
        "char": "E",
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "R",
        "down": null
    }, {
        "down": {
            "index": 22,
            "is_start_of_word": false
        },
        "char": "C",
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "H",
        "down": null
    }, {
        "down": {
            "index": 23,
            "is_start_of_word": false
        },
        "char": "A",
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "N",
        "down": null
    }, {
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "G",
        "down": null
    }, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "E",
        "across": {
            "index": 26,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, null, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "R",
        "across": null
    }, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "C",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, {
        "down": {
            "index": 21,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, null, {
        "down": {
            "index": 17,
            "is_start_of_word": false
        },
        "char": "U",
        "across": null
    }, null, null, null, null, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "F",
        "across": null
    }, null, {
        "down": {
            "index": 16,
            "is_start_of_word": false
        },
        "char": "B",
        "across": null
    }, null, {
        "down": {
            "index": 22,
            "is_start_of_word": false
        },
        "char": "H",
        "across": null
    }, null, {
        "down": {
            "index": 23,
            "is_start_of_word": false
        },
        "char": "L",
        "across": null
    }, null, null, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "G",
        "across": null
    }, null, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, {
        "down": {
            "index": 21,
            "is_start_of_word": false
        },
        "char": "C",
        "across": null
    }, null, null, {
        "down": {
            "index": 17,
            "is_start_of_word": false
        },
        "char": "S",
        "across": null
    }, null, null, {
        "down": {
            "index": 15,
            "is_start_of_word": true
        },
        "char": "F",
        "across": null
    }, null, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, {
        "down": {
            "index": 16,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, {
        "down": {
            "index": 22,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, null, null, {
        "across": {
            "index": 14,
            "is_start_of_word": true,
            "rtl": 0
        },
        "char": "P",
        "down": null
    }, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "R",
        "across": {
            "index": 14,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 14,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "O",
        "down": null
    }, {
        "down": {
            "index": 12,
            "is_start_of_word": false
        },
        "char": "D",
        "across": {
            "index": 14,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 14,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "U",
        "down": null
    }, {
        "across": {
            "index": 14,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "C",
        "down": null
    }, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "T",
        "across": {
            "index": 14,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, null, null, null, null, null, null, null, null, null, null], [{
        "across": {
            "index": 8,
            "is_start_of_word": true,
            "rtl": 0
        },
        "char": "V",
        "down": null
    }, {
        "down": {
            "index": 21,
            "is_start_of_word": false
        },
        "char": "E",
        "across": {
            "index": 8,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 8,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "R",
        "down": null
    }, {
        "across": {
            "index": 8,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "T",
        "down": null
    }, {
        "down": {
            "index": 17,
            "is_start_of_word": false
        },
        "char": "I",
        "across": {
            "index": 8,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 8,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "C",
        "down": null
    }, {
        "across": {
            "index": 8,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "A",
        "down": null
    }, {
        "down": {
            "index": 15,
            "is_start_of_word": false
        },
        "char": "L",
        "across": {
            "index": 8,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, null, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "R",
        "across": null
    }, null, {
        "down": {
            "index": 16,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, {
        "down": {
            "index": 22,
            "is_start_of_word": false
        },
        "char": "D",
        "across": null
    }, null, {
        "down": {
            "index": 13,
            "is_start_of_word": true
        },
        "char": "L",
        "across": null
    }, null, null, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, null, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, {
        "down": {
            "index": 21,
            "is_start_of_word": false
        },
        "char": "S",
        "across": null
    }, null, null, {
        "down": {
            "index": 17,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, {
        "down": {
            "index": 15,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "M",
        "across": null
    }, null, {
        "down": {
            "index": 16,
            "is_start_of_word": false
        },
        "char": "R",
        "across": null
    }, null, null, null, {
        "down": {
            "index": 13,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, null, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, null, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, {
        "down": {
            "index": 21,
            "is_start_of_word": false
        },
        "char": "S",
        "across": null
    }, null, null, {
        "down": {
            "index": 17,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, null, {
        "down": {
            "index": 15,
            "is_start_of_word": false
        },
        "char": "X",
        "across": null
    }, null, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, {
        "down": {
            "index": 16,
            "is_start_of_word": false
        },
        "char": "D",
        "across": {
            "index": 25,
            "is_start_of_word": true,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 25,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "E",
        "down": null
    }, {
        "across": {
            "index": 25,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "D",
        "down": {
            "index": 20,
            "is_start_of_word": true
        }
    }, {
        "across": {
            "index": 25,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "I",
        "down": null
    }, {
        "down": {
            "index": 13,
            "is_start_of_word": false
        },
        "char": "C",
        "across": {
            "index": 25,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 25,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "A",
        "down": null
    }, {
        "across": {
            "index": 25,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "T",
        "down": null
    }, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "E",
        "across": {
            "index": 25,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 25,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "D",
        "down": null
    }, null, null, null, {
        "down": {
            "index": 29,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 3,
            "is_start_of_word": true
        },
        "char": "P",
        "across": null
    }], [null, {
        "down": {
            "index": 21,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, null, {
        "down": {
            "index": 17,
            "is_start_of_word": false
        },
        "char": "S",
        "across": null
    }, null, null, {
        "down": {
            "index": 15,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, null, null, {
        "down": {
            "index": 20,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, {
        "down": {
            "index": 13,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, null, {
        "down": {
            "index": 10,
            "is_start_of_word": false
        },
        "char": "D",
        "across": null
    }, null, null, null, null, null, null, null, {
        "down": {
            "index": 1,
            "is_start_of_word": true
        },
        "char": "C",
        "across": null
    }, null, null, null, null, null, null, {
        "down": {
            "index": 3,
            "is_start_of_word": false
        },
        "char": "R",
        "across": null
    }], [null, {
        "down": {
            "index": 21,
            "is_start_of_word": false
        },
        "char": "R",
        "across": null
    }, null, null, {
        "down": {
            "index": 17,
            "is_start_of_word": false
        },
        "char": "S",
        "across": null
    }, null, null, {
        "down": {
            "index": 15,
            "is_start_of_word": false
        },
        "char": "B",
        "across": {
            "index": 6,
            "is_start_of_word": true,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 6,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "U",
        "down": null
    }, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "I",
        "across": {
            "index": 6,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 6,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "L",
        "down": null
    }, {
        "across": {
            "index": 6,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "D",
        "down": null
    }, null, {
        "down": {
            "index": 20,
            "is_start_of_word": false
        },
        "char": "C",
        "across": null
    }, null, {
        "down": {
            "index": 13,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 1,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, null, null, null, null, null, {
        "down": {
            "index": 3,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }], [null, null, null, null, null, null, null, {
        "down": {
            "index": 15,
            "is_start_of_word": false
        },
        "char": "L",
        "across": null
    }, null, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, null, null, {
        "down": {
            "index": 20,
            "is_start_of_word": false
        },
        "char": "U",
        "across": null
    }, null, {
        "down": {
            "index": 13,
            "is_start_of_word": false
        },
        "char": "S",
        "across": {
            "index": 11,
            "is_start_of_word": true,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 11,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "O",
        "down": null
    }, {
        "across": {
            "index": 11,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "L",
        "down": null
    }, {
        "across": {
            "index": 11,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "U",
        "down": null
    }, {
        "across": {
            "index": 11,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "T",
        "down": null
    }, {
        "across": {
            "index": 11,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "I",
        "down": null
    }, {
        "across": {
            "index": 11,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "O",
        "down": {
            "index": 5,
            "is_start_of_word": true
        }
    }, {
        "across": {
            "index": 11,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "N",
        "down": null
    }, {
        "across": {
            "index": 11,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "S",
        "down": null
    }, null, null, {
        "down": {
            "index": 1,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, null, null, null, {
        "down": {
            "index": 3,
            "is_start_of_word": false
        },
        "char": "G",
        "across": null
    }], [null, null, null, null, null, null, null, {
        "down": {
            "index": 15,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, {
        "down": {
            "index": 2,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, {
        "down": {
            "index": 20,
            "is_start_of_word": false
        },
        "char": "M",
        "across": null
    }, null, {
        "down": {
            "index": 13,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, null, null, null, null, {
        "down": {
            "index": 5,
            "is_start_of_word": false
        },
        "char": "P",
        "across": null
    }, null, null, null, null, {
        "down": {
            "index": 1,
            "is_start_of_word": false
        },
        "char": "T",
        "across": {
            "index": 7,
            "is_start_of_word": true,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 7,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "R",
        "down": null
    }, {
        "across": {
            "index": 7,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "A",
        "down": null
    }, {
        "across": {
            "index": 7,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "N",
        "down": null
    }, {
        "across": {
            "index": 7,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "S",
        "down": null
    }, {
        "across": {
            "index": 7,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "F",
        "down": null
    }, {
        "across": {
            "index": 7,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "E",
        "down": null
    }, {
        "down": {
            "index": 3,
            "is_start_of_word": false
        },
        "char": "R",
        "across": {
            "index": 7,
            "is_start_of_word": false,
            "rtl": 0
        }
    }], [null, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 20,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, {
        "down": {
            "index": 13,
            "is_start_of_word": false
        },
        "char": "D",
        "across": null
    }, null, null, null, null, null, {
        "down": {
            "index": 5,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, {
        "down": {
            "index": 4,
            "is_start_of_word": true
        },
        "char": "M",
        "across": null
    }, null, null, {
        "down": {
            "index": 1,
            "is_start_of_word": false
        },
        "char": "R",
        "across": null
    }, null, null, null, null, null, null, {
        "down": {
            "index": 3,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }], [null, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 20,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, null, null, null, null, {
        "down": {
            "index": 5,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, null, {
        "down": {
            "index": 1,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, null, null, null, null, null, {
        "down": {
            "index": 3,
            "is_start_of_word": false
        },
        "char": "M",
        "across": null
    }], [null, null, null, null, null, null, null, {
        "across": {
            "index": 24,
            "is_start_of_word": true,
            "rtl": 0
        },
        "char": "G",
        "down": null
    }, {
        "across": {
            "index": 24,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "E",
        "down": {
            "index": 27,
            "is_start_of_word": true
        }
    }, {
        "across": {
            "index": 24,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "N",
        "down": null
    }, {
        "across": {
            "index": 24,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "E",
        "down": null
    }, {
        "across": {
            "index": 24,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "R",
        "down": null
    }, {
        "across": {
            "index": 24,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "A",
        "down": null
    }, {
        "down": {
            "index": 20,
            "is_start_of_word": false
        },
        "char": "T",
        "across": {
            "index": 24,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 24,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "O",
        "down": null
    }, {
        "across": {
            "index": 24,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "R",
        "down": null
    }, null, null, null, null, null, {
        "down": {
            "index": 5,
            "is_start_of_word": false
        },
        "char": "C",
        "across": {
            "index": 9,
            "is_start_of_word": true,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 9,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "O",
        "down": null
    }, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "N",
        "across": {
            "index": 9,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 9,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "S",
        "down": null
    }, {
        "across": {
            "index": 9,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "O",
        "down": null
    }, {
        "down": {
            "index": 1,
            "is_start_of_word": false
        },
        "char": "L",
        "across": {
            "index": 9,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 9,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "E",
        "down": null
    }, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 5,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "V",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 5,
            "is_start_of_word": false
        },
        "char": "L",
        "across": null
    }, null, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "G",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, {
        "across": {
            "index": 18,
            "is_start_of_word": true,
            "rtl": 0
        },
        "char": "A",
        "down": null
    }, {
        "across": {
            "index": 18,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "U",
        "down": null
    }, {
        "across": {
            "index": 18,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "X",
        "down": null
    }, {
        "across": {
            "index": 18,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "I",
        "down": null
    }, {
        "across": {
            "index": 18,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "L",
        "down": null
    }, {
        "across": {
            "index": 18,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "I",
        "down": null
    }, {
        "across": {
            "index": 18,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "A",
        "down": null
    }, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "R",
        "across": {
            "index": 18,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 18,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "Y",
        "down": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "M",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "O",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 30,
            "is_start_of_word": true
        },
        "char": "M",
        "across": null
    }, null, null, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, null, null, null, null, null, {
        "across": {
            "index": 19,
            "is_start_of_word": true,
            "rtl": 0
        },
        "char": "I",
        "down": null
    }, {
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "N",
        "down": null
    }, {
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "D",
        "down": null
    }, {
        "down": {
            "index": 30,
            "is_start_of_word": false
        },
        "char": "E",
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "P",
        "down": null
    }, {
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "E",
        "down": null
    }, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "N",
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "D",
        "down": null
    }, {
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "E",
        "down": null
    }, {
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "N",
        "down": null
    }, {
        "across": {
            "index": 19,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "T",
        "down": null
    }, null, null, null, null, null, null], [null, null, null, null, null, null, {
        "across": {
            "index": 0,
            "is_start_of_word": true,
            "rtl": 0
        },
        "char": "T",
        "down": null
    }, {
        "across": {
            "index": 0,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "E",
        "down": null
    }, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "M",
        "across": {
            "index": 0,
            "is_start_of_word": false,
            "rtl": 0
        }
    }, {
        "across": {
            "index": 0,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "P",
        "down": null
    }, {
        "across": {
            "index": 0,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "O",
        "down": null
    }, {
        "across": {
            "index": 0,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "R",
        "down": null
    }, {
        "across": {
            "index": 0,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "A",
        "down": null
    }, {
        "across": {
            "index": 0,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "R",
        "down": null
    }, {
        "across": {
            "index": 0,
            "is_start_of_word": false,
            "rtl": 0
        },
        "char": "Y",
        "down": null
    }, null, null, null, null, null, {
        "down": {
            "index": 30,
            "is_start_of_word": false
        },
        "char": "D",
        "across": null
    }, null, null, {
        "down": {
            "index": 4,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "E",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 30,
            "is_start_of_word": false
        },
        "char": "I",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "N",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, {
        "down": {
            "index": 30,
            "is_start_of_word": false
        },
        "char": "A",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, null], [null, null, null, null, null, null, null, null, {
        "down": {
            "index": 27,
            "is_start_of_word": false
        },
        "char": "T",
        "across": null
    }, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]];
`;

//
// ============================================================
// PARSING
// ============================================================
//

function parseClues(html: string): CrosswordLabsClue[] {
    const clues: CrosswordLabsClue[] = [];

    for (const direction of ['across', 'down'] as Direction[]) {
        const listRegex = new RegExp(
            `<ol[^>]*id="${direction}"[^>]*>([\\s\\S]*?)<\\/ol>`,
            'i'
        );

        const listMatch = html.match(listRegex);

        if (!listMatch) {
            throw new Error(
                `Could not find <ol id="${direction}"> in CLUE_HTML.`
            );
        }

        const listHtml = listMatch[1];

        const clueRegex =
            /<li[^>]*id="clue-(\d+)"[^>]*>[\s\S]*?<strong>\s*(\d+)\.\s*<\/strong>([\s\S]*?)<\/li>/gi;

        let match: RegExpExecArray | null;

        while ((match = clueRegex.exec(listHtml)) !== null) {
            const index = Number(match[1]);
            const number = Number(match[2]);

            const clue = match[3]
                .replace(/<[^>]+>/g, '')
                .replace(/&nbsp;/gi, ' ')
                .replace(/&amp;/gi, '&')
                .replace(/&lt;/gi, '<')
                .replace(/&gt;/gi, '>')
                .replace(/&quot;/gi, '"')
                .replace(/&#39;/gi, "'")
                .replace(/\s+/g, ' ')
                .trim();

            clues.push({
                index,
                number,
                clue,
                direction,
            });
        }
    }

    return clues;
}

function parseGrid(gridJs: string): CrosswordLabsGridCell[][] {
    const match = gridJs.match(
        /(?:var\s+)?grid\s*=\s*([\s\S]*?);?\s*$/
    );

    if (!match) {
        throw new Error(
            'Could not find "var grid = ..." in GRID_JS.'
        );
    }

    const json = match[1].trim().replace(/;$/, '');

    try {
        return JSON.parse(json);
    } catch (error) {
        throw new Error(
            `Could not parse CrosswordLabs grid as JSON.\n\n${error}`
        );
    }
}

//
// ============================================================
// BUILD ENTRIES
// ============================================================
//

function findEntryCells(
    grid: CrosswordLabsGridCell[][],
    index: number,
    direction: Direction
): { x: number; y: number; char: string }[] {
    const cells: { x: number; y: number; char: string }[] = [];

    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++) {
            const cell = grid[y][x];

            if (!cell) {
                continue;
            }

            const clue =
                direction === 'across'
                    ? cell.across
                    : cell.down;

            if (clue?.index === index) {
                cells.push({
                    x,
                    y,
                    char: cell.char,
                });
            }
        }
    }

    // CrosswordLabs gives us the actual grid, so ordering by
    // coordinate makes the answer deterministic.
    if (direction === 'across') {
        cells.sort((a, b) => a.x - b.x);
    } else {
        cells.sort((a, b) => a.y - b.y);
    }

    return cells;
}

function buildEntries(
    clues: CrosswordLabsClue[],
    grid: CrosswordLabsGridCell[][]
): CrosswordEntry[] {
    return clues.map((clue) => {
        const cells = findEntryCells(
            grid,
            clue.index,
            clue.direction
        );

        if (cells.length === 0) {
            console.warn(
                `WARNING: No grid cells found for index ${clue.index} (${clue.number}-${clue.direction})`
            );
        }

        const answer = cells
            .map((cell) => cell.char)
            .join('');

        const firstCell = cells[0];

        const id = `${clue.number}-${clue.direction}`;

        return {
            id,
            number: clue.number,
            humanNumber: String(clue.number),
            clue: clue.clue,
            direction: clue.direction,
            length: answer.length,
            group: [id],
            position: {
                x: firstCell?.x ?? 0,
                y: firstCell?.y ?? 0,
            },
            separatorLocations: {},
            solution: answer,
        };
    });
}

//
// ============================================================
// BUILD SOLUTION GRID
// ============================================================
//

function buildSolutionGrid(
    grid: CrosswordLabsGridCell[][]
): string[][] {
    const sourceRows = grid.length;
    const sourceCols = grid[0]?.length ?? 0;

    // CrosswordLabs: grid[y][x]
    // Our CrosswordData solution: solution[x][y]
    const solution = Array.from(
        { length: sourceCols },
        () => Array(sourceRows).fill('')
    );

    for (let y = 0; y < sourceRows; y++) {
        for (let x = 0; x < sourceCols; x++) {
            const cell = grid[y][x];

            if (cell) {
                solution[x][y] = cell.char;
            }
        }
    }

    return solution;
}

//
// ============================================================
// VALIDATION
// ============================================================
//

function validate(
    clues: CrosswordLabsClue[],
    entries: CrosswordEntry[],
    grid: CrosswordLabsGridCell[][]
) {
    const clueKeys = new Set(
        clues.map((clue) => `${clue.index}-${clue.direction}`)
    );

    const entryKeys = new Set(
        entries.map((entry) => {
            const clue = clues.find(
                (c) =>
                    c.number === entry.number &&
                    c.direction === entry.direction
            );

            return clue
                ? `${clue.index}-${clue.direction}`
                : `unknown-${entry.id}`;
        })
    );

    for (const key of clueKeys) {
        if (!entryKeys.has(key)) {
            console.warn(
                `WARNING: Clue ${key} did not produce an entry.`
            );
        }
    }

    for (const row of grid) {
        if (row.length !== grid[0].length) {
            throw new Error('Grid is not rectangular.');
        }
    }

    console.log(
        `Parsed ${clues.length} clues from CrosswordLabs.`
    );

    console.log(
        `Grid dimensions: ${grid[0].length} × ${grid.length}`
    );

    console.log(
        `Generated ${entries.length} crossword entries.`
    );
}

//
// ============================================================
// OUTPUT
// ============================================================
//

function generateCrosswordData() {
    const clues = parseClues(CLUE_HTML);
    const grid = parseGrid(GRID_JS);

    if (clues.length === 0) {
        throw new Error(
            'No clues were found. Check CLUE_HTML.'
        );
    }

    if (grid.length === 0) {
        throw new Error(
            'Grid is empty. Check GRID_JS.'
        );
    }

    const entries = buildEntries(clues, grid);

    validate(clues, entries, grid);

    const crossword = {
        id: CROSSWORD_ID,
        number: 3,
        name: TITLE,
        creator: {
            name: CREATOR_NAME,
            webUrl: CREATOR_URL,
        },
        date: 1790830800000,
        webPublicationDate: 1790830800000,
        entries,
        solutionAvailable: true,
        dateSolutionAvailable: 1790830800000,
        dimensions: {
            cols: grid[0].length,
            rows: grid.length,
        },
        crosswordType: 'quick',
        pdf: 'https://crosswords-static.guim.co.uk/gdn.quick.20250221.pdf',
    };

    const result = {
        solutions: [
            {
                crossword,
                solution: buildSolutionGrid(grid),
            },
        ],
    };

    const output =
        `import {CrosswordData} from "@/data/crosswords";\n\n` +
        `export const CROSSWORD_DATA: CrosswordData = ${JSON.stringify(
            result,
            null,
            2
        )};\n`;

    writeFileSync(
        'parker-3.ts',
        output,
        'utf8'
    );

    console.log(
        `Generated CROSSWORD_DATA.ts (${entries.length} entries, ${grid[0].length}×${grid.length} grid)`
    );
}

generateCrosswordData();