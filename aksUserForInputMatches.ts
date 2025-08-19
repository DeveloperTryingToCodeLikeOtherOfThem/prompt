/**
   * Ask the player for a string value.
   * @param message The message to display on the text-entry screen
   * @param answerLength The maximum number of characters the user can enter (1 - 24)
   * @param useOnScreenKeyboard Force the simulator to use the on-screen keyboard for text entry
   */
//% weight=10 help=game/ask-for-string
//% blockId=promptaskforstring
//% block="ask user for input text $message || and max length $answerLength use on-screen keyboard $useOnScreenKeyboard"
//% message.shadow=text
//% message.defl=""
//% answerLength.defl="12"
//% answerLength.min=1
//% answerLength.max=24
//% group="Prompt" blockNamespace=prompt
 function askuserForInput(message: any, answerLength = 12, useOnScreenKeyboard = false) {
    let p = new Prompt();
    const result = p.show(console.inspect(message), answerLength, useOnScreenKeyboard);
    return result;
}