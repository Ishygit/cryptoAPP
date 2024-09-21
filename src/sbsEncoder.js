class sbsEncoder {
    constructor(key) {
        this.map = this._createMap(key);
    }

    encode(str) {
        return str.split('').map(char => this.map[char] || char).join('');
    }

    decode(str) {
        const reverseMap = Object.fromEntries(Object.entries(this.map).map(([k, v]) => [v, k]));
        return str.split('').map(char => reverseMap[char] || char).join('');
    }

    _createMap(key) {
        const pairs = key.split(',');
        const map = {};
        pairs.forEach(pair => {
            const [from, to] = pair.split('');
            map[from] = to;
            map[from.toUpperCase()] = to.toUpperCase();
        });
        return map;
    }
}

module.exports = sbsEncoder;
