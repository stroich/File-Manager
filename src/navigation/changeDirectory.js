import path from 'path';
import fs from 'fs';
import { getCurrentDirectory } from './getCurrentDirectory.js';

export function changeDirectory(dir) {
    const cwd = process.cwd();
    console.log(cwd);
    const newDirectory = path.resolve(cwd, dir);
    console.log(newDirectory);
    fs.stat(newDirectory, (err, stats) => {
        if (err || !stats.isDirectory()) {
            console.log('Operation failed');
        } else {
            process.chdir(newDirectory);
            getCurrentDirectory();
        }
    });
}
