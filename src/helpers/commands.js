import { goUpper, changeDirectory, listFiles } from '../navigation/index.js';
import { read, add, rename, remove, copy, move } from '../basicOperations/index.js';
import getUserName from '../username/getUserName.js';

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
    '.exit': () => {
        const username = getUserName();
        console.log(`Thank you for using File Manager, ${username}, goodbye!`);
        process.exit();
    },
    ls: listFiles,
    up: goUpper,
};
