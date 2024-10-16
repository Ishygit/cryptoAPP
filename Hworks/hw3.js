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
// const regexTwoX = /^[^X]*X[^X]*X[^X]*$/;               // Matches strings with exactly two instances of 'X'
// const regexSpaceWords = /^(\w+\s+)+\w+$/;              // Matches strings with two or more space-separated words
// const regexSameFirstLast = /^(\w+)\s+(\w+\s+)*\1$/;    // Matches strings where the first and last word are the same

// // Function to categorize the string based on the regular expressions
// function categorizeString(s) {
//     const categories = [];
    
//     if (regexTwoX.test(s)) {
//         categories.push('Category 1: Exactly two instances of X');
//     }
//     if (regexSpaceWords.test(s)) {
//         categories.push('Category 2: Two or more space-separated words');
//     }
//     if (regexSameFirstLast.test(s)) {
//         categories.push('Category 3: First and last word are the same');
//     }
//     return categories.length > 0 ? categories : ['None'];
// }

// // Array of test strings
// const testStrings = [
//     // Tests for first regular expression (Exactly two instances of X)
//     "XabcX",              // Matches
//     "abcXabcXabc",         // Matches
//     "XX",                  // Matches
//     "abc",                 // None
//     "abcXabcXabcX",        // None
    
//     // Tests for second regular expression (Series of two or more space-separated words)
//     "hello world",         // Matches
//     "this is a test",      // Matches
//     "one two three four",  // Matches
//     "word",                // None (single word)
//     "    ",                // None (only spaces)
    
//     // Tests for third regular expression (First and last word are the same)
//     "hXllX world hXllX",   // Matches
//     "hello world hello",
//     "test test",           // Matches
//     "abc def ghi abc",     // Matches
//     "hi there",            // None
//     "first last",          // None

    
//     // Additional creative and varied tests
//     "XooXoo",              // Matches (Category 1)
//     "XXooX",               // None (more than two Xs)
//     "wow ",                // None (one word, trailing space)
//     "double trouble",      // Matches (Category 2)
//     "same same same",      // Matches (Category 3)
//     "repeat repeat repeat",// None (not matching first and last word)
//     "None at all",         // Matches (Category 2)
//     "X marks the X",       // None (Category 1 doesn't match more than two Xs)
//     "end end",             // Matches (Category 3)
//     "another test string"  // Matches (Category 2)
// ];

// // Process each test string and output the result
// testStrings.forEach(s => {
//     const result = categorizeString(s);
//     console.log(`String "${s}" is in category "${result}"`);
// });


// ***************************************************************
// Question 10
// var rls = require('readline-sync');

// (() => {
//    while (line = rls.question())
//       console.log(line.replace(/\((-?\d+(?:\.\d+)?)\s*,\s*(-?\d+(?:\.\d+)?)\)/g, '($2, $1)'));
// })()

// ************************************************************
//question 4
// (() => {
//     let oldArr = [];
//     let newArr = new Int32Array(50000000);
 
//     // Ensure length of 50,000,000 for oldArr
//     oldArr[49999999] = 42; 
 
//     console.log(`Testing oldArr of length ${oldArr.length}`);
    
//     console.time("oldArr");
//     testArr(oldArr);  // Run the test on the regular array
//     console.timeEnd("oldArr");
 
//     console.log("Done with oldArr");
 
//     console.log(`Testing newArr of length ${newArr.length}`);
    
//     console.time("newArr");
//     testArr(newArr);  // Run the test on the typed array
//     console.timeEnd("newArr");
 
//     console.log("Done with newArr");
//  })();
 
//  function testArr(arr) {
//     // Fill the array with values from 1 to arr.length
//     for (let i = 0; i < arr.length; i++) {
//        arr[i] = i + 1;
//     }
 
//     // Reverse the array by flipping elements end for end
//     let mid = Math.floor(arr.length / 2);
//     for (let i = 0; i < mid; i++) {
//        let temp = arr[i];
//        arr[i] = arr[arr.length - 1 - i];
//        arr[arr.length - 1 - i] = temp;
//     }
 
//     // Verify that the array is reversed
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i] !== arr.length - i) {
//           console.error(`Error: arr[${i}] = ${arr[i]}, but expected ${arr.length - i}`);
//           return;
//        }
//     }
//     console.log("Array test passed");
//  }
 
//  *****************************************************8
// question 11
// (() => {
//    let oldArr = [];
//    let newArr = new Int32Array(50000000);

//    // Ensure length of 50,000,000 for oldArr
//    oldArr[49999999] = 42; 

//    console.log(`Testing oldArr of length ${oldArr.length}`);
   
//    let start = Date.now();  // Start timing for oldArr in milliseconds
//    testArr(oldArr);  // Run the test on the regular array
//    let end = Date.now();    // End timing for oldArr
//    console.log(`Time taken for oldArr: ${(end - start) * 1000} microseconds`);

//    console.log("Done with oldArr");

//    console.log(`Testing newArr of length ${newArr.length}`);
   
//    start = Date.now();  // Start timing for newArr in milliseconds
//    testArr(newArr);  // Run the test on the typed array
//    end = Date.now();    // End timing for newArr
//    console.log(`Time taken for newArr: ${(end - start) * 1000} microseconds`);

//    console.log("Done with newArr");
// })();

// function testArr(arr) {
//    // Fill the array with values from 1 to arr.length
//    for (let i = 0; i < arr.length; i++) {
//       arr[i] = i + 1;
//    }

//    // Reverse the array by flipping elements end for end
//    let mid = Math.floor(arr.length / 2);
//    for (let i = 0; i < mid; i++) {
//       let temp = arr[i];
//       arr[i] = arr[arr.length - 1 - i];
//       arr[arr.length - 1 - i] = temp;
//    }

//    // Verify that the array is reversed
//    for (let i = 0; i < arr.length; i++) {
//       if (arr[i] !== arr.length - i) {
//          console.error(`Error: arr[${i}] = ${arr[i]}, but expected ${arr.length - i}`);
//          return;
//       }
//    }
//    console.log("Array test passed");
// }

// ***************************************************************8
//  question 12
// (() => {
//     try { 
//        let x = [{}, {}];
 
//        x.forEach(val => val.notThere());
 
//     } 
//     catch (err) {
       
//     }
//  })()
//  ***********************************************************
//Question 13
// let obj = JSON.parse('{"a":{"b":42}}');

// console.log(obj.a.b);
// **********************************************************
// question 14
// let obj = {}
// obj.self = obj;

// console.log(JSON.stringify(obj))
// ***************************************************************8
// question 15
// console.log('\u0644\u0662');
// console.log('1.000.000,00 €');
// console.log('German format:', new Date().toLocaleDateString('de-DE'), '| Chinese format:', new Date().toLocaleDateString('zh-CN'));
// *******************************************************************************
// Question 19
// let i, sum = 0;

// setTimeout(() => console.log("Hi!"));
// console.log(`Before ${sum}`);
// for (let i = 0; i < 20000000; i++)
//    sum += i;
// console.log(`After ${sum}`); 
// setTimeout(() => console.log(`After (timed) ${sum}`));
// setTimeout(() => { console.log("Ready..."); }, 1000);
// setTimeout(() => { console.log("set..."); }, 2000);
// setTimeout(() => { console.log("go!"); }, 3000);

// Once a second: clear the console and print the current
// time
// let clock = setInterval(() => {
// console.clear();
// console.log(new Date().toLocaleTimeString());
// }, 1000);
// After 10 seconds: stop the repeating code above.
// setTimeout(() => { clearInterval(clock); }, 10000);


// ********************************************************************
// Question 18
(() => {
   let oldArr = [];
   let newArr = new Int32Array(50000000);

   // Ensure length of 50,000,000 for oldArr
   oldArr[49999999] = 42; 

   console.log(`Testing oldArr of length ${oldArr.length}`);
   
   console.time("oldArrTime");  // Start timing for oldArr
   testArr(oldArr);  // Run the test on the regular array
   console.timeEnd("oldArrTime");  // End timing and print time taken

   console.log("Done with oldArr");

   console.log(`Testing newArr of length ${newArr.length}`);
   
   console.time("newArrTime");  // Start timing for newArr
   testArr(newArr);  // Run the test on the typed array
   console.timeEnd("newArrTime");  // End timing and print time taken

   console.log("Done with newArr");
})();

function testArr(arr) {
   // Fill the array with values from 1 to arr.length
   for (let i = 0; i < arr.length; i++) {
      arr[i] = i + 1;
   }

   // Reverse the array by flipping elements end for end
   let mid = Math.floor(arr.length / 2);
   for (let i = 0; i < mid; i++) {
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
   }

   // Verify that the array is reversed
   for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== arr.length - i) {
         console.error(`Error: arr[${i}] = ${arr[i]}, but expected ${arr.length - i}`);
         return;
      }
   }
   console.log("Array test passed");
}
