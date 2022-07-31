//////////////////////////////////////////////////////////////////////
// script.js
//////////////////////////////////////////////////////////////////////
class Script {

    //////////////////////////////////////////////////////////////////////
    // Constructor.
    //////////////////////////////////////////////////////////////////////
    constructor() {
        this.classNameAccordionBox = 'accordion-box';
        this.classNameAccordionBoxHeading = 'heading';
        this.classNameAccordionBoxHasContent = 'has-content';
        this.classNameAccordionBoxContent = 'content';
        this.classNameAccordionBoxItem = 'item';
        this.classNameActive = 'active';
    }


    //////////////////////////////////////////////////////////////////////
    // Run.
    //////////////////////////////////////////////////////////////////////
    Run() {
        this.setUpForAccordingBox();
    }


    //////////////////////////////////////////////////////////////////////
    // Set up for "according-box"
    //////////////////////////////////////////////////////////////////////
    async setUpForAccordingBox() {
        const accordionBoxElms = document.querySelectorAll(`.${this.classNameAccordionBox}`);
        for(let i = 0; i < accordionBoxElms.length; i++) {
            const elms = accordionBoxElms[i].querySelectorAll(`.${this.classNameAccordionBoxHeading}.${this.classNameAccordionBoxHasContent}`);
            if(elms === undefined || elms === null) {
                continue;
            }
            for(let j = 0; j < elms.length; j++) {
                const elm = elms[j].parentElement;
                if(elm === undefined || elm === null || !elm.classList.contains(this.classNameAccordionBoxItem)) {
                    continue;
                }
                const contentElm = elm.querySelector(`.${this.classNameAccordionBoxContent}`);
                if(contentElm === undefined || contentElm === null) {
                    continue;
                }
                elms[j].addEventListener('click', async () => {
                    elm.classList.toggle(this.classNameActive);
                    if(elm.classList.contains(this.classNameActive)) {
                        contentElm.style.maxHeight = `${contentElm.scrollHeight}px`;
                    } else {
                        contentElm.style.maxHeight = '0px';
                    }
                });
            }
        }
    }

}


//////////////////////////////////////////////////////////////////////
// Initialize.
//////////////////////////////////////////////////////////////////////
const myInterval = setInterval(() => {
    if(document.readyState === 'complete') {
        clearInterval(myInterval);
        new Script().Run();
    }
}, 100);
