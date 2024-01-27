import { readdir } from 'fs/promises'
import { access } from "fs";
import errorHandler from "./errorHandler.js";

const folderPath = './files'

const list = async () => {
    const getFilesCallback = async  () => {
        const files = await readdir(folderPath)
        console.log(files)
    }

    access(folderPath, (err) => {
        err ? errorHandler() : getFilesCallback()
    })
};

await list();