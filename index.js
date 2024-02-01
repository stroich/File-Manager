import readline from 'readline';
import getUserName from './src/username/getUserName.js';
import { getCurrentDirectory } from './src/navigation/index.js';
import { commands } from './src/helpers/commands.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const username = getUserName();


console.log(`Welcome to the File Manager, ${username}!`);
getCurrentDirectory();


rl.on('line', async (line) => {
  const args = line.trim().split(/\s+/);
  const command = args[0];
  const path = args[1];
  const arg3 = args[2];

  if (commands[command]) {
    commands[command](path, arg3);
  } else {
    console.log('Invalid input');
  }
});



rl.on('SIGINT', () => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit();
});
