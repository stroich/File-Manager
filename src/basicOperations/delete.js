import fs from 'fs';
import path from 'path';
import { getCurrentDirectory } from '../navigation/index.js';

export async function remove(filePath) {
    try {
        const cwd = process.cwd();
        const newPath = path.resolve(cwd, filePath);
        await fs.promises.rm(newPath);
        getCurrentDirectory();
    } catch (err) {
        console.log('Operation failed');
    }
}
