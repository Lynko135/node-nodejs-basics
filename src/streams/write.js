import fs from 'fs';
import path from 'path';

const file = 'fileToWrite.txt';

const write = async () => {
    const filePath = path.resolve(`src/streams/files/${file}`);
    const stream = fs.createWriteStream(filePath, { encoding: 'utf8' });
    process.stdin.pipe(stream);
};

await write();