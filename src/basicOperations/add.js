import fs from 'fs/promises';
import path from 'path';

export async function add(file) {
    try {
        const cwd = process.cwd();
        const pathNewFile = path.join(cwd, file);
        await fs.writeFile(pathNewFile, '');
    } catch {
        console.log('Operation failed');
    }
}
