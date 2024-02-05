export function modifyArrWithFiles(arr) {
    const sortingArr = arr.sort((a, b) => {
        if (a.isDirectory() && b.isDirectory()) {
            return a.name.localeCompare(b.name);
        } else if (a.isDirectory()) {
            return -1;
        } else if (b.isDirectory()) {
            return 1;
        } else {
            return a.name.localeCompare(b.name);
        }
    });

    return sortingArr.map(file => ({
        name: file.name,
        type: file.isDirectory() ? 'directory' : 'file'
    }));
}
