const rls = require('readline-sync');
const RotEncoder = require('./RotEncoder');
const SbsEncoder = require('./SbsEncoder');

function main() {
    const [operation, encoderType, key] = process.argv.slice(2);

    let encoder;

    // Instantiate the correct encoder based on command-line arguments
    switch (encoderType.toLowerCase()) {
        case 'rotencoder':
            encoder = new RotEncoder(key);
            break;
        case 'sbsencoder':
            encoder = new SbsEncoder(key);
            break;
        default:
            console.error('Unknown encoder type');
            return;
    }

    // Perform encoding or decoding based on the operation
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
