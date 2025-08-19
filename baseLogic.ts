

const font = image.font8; // FONT8-TODO

const PADDING = 4;
const NUM_LETTERS = 26;
const ALPHABET_ROW_LENGTH = 12;
const NUM_ROWS = 3
const INPUT_ROWS = 2;
const CONTENT_WIDTH = 152;
const CONTENT_HEIGHT = 112;
const CONTENT_TOP = PADDING;

// Dimensions of a "cell" that contains a letter
const CELL_WIDTH = 12;
const CELL_HEIGHT = CELL_WIDTH;
const LETTER_OFFSET_X = 3;
const LETTER_OFFSET_Y = 2;
const BLANK_PADDING = 1;
const ROW_LEFT = 8;

// Dimensions of the bottom bar
const BOTTOM_BAR_ALPHABET_MARGIN = 4;
const BOTTOM_BAR_HEIGHT = 20;
const BOTTOM_BAR_BUTTON_WIDTH = 26;
const BOTTOM_BAR_TEXT_Y = 6;
const BOTTOM_BAR_SHIFT_X = 4;
const BOTTOM_BAR_CONFIRM_X = 7;
const CONFIRM_BUTTON_LEFT = 134

// Dimensions of the alphabet area
const ALPHABET_HEIGHT = NUM_ROWS * CELL_HEIGHT;
const ALPHABET_TOP = 60;
const ALPHABET_INPUT_MARGIN = 10;

// Dimensions of area where text is input
const INPUT_HEIGHT = 24;
const INPUT_TOP = 26;

const lowerShiftText = "ABC";
const upperShiftText = "abc";
const digitsUpper = [" ", ",", ".", "?", "!", ":", ";", "\"", "(", ")"];
const confirmText = "OK";