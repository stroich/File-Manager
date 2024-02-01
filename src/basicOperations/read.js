import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from '../navigation/index.js';

export function read(filePath) {
    try {
        const cwd = process.cwd();
        const newPath = path.resolve(cwd, filePath);
        const readableStream = fs.createReadStream(newPath);

        readableStream.on('data', (chunk) => {
            process.stdout.write(chunk);
        });

        readableStream.on('end', () => {
            getCurrentDirectory();
        });

        readableStream.on('error', () => {
            console.log('Operation failed');
        });
    } catch {
        console.log('Operation failed');
    }
}
