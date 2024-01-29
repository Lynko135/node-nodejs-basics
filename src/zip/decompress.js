import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const file = 'fileToCompress.txt';
const zipFile = 'archive.gz';

const decompress = async () => {
    const filePath = path.resolve(`src/zip/files/${file}`);
    const zipFilePath = path.resolve(`src/zip/files/${zipFile}`);
    const gUnzip = zlib.createGunzip();

    const readStream = fs.createReadStream(zipFilePath);
	const writeStream = fs.createWriteStream(filePath);

    readStream.pipe(gUnzip).pipe(writeStream);
};

await decompress();