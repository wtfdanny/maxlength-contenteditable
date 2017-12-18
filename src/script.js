


let editableElements = document.querySelectorAll('div[contenteditable="true"]');

editableElements.forEach((elem) => {

    ['copy', 'paste', 'cut'].forEach((event) => {
        elem.addEventListener(event, clipboardHandler);
    });

    ['keyup', 'keypress', 'keydown', 'blur', 'change'].forEach((event) => {
        elem.addEventListener(event, generalHandler);
    });

});

function clipboardHandler(event) {
    //IE
    if (window.clipboardData) {
        if(window.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength){
            event.preventDefault();
        }
    }
    //Chrome , Firefox
    if(event.clipboardData) {
        if(event.clipboardData.getData('Text').length + this.textContent.length > this.dataset.maxLength  && event.keyCode != 8){
            event.preventDefault();
        }
    }
}

function generalHandler(event) {
    if(this.dataset.maxLength && this.textContent.length == this.dataset.maxLength && event.keyCode != 8) {
        event.preventDefault();
    }
}