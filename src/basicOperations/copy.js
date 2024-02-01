import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from '../navigation/index.js';

export function copy(filePath, filePathToNewDir, isDeleteOldFile = false) {
    const cwd = process.cwd();
    const oldPath = path.resolve(cwd, filePath);

    fs.promises.access(oldPath).then(() => {
        const fileName = path.basename(oldPath);
        const newPathDirectory = path.resolve(cwd, filePathToNewDir);
        const newPath = path.resolve(newPathDirectory, fileName);
        const readStream = fs.createReadStream(oldPath);
        const writeStream = fs.createWriteStream(newPath);

        writeStream.on('error', () => {
            console.log('Operation failed: incorrect directory');
        });

        readStream.pipe(writeStream);

        readStream.on('end', () => {
            if (isDeleteOldFile) {
                fs.promises.rm(oldPath);
            }
            getCurrentDirectory();
        });

    }).catch(() => {
        console.log('Operation failed: incorrect file path');
    })

}
