import fs from 'fs';
import path from 'path';
import { createBrotliCompress } from 'zlib';
import { getCurrentDirectory } from '../navigation/index.js';

export function compress(filePath, filePathToNewDir) {
    const cwd = process.cwd();
    const pathFile = path.resolve(cwd, filePath);

    fs.promises.access(pathFile).then(() => {
        const pathZipFile = path.resolve(cwd, filePathToNewDir);

        const readStream = fs.createReadStream(pathFile);
        const writeStream = fs.createWriteStream(pathZipFile);
        const compressStream = createBrotliCompress();

        writeStream.on('error', () => {
            console.log('Operation failed: incorrect path to the destination');
        });

        readStream.pipe(compressStream).pipe(writeStream);
        getCurrentDirectory();

    }).catch(() => {
        console.log('Operation failed: incorrect file path');
    })

}

