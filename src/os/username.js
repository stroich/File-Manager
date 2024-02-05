import os from 'os';

export function username() {
    console.log(os.userInfo().username);
}
