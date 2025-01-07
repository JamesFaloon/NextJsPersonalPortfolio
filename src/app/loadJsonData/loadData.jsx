import { promises as fs } from 'fs';

export default async function loadJsonData() {
    const file = await fs.readFile(process.cwd() + '/public/data/content.json')
    const data = JSON.parse(file);
    return data;

}