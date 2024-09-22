class RotEncoder {
   constructor(key) {
       // Parse the key for rotation in the constructor
       this.key = parseInt(key, 10);
   }

   // Encodes the input string by shifting each character
   encode(str) {
       return str.split('').map(char => this._shift(char, this.key)).join('');
   }

   // Decodes the input string by reversing the shift
   decode(str) {
       return str.split('').map(char => this._shift(char, -this.key)).join('');
   }

   // Shifts characters based on the key, using regular expressions for case detection
   _shift(char, shiftAmount) {
       // Check if character is uppercase using regex
       const isUpperCase = /[A-Z]/.test(char);
       // Check if character is lowercase using regex
       const isLowerCase = /[a-z]/.test(char);

       if (isUpperCase) {
           return String.fromCharCode((char.charCodeAt(0) - 65 + shiftAmount + 26) % 26 + 65);
       } else if (isLowerCase) {
           return String.fromCharCode((char.charCodeAt(0) - 97 + shiftAmount + 26) % 26 + 97);
       }
       // Non-alphabetic characters remain unchanged
       return char;
   }
}

module.exports = RotEncoder;
