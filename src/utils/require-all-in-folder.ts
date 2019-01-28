import glob = require('glob');

export let requireAllInFolder = (pathToDir: string): void => {
    const files = glob.sync(pathToDir);
    files.forEach(file => {
        if ((file.endsWith('.ts') && !file.endsWith('.d.ts')) || file.endsWith('.js')) {
            file = file.replace(/\.[^/.]+$/, '');
            require(file);
        }
    });
};
