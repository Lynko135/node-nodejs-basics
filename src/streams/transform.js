import {Transform} from 'stream';

const transform = async () => {
    
    const reversed = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().trim().split('').reverse().join(''));
        }
    });
    process.stdin.pipe(reversed).pipe(process.stdout);
};

await transform();