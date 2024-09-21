(() => {
    let oldArr = [];
    let newArr = new Int32Array(50000000);
 
    // Ensure length of 50,000,000 for oldArr
    oldArr[49999999] = 42; 
 
    console.log(`Testing oldArr of length ${oldArr.length}`);
    
    console.time("oldArr");
    testArr(oldArr);  // Run the test on the regular array
    console.timeEnd("oldArr");
 
    console.log("Done with oldArr");
 
    console.log(`Testing newArr of length ${newArr.length}`);
    
    console.time("newArr");
    testArr(newArr);  // Run the test on the typed array
    console.timeEnd("newArr");
 
    console.log("Done with newArr");
 })();
 
 function testArr(arr) {
    // Fill the array with values from 1 to arr.length
    for (let i = 0; i < arr.length; i++) {
       arr[i] = i + 1;
    }
 
    // Reverse the array by flipping elements end-for-end
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

 