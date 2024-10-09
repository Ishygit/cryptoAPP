const readline = require('readline-sync');

class SbsEncoder {

   // cipher is a 26-element string containing clear and cypher letters for the
   // letters a-z, e.g. 
   // Each letter in the first part encodes to the corresponding letter in the
   // second part, e.g i->v, b->u, c->w, etc.
   //
   // Set up encodeMap and decodeMap, for both upper and lower case translation
   // Check "cipher" for these errors, and throw exceptions if they occur
   //  * "Bad format for key"  (no '-', or more than one '-')
   //  * "Need 26 letters in both parts of key"
   //  * "Non lowercase letter in key"
   //  * "Repeated letter in clear key"
   //  * "Repeated letter in cipher key"
   //  * "Letter <letter> maps to itself"

   constructor(key) {
      const sections = key.split('-');

      if (sections.length !== 2){
         throw 'Bad key format';
      }
      
      const clear = sections[0];
      const cipher = sections[1];
      
      if(clear.length !== 26 || cipher.length !== 26)
         throw '26 letters needed for both parts'
      
      const clearSet = new Set(clear);
      const cipherSet = new Set(cipher);

      //print the letter that is repeated
      if (clearSet.size !== 26)
         throw 'Repeated letter in Clear key'

      if (cipherSet.size !== 26)
         throw 'Repeated letter in Cipher key'

      //map for both cases of letters
      this.encodeMap = {};
      this.decodeMap = {};

      for (let i = 0; i < 26; i++){
         const clearLetter = clear[i];
         const cipherLetter = cipher[i];

         if (!/[a-z]/.test(clearLetter) || !/[a-z]/.test(cipherLetter)) {
            throw "Non lowercase letter in key";
         }

         if (clearLetter === cipherLetter) {
            throw `Letter ${clearLetter} maps to itself`;
         }

         // Map for lowercase letters
         this.encodeMap[clearLetter] = cipherLetter;
         this.decodeMap[cipherLetter] = clearLetter;

         // Map for uppercase letters (A -> Z)
         const clearUpper = clearLetter.toUpperCase();
         const cipherUpper = cipherLetter.toUpperCase();

         this.encodeMap[clearUpper] = cipherUpper;
         this.decodeMap[cipherUpper] = clearUpper
      }
   }

   encode(line) {
      return line.split('').map(val => this.encodeMap[val] || val).join('');
   }

   decode(line) {
      return line.split('').map(val => this.decodeMap[val] || val).join('');
   }
}

(() => {
   var encoder;

   try {
      if (process.argv.length != 4)
         throw "Usage: crypto E/D key";

      encoder = new SbsEncoder(process.argv[3])

      var line;
      while (line = readline.question('')) {
         console.log(process.argv[2] === 'E' ?
          encoder.encode(line) : encoder.decode(line));
      }
   }
   catch(err) {
      console.log(err);
   }
})();



// **********************************************I
// Map to track frequency of letters
// const clearFrequency = new Map();
// const cipherFrequency = new Map();

// for (let i = 0; i < 26; i++) {
//     const clearLetter = clear[i];
//     const cipherLetter = cipher[i];

//     // Update frequency map for clear letters
//     if (clearFrequency.has(clearLetter)) {
//         console.log(`Repeated letter in Clear key: ${clearLetter}`);
//         throw 'Repeated letter in Clear key';
//     } else {
//         clearFrequency.set(clearLetter, 1);
//     }
 
//     // Update frequency map for cipher letters
//     if (cipherFrequency.has(cipherLetter)) {
//         console.log(`Repeated letter in Cipher key: ${cipherLetter}`);
//         throw 'Repeated letter in Cipher key';
//     } else {
//         cipherFrequency.set(cipherLetter, 1);
//     }
//    }