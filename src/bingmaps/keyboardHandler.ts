'use strict'
export class KeyboardHandler {
    public static CTRL_IS_PRESSED: boolean;
    public static INIT() {     
        document.onkeydown = (e) => {
            console.log("A key down!");

            this.CTRL_IS_PRESSED = e.ctrlKey as boolean;
        };

        document.onkeyup = (e) => {
            console.log("A key up");
            this.CTRL_IS_PRESSED = e.ctrlKey as boolean;
        };
    }
}