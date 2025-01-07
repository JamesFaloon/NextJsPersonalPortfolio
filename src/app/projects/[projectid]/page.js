import loadJsonData from "../../loadJsonData/loadData";
import loadProjects from "../../loadJsonData/loadProjects";
import Projects from "../../components/projects"
export default async function singleProjectHome({ params }) {

    const values = await params
    const projectId = values.projectid;


    const contentData = await loadJsonData();
    const projectsData = await loadProjects();
    const singleProject = [];
    singleProject.push(projectsData.projects[projectId - 1]);


    return (
        <Projects contentJson={contentData.project} projectsJson={singleProject} number={projectsData.projects.length} />
    )


}