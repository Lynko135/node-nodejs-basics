import fs from 'fs';
import path from 'path';

const fileToRead = 'fileToRead.txt';
const errorMsg = 'FS operation failed';

const read = async () => {
    
    const fileToReadPath = path.resolve(`src/fs/files/${fileToRead}`);

    try {
        console.log(await fs.promises.readFile(fileToReadPath, { encoding: 'utf8' }));
    }
    catch {
        throw new Error(errorMsg);
    }
};

await read();