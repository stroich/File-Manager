import path from 'path';

export function goUpper() {
    try {
        const cwd = process.cwd();
        const parentDirectory = path.resolve(cwd, '..');
        process.chdir(parentDirectory);
    } catch {
        console.log('Operation failed');
    }
}

