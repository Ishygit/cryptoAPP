class SbsEncoder {
   constructor(key) {
       // Process the key into a map for fast lookups in the constructor
       this.map = this._createMap(key);
       this.reverseMap = this._createReverseMap(this.map);  // For decoding
   }

   // Encodes the input string using substitution
   encode(str) {
       return str.split('').map(char => this.map[char] || char).join('');
   }

   // Decodes the input string using the reverse substitution map
   decode(str) {
       return str.split('').map(char => this.reverseMap[char] || char).join('');
   }

   // Creates a map from the key for substitution using split and regular expressions
   _createMap(key) {
       const map = {};
       key.split(',').forEach(pair => {
           const [from, to] = pair.split('');
           if (from && to) {
               // Regular expressions to handle both upper and lowercase
               map[from] = to;
               if (/[a-z]/.test(from)) {
                   map[from.toUpperCase()] = to.toUpperCase();
               }
           }
       });
       return map;
   }

   // Creates a reverse map for decoding purposes
   _createReverseMap(map) {
       const reverseMap = {};
       Object.keys(map).forEach(from => {
           const to = map[from];
           reverseMap[to] = from;
       });
       return reverseMap;
   }
}

module.exports = SbsEncoder;
