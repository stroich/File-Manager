import os from 'os';

export function eol() {
    console.log(JSON.stringify(os.EOL));
}
