import { goUpper, changeDirectory, listFiles, getCurrentDirectory } from '../navigation/index.js';
import { read, add, rename, remove, copy, move } from '../basicOperations/index.js';
import getUserName from '../username/getUserName.js';
import { eol, cpus, homedir, username, architecture } from '../os/index.js';
import { hash } from '../hash/hash.js';

export const commands = {
    rm: (path) => {
        if (path) {
            remove(path);
        } else {
            console.log('Invalid input');
        }
    },
    cp: (path, arg3) => {
        if (path && arg3) {
            copy(path, arg3);
        } else {
            console.log('Invalid input');
        }
    },
    mv: (path, arg3) => {
        if (path && arg3) {
            move(path, arg3);
        } else {
            console.log('Invalid input');
        }
    },
    rn: (path, arg3) => {
        if (path && arg3) {
            rename(path, arg3);
        } else {
            console.log('Invalid input');
        }
    },
    add: (path) => {
        if (path) {
            add(path);
        } else {
            console.log('Invalid input');
        }
    },
    cat: (path) => {
        if (path) {
            read(path);
        } else {
            console.log('Invalid input');
        }
    },
    cd: (path) => {
        if (path) {
            changeDirectory(path);
        } else {
            console.log('Invalid input');
        }
    },
    hash: (path) => {
        if (path) {
            hash(path);
        } else {
            console.log('Invalid input');
        }
    },
    '.exit': () => {
        const usernameApp = getUserName();
        console.log(`Thank you for using File Manager, ${usernameApp}, goodbye!`);
        process.exit();
    },
    'os': (path) => {
        if (path) {
            switch (path) {
                case '--EOL':
                    eol();
                    break;
                case '--cpus':
                    cpus();
                    break;
                case '--homedir':
                    homedir();
                    break;
                case '--username':
                    username();
                    break;
                case '--architecture':
                    architecture();
                    break;
                default:
                    console.log('Invalid input');
            }
            getCurrentDirectory();
        } else {
            console.log('Invalid input');
        }
    },
    ls: listFiles,
    up: goUpper,
};
