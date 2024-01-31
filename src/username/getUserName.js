function getUserName() {
    const text = process.argv[2];
    const index = text.indexOf("=");
    if (index === -1) {
        return 'user';
    }
    return text.substring(index + 1);
}

export default getUserName;