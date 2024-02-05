import fs from 'fs/promises';
import path from 'path';
import { getCurrentDirectory } from '../navigation/index.js';

export async function add(file) {
    try {
        const cwd = process.cwd();
        const pathNewFile = path.resolve(cwd, file);
        await fs.writeFile(pathNewFile, '');
        getCurrentDirectory();
    } catch {
        console.log('Operation failed');
    }
}
