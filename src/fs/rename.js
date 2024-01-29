import fs from 'fs';
import path from 'path';

import { isFileExists } from '../utils/isFileExists.js';

const wrongFile = 'wrongFilename.txt';
const properFile = 'properFilename.md';
const errorMsg = 'FS operation failed';

const rename = async () => {
    const wrongFilePath = path.resolve(`src/fs/files/${wrongFile}`);
    const properFilePath = path.resolve(`src/fs/files/${properFile}`);

    if(await isFileExists(properFilePath)) {
        throw new Error(errorMsg);
    };

    try {
        await fs.promises.rename(wrongFilePath, properFilePath);
    }
    catch {
        throw new Error(errorMsg);
    }
};

await rename();