import readline from 'readline';
import getUserName from './src/username/getUserName.js';
import { goUpper, getCurrentDirectory, changeDirectory, listFiles } from './src/navigation/index.js';
import { read, add, rename, remove, copy, move } from './src/basicOperations/index.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const username = getUserName();


console.log(`Welcome to the File Manager, ${username}!`);
getCurrentDirectory();


rl.on('line', async (line) => {
  const args = line.split(' ');
  const command = args[0];
  const path = args[1];
  const arg3 = args[2];

  switch (command) {
    case 'rm':
      if (path) {
        remove(path);
      } else {
        console.log('Invalid input');
      }
      break;
    case 'cp':
      if (path && arg3) {
        copy(path, arg3);
      } else {
        console.log('Invalid input');
      }
      break;
    case 'mv':
      if (path && arg3) {
        move(path, arg3);
      } else {
        console.log('Invalid input');
      }
      break;
    case 'rn':
      if (path && arg3) {
        rename(path, arg3);
      } else {
        console.log('Invalid input');
      }
      break;
    case 'add':
      if (path) {
        add(path);
      } else {
        console.log('Invalid input');
      }
      break;
    case 'cat':
      if (path) {
        read(path);
      } else {
        console.log('Invalid input');
      }
      break;
    case 'ls':
      await listFiles();
      break;
    case 'cd':
      if (path) {
        changeDirectory(path);
      } else {
        console.log('Invalid input');
      }
      break;
    case 'up':
      goUpper();
      break;
    case '.exit':
      console.log(`Thank you for using File Manager, ${username}, goodbye!`);
      process.exit();
    default:
      console.log('Invalid input');
  }
});



rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
