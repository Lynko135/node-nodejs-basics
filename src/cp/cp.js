import path from 'path';
import child_process from 'child_process';

const script = 'script.js'

const spawnChildProcess = async (args) => {
    const scriptPath = path.resolve(`src/cp/files/${script}`);
    child_process.fork(scriptPath, args);
};

spawnChildProcess(['1', '2', '3', '4', '5']);
