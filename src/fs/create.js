import fs from 'fs';
import path from 'path';

const freshFile = 'fresh.txt';
const freshText = 'I am fresh and young';
const errorMsg = 'FS operation failed';

const create = async () => {
    const filePath = path.resolve(`src/fs/files/${freshFile}`);

    try {
		await fs.promises.writeFile(filePath, freshText, { flag: 'wx' });
	} catch {
		throw new Error(errorMsg);
	} 
};

await create();