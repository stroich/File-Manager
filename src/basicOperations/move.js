import { copy } from "./copy.js";

export function move(filePath, filePathToNewDir) {
    copy(filePath, filePathToNewDir, true);
}
