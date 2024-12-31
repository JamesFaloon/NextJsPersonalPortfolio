import loadJsonData from "./loadJsonData/loadData";
import loadProjects from "./loadJsonData/loadProjects";
import ProjectsPage from "./components/projects"




export default async function Home() {
 const contentData = await loadJsonData();
 const projectsData = await loadProjects();

 return (
  <ProjectsPage contentJson={contentData.project} projectsJson={projectsData.projects} />
 )
  
}
