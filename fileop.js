import { exec } from 'child_process';
import * as fs from 'fs';

export let genexec = (command) => {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                return reject(error);
            }
            console.log(`stdout: ${stdout}`);
            return resolve(command);
        })
    })
}

export let fswriteFile = (filepath, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, data, function(err) {
            if (err) reject(err)
            resolve()
        })
    })
}