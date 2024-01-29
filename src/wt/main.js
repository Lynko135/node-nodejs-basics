import path from 'path';
import os from 'os';
import { Worker } from 'worker_threads';

const start = 10;
const workerFile = 'worker.js';

const performCalculations = async () => {
    const workerPath = path.resolve(`src/wt/${workerFile}`)
    const cpu = os.cpus();
    const resultPrArr = [];

    for(let i = 0; i < cpu.length; i++) {
        resultPrArr.push(new Promise((res) => {
            const worker = new Worker(workerPath, {workerData: start + i});

            worker.on('message', (data) => res({ status: 'resolved', data }));
			worker.on('error', () => res({ status: 'error', data: null }));
        }));
    }

    const finalResult = await Promise.all(resultPrArr);

    console.log(finalResult);
};

await performCalculations();