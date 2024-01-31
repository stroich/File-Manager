import path from 'path';
import { getCurrentDirectory } from './getCurrentDirectory.js';

export function goUpper() {
    try {
        const cwd = process.cwd();
        const root = path.parse(cwd).root;
        if (cwd === root) {
            console.log('Operation failed: root directory');
        } else {
            const parentDirectory = path.resolve(cwd, '..');
            process.chdir(parentDirectory);
            getCurrentDirectory();
        }

    } catch {
        console.log('Operation failed');
    }
}

