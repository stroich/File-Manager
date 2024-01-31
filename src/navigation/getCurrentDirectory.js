export function getCurrentDirectory() {
    const cwd = process.cwd();
    console.log(`You are currently in ${cwd}`);
}