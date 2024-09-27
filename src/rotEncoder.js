function RotEncoder(key) {
   // Parse the key for rotation in the constructor
   this.key = parseInt(key, 10);
}

// Encodes the input string by shifting each character
RotEncoder.prototype.encode = function(str) {
   return str.split('').map(char => this._shift(char, this.key)).join('');
};

// Decodes the input string by reversing the shift
RotEncoder.prototype.decode = function(str) {
   return str.split('').map(char => this._shift(char, -this.key)).join('');
};

// Helper function to shift characters based on the key
RotEncoder.prototype._shift = function(char, shiftAmount) {
   // Check if character is uppercase or lowercase using regEx
   const isUpperCase = /[A-Z]/.test(char);
   const isLowerCase = /[a-z]/.test(char);

   if (isUpperCase) {
       return String.fromCharCode((char.charCodeAt(0) - 65 + shiftAmount + 26) % 26 + 65);
   } else if (isLowerCase) {
       return String.fromCharCode((char.charCodeAt(0) - 97 + shiftAmount + 26) % 26 + 97);
   }
   // Non-alphabetic characters remain unchanged
   return char;
};

// Export using Node.js common module system
module.exports = RotEncoder;
