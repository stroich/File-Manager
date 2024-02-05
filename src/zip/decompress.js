import fs from 'fs';
import path from 'path';
import { createBrotliDecompress } from 'zlib';
import { getCurrentDirectory } from '../navigation/index.js';

export function decompress(filePath, filePathToNewDir) {
    const cwd = process.cwd();
    const pathFile = path.resolve(cwd, filePath);

    fs.promises.access(pathFile).then(() => {
        const pathZipFile = path.resolve(cwd, filePathToNewDir);

        const readStream = fs.createReadStream(pathFile);
        const writeStream = fs.createWriteStream(pathZipFile);
        const compressStream = createBrotliDecompress();

        writeStream.on('error', () => {
            console.log('Operation failed: incorrect path to the destination');
        });

        readStream.pipe(compressStream).pipe(writeStream);
        getCurrentDirectory();

    }).catch(() => {
        console.log('Operation failed: incorrect file path');
    })
}
