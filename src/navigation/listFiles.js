import { readdir } from 'fs/promises';
import { getCurrentDirectory } from './getCurrentDirectory.js';
import { modifyArrWithFiles } from '../helpers/modifyArrWithFiles.js';

export async function listFiles() {
    try {
        const path = process.cwd();
        const files = await readdir(path, { withFileTypes: true });
        const modifyfiles = modifyArrWithFiles(files);
        console.table(modifyfiles);
        getCurrentDirectory();
    } catch {
        console.log('Operation failed');
    }
}
