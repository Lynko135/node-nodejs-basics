import fs from 'fs';
import path from 'path';

const errorMsg = 'FS operation failed';
const fileToRemove = 'fileToRemove.txt';

const remove = async () => {
    const fileToRemovePath = path.resolve(`src/fs/files/${fileToRemove}`);

    try {
        await fs.promises.unlink(fileToRemovePath);
    }
    catch {
        throw new Error(errorMsg);
    } 
};

await remove();