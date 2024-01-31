import readline from 'readline';
import getUserName from './src/username/getUserName.js';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const username = getUserName();
const cwd = process.cwd();

console.log(`Welcome to the File Manager, ${username}!`);
console.log(`You are currently in ${cwd}`);

rl.on('line', (line) => {
  const args = line.split(' ');
  const command = args[0];
  const path = args[1];

  switch (command) {
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
