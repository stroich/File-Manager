import path from 'path';
import fs from 'fs/promises';
import { getCurrentDirectory } from '../navigation/index.js';

export async function rename(pathFile, newName) {
    try {
        const cwd = process.cwd();
        const pathOldFile = path.resolve(cwd, pathFile);
        const parentDirectory = path.resolve(pathOldFile, '..');
        const pathNewFile = path.resolve(parentDirectory, newName);
        await fs.rename(pathOldFile, pathNewFile);
        getCurrentDirectory();
    } catch (err) {
        console.log('Operation failed');
    }
}
