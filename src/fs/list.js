import fs from 'fs';
import path from 'path';

const errorMsg = 'FS operation failed';
const folderToRead = 'files';

const list = async () => {
    const folderToReadPath = path.resolve(`src/fs/${folderToRead}`);

    try {
        console.log(await fs.promises.readdir(folderToReadPath));
    }
    catch {
        throw new Error(errorMsg);
    }
};

await list();