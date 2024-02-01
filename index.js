import readline from 'readline';
import getUserName from './src/username/getUserName.js';
import { goUpper, getCurrentDirectory, changeDirectory, listFiles } from './src/navigation/index.js'

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

  switch (command) {
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
      break;
    default:
      console.log('Invalid input');
  }
});



rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
