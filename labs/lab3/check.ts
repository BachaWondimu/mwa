import os from 'node:os';

export default async function checkSystem() {
    return new Promise((resolve, reject) => {
        const memory = os.totalmem() / (1024 * 1024 * 1024); 
        console.log('RAM:', memory, 'GB')
        const cores = os.cpus().length;
        console.log('cores: ', cores)
        if (memory < 8) {
            reject("You need at least 8 GB of RAM");
        } else if (cores < 4) {
            reject("Processor must have at least 4 cores");
        } else {
            resolve("System is checked successfully.");
        }
    });
}

