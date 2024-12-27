export default async function loadProjects() {
    const data = await fetch("http://localhost:3000/data/project.json");
    return data.json();
}