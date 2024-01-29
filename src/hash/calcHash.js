import fs from 'fs';
import path from 'path';
import crypto from 'crypto'

const file = 'fileToCalculateHashFor.txt';

const calculateHash = async () => {
    const filePath = path.resolve(`src/hash/files/${file}`);
    const stream = fs.createReadStream(filePath);
    const hash = crypto.createHash('sha256');

    stream.on('data', (data) => {
        hash.update(data);
        console.log(hash.digest('hex'));
    });
};

await calculateHash();