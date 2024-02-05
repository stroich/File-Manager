import fs from 'fs';
import path from 'path';
import crypto from "crypto";
import { getCurrentDirectory } from '../navigation/index.js';

export function hash(filePath) {
    const cwd = process.cwd();
    const pathFile = path.resolve(cwd, filePath);

    fs.promises.access(pathFile).then(() => {
        const stream = fs.createReadStream(pathFile);
        const hash = crypto.createHash('sha256');

        stream.on('data', data => {
            hash.update(data);
        });

        stream.on('end', () => {
            const hexData = hash.digest('hex');
            console.log(hexData);
            getCurrentDirectory();
        });
    }).catch(() => {
        console.log('Operation failed: incorrect file path');
    })
}
