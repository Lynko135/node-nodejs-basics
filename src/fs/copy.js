import fs from 'fs';
import path from 'path';

const errorMsg = 'FS operation failed';
const newFolder = 'files_copy';
const oldFolder = 'files';

const copy = async () => {
    const newFolderPath = path.resolve(`src/fs/${newFolder}`);
    const oldFolderPath = path.resolve(`src/fs/${oldFolder}`);

    try {
		await fs.promises.cp(oldFolderPath, newFolderPath, { recursive: true, force: false, errorOnExist: true });
	} catch {
		throw new Error(errorMsg);
	}
};

await copy();
