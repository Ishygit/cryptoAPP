function SbsEncoder(key) {
   // Process the key into a map for fast lookups in the constructor
   this.map = this._createMap(key);
   this.reverseMap = this._createReverseMap(this.map);  // For decoding
}

// Encodes the input string using substitution
SbsEncoder.prototype.encode = function(str) {
   return str.split('').map(char => this.map[char] || char).join('');
};

// Decodes the input string using the reverse substitution map
SbsEncoder.prototype.decode = function(str) {
   return str.split('').map(char => this.reverseMap[char] || char).join('');
};

// Creates a map from the key for substitution using split and regular expressions
SbsEncoder.prototype._createMap = function(key) {
   const map = {};
   key.split(',').forEach(pair => {
       const [from, to] = pair.split('');  // Split the pair into two characters
       if (from && to) {
           // Add to map both lowercase and uppercase transformations
           map[from] = to;
           if (/[a-z]/.test(from)) { 
               map[from.toUpperCase()] = to.toUpperCase();
           }
       }
   });
   return map;
};

// Creates a reverse map for decoding purposes
SbsEncoder.prototype._createReverseMap = function(map) {
   const reverseMap = {};
   Object.keys(map).forEach(from => {
       const to = map[from];
       reverseMap[to] = from;  // Reverse the mapping
   });
   return reverseMap;
};

// Exporting using Node.js common module system
module.exports = SbsEncoder;
