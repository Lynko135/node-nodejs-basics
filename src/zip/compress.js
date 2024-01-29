import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

const file = 'fileToCompress.txt';
const zipFile = 'archive.gz';

const compress = async () => {
    const filePath = path.resolve(`src/zip/files/${file}`);
    const zipFilePath = path.resolve(`src/zip/files/${zipFile}`);
    const gzip = zlib.createGzip();

    const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });
	const writeStream = fs.createWriteStream(zipFilePath);

    readStream.pipe(gzip).pipe(writeStream);
};

await compress();