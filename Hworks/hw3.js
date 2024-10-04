// let arr = [1,2];
// let s = new Set([arr, 1, 2]).add([3]).add([1, 2]).add(arr);

// console.log(s.has(1), s.size, s.has([1,2]), s.has(arr), s.has(3));
// console.log(s);

// let k = [];
// let m = new Map([[[], 1], [k, 2]]).set(k, 3);

// console.log(m.size, m.get([]), m.get(k));

// let m2 = new Map(m.entries());
// k.push(2);
// m.set(k, 4);
// console.log(m.get([2]), m.get(k), [...m.keys()][1][0], m2.get(k));




//****************************************************** */
// Regular expressions for the three categories
const regexTwoX = /^[^X]*X[^X]*X[^X]*$/;               // Matches strings with exactly two instances of 'X'
const regexSpaceWords = /^(\w+\s+)+\w+$/;              // Matches strings with two or more space-separated words
const regexSameFirstLast = /^(\w+)\s+(\w+\s+)*\1$/;    // Matches strings where the first and last word are the same

// Function to categorize the string based on the regular expressions
function categorizeString(s) {
    if (regexTwoX.test(s)) {
        return 'Category 1: Exactly two instances of X';
    } else if (regexSpaceWords.test(s)) {
        return 'Category 2: Two or more space-separated words';
    } else if (regexSameFirstLast.test(s)) {
        return 'Category 3: First and last word are the same';
    } else {
        return 'None';
    }
}

// Array of test strings
const testStrings = [
    // Tests for first regular expression (Exactly two instances of X)
    "XabcX",              // Matches
    "abcXabcXabc",         // Matches
    "XX",                  // Matches
    "abc",                 // None
    "abcXabcXabcX",        // None
    
    // Tests for second regular expression (Series of two or more space-separated words)
    "hello world",         // Matches
    "this is a test",      // Matches
    "one two three four",  // Matches
    "word",                // None (single word)
    "    ",                // None (only spaces)
    
    // Tests for third regular expression (First and last word are the same)
    "hello world hello",   // Matches
    "test test",           // Matches
    "abc def ghi abc",     // Matches
    "hi there",            // None
    "first last",          // None
    
    // Additional creative and varied tests
    "XooXoo",              // Matches (Category 1)
    "XXooX",               // None (more than two Xs)
    "wow ",                // None (one word, trailing space)
    "double trouble",      // Matches (Category 2)
    "same same same",      // Matches (Category 3)
    "repeat repeat repeat",// None (not matching first and last word)
    "None at all",         // Matches (Category 2)
    "X marks the X",       // None (Category 1 doesn't match more than two Xs)
    "end end",             // Matches (Category 3)
    "another test string"  // Matches (Category 2)
];

// Process each test string and output the result
testStrings.forEach(s => {
    const result = categorizeString(s);
    console.log(`String "${s}" is in category "${result}"`);
});
