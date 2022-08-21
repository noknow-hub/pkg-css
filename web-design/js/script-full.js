//////////////////////////////////////////////////////////////////////
// script-full.js
//////////////////////////////////////////////////////////////////////
import { Accordion } from './component/accordion.js';
import { Directory } from './component/directory.js';
import { Table } from './component/table.js';

class ScriptFull {

    //////////////////////////////////////////////////////////////////////
    // Constructor.
    //////////////////////////////////////////////////////////////////////
    constructor() {
        this.accordion = new Accordion();
        this.directory = new Directory();
    }


    //////////////////////////////////////////////////////////////////////
    // Run.
    //////////////////////////////////////////////////////////////////////
    Run() {
        this.accordion.Run();
        this.directory.Run();
    }


}


//////////////////////////////////////////////////////////////////////
// Initialize.
//////////////////////////////////////////////////////////////////////
const myInterval = setInterval(() => {
    if(document.readyState === 'complete') {
        clearInterval(myInterval);
        new ScriptFull().Run();
    }
}, 100);
