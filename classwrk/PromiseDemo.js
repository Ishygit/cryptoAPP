// Utility methods.  In practice you usually get promises from API methods, not
// make them yourself.
var makeGoodPromise = 
 (value, delay) => new Promise((callToResolve, callToReject) => { // DI example
   setTimeout(() => callToResolve(value), delay);
 });

var makeBadPromise = 
 (value, delay) => new Promise((callToResolve, callToReject) => {
   setTimeout(() => callToReject(value), delay);
 });

// Simple Promise Example
var simplePrm = makeGoodPromise("Simple Result", 4000);

var simplePrm = simplePrm.then(res => {
   console.log(res); 
   return "No, this instead...";
});

// "Then" it again, and again via method chaining
var thenResult = simplePrm
.then(res => {console.log(`Again: ${res}`); return "Another result";})
.then(res => console.log(`And again: ${res}`));  

if (thenResult === simplePrm)
   console.log("Then is a cascaded method, returning the same promise");
else
   console.log("Then is a chained method, returning a new promise.");

// Complex Promise Example
var complexPrm = makeGoodPromise("Complex Result", 3000);
   
complexPrm = complexPrm
.then(res => {
   console.log("Doing first then");
   return makeGoodPromise("New promise from " + res, 3000);
})
.then(
   res => {
      console.log("Second promise sez: " + res);
      return "But I'll return something else";
   },
   err => {
      console.log("Or maybe not");
      // return "Wow, an error!";
   }
);

var failedPrm = makeBadPromise("Bad promise, bad!", 8000);

failedPrm
.then(res => console.log("Happy outcome!"))
.then(res => console.log("And another happy outcome!"))
.catch(err => console.log("Failed because " + err));
//.then(null, err => console.log("Failed because " + err));

// Try adding w and w/o Promise: res => {console.log(res); return "Yeah, bad!"})

complexPrm.then(res => console.log(`Where were we? Oh yeah: ${res}`));

console.log("All done!");