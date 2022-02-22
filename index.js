import { example } from "./templates/initial.js";
import { fswriteFile, genexec } from './fileop.js';
import * as fs from 'fs';

let specs = {}
let readfile = () => {
    return new Promise((resolve, reject) => {
        fs.readFile('template.json', (err, data) => {
            if (err) { return reject(err); }
            specs = JSON.parse(data.toString());
            return resolve();
        })
    })
}

readfile().then(() => {
    genexec("cd " + specs.path + " & mkdir " + specs.name + " & cd " + specs.name + " & cd > Server.js")
        .then(() => { return fswriteFile(specs.path + "\\" + specs.name + "\\" + "Server.js", example(specs.name)) });
})