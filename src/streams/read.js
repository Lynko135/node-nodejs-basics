import fs from 'fs';
import path from 'path';

const file = 'fileToRead.txt';

const read = async () => {
   const filePath = path.resolve(`src/streams/files/${file}`);
   const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
   stream.pipe(process.stdout);
};

await read();