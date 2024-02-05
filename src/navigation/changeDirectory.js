import path from 'path';
import fs from 'fs';
import { getCurrentDirectory } from './getCurrentDirectory.js';

export function changeDirectory(dir) {
    const cwd = process.cwd();
    const newDirectory = path.resolve(cwd, dir);
    fs.stat(newDirectory, (err, stats) => {
        if (err || !stats.isDirectory()) {
            console.log('Operation failed');
        } else {
            process.chdir(newDirectory);
            getCurrentDirectory();
        }
    });
}
