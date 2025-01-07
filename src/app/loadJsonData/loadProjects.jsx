import { promises as fs } from 'fs';

export default async function loadProjects() {
    const file = await fs.readFile(process.cwd() + '/public/data/project.json')
    const data = JSON.parse(file);
    return data;
}