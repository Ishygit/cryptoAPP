const rls = require('readline-sync');
const RotEncoder = require('./rotEncoder');
const SbsEncoder = require('./sbsEncoder');

function main() {
    const [operation, encoderType, key] = process.argv.slice(2);

    let encoder;

    switch (encoderType) {
        case 'RotEncoder':
            encoder = new RotEncoder(key);
            break;
        case 'SbsEncoder':
            encoder = new SbsEncoder(key);
            break;
        default:
            console.error('Unknown encoder type');
            return;
    }

    if (operation === 'E') {
        while (true) {
            const line = rls.question('');
            if (!line) break;
            console.log(encoder.encode(line));
        }
    } else if (operation === 'D') {
        while (true) {
            const line = rls.question('');
            if (!line) break;
            console.log(encoder.decode(line));
        }
    } else {
        console.error('Invalid operation. Use E for Encode or D for Decode.');
    }
}

main();
