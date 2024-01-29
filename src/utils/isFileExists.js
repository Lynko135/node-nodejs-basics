import fs from 'fs';

export const isFileExists = async (filePath) => {
	try {
		await fs.promises.access(filePath);
		return true;
	} catch {
		return false;
	}
};