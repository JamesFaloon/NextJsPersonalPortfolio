export default async function loadJsonData() {
    const data = await fetch('http://localhost:3000/data/content.json');
    return data.json();

}