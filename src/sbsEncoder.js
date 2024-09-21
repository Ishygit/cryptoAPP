class SbsEncoder {
   constructor(key) {
       // Process the key into a map for fast lookups
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

   // Creates a map from the key for substitution
   _createMap(key) {
       const map = {};
       key.split(',').forEach(pair => {
           const [from, to] = pair.split('');
           if (from && to) {
               map[from] = to;
               map[from.toUpperCase()] = to.toUpperCase();  // Handle uppercase letters
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
