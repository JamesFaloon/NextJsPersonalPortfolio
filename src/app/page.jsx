'use client'

import loadJsonData from "./loadJsonData/loadData";
import loadProjects from "./loadJsonData/loadProjects";
import { Card, CardContent, CardMedia, CardHeader, Typography, Button, CardActions} from "@mui/material";


export function filterProjects() {
  console.log("filterProjects");
}


export default async function Projects() {
  const data = await loadJsonData();
  const projectContent = data.project
  const projectData = await loadProjects();
  const project = projectData.projects;

  return (
    <>
    <main className="dark:bg-[#454545] dark:text-white bg-white text-black p-5"> 
      <h1 className="text-5xl flex justify-center"> {projectContent.title} </h1> 
      <div className="flex justify-around flex-wrap gap-6 mt-6">  
        {project.map((projects) => {
          return (
            <>
            <Card key={projects.projectId} className = "dark:bg-[#5A5A5A] dark:text-white bg-[#D3D3D3] text-black "sx={{ width: '30%', alignItems: 'stretch', border : "black 1px solid", padding : "20px", borderRadius : "20px", display : 'flex', justifyContent : 'center', flexWrap : 'wrap' }} > 
              <CardHeader 
              title={projects.title}
              />
              <CardMedia
                  component="img"
                  image={projects.image}
                  alt={projects.title}
                  sx={{
                    width: '95%', // Ensures the image takes full width of the container
                    objectFit: 'contain', // Prevents the image from being cropped while maintaining aspect ratio
                    border: '1px solid black', // Adds a border around the imag
                    padding: '20px', // Resets any internal padding
                  }}
                />
              <CardContent>
                <Typography variant="body2">
                  {projects.description}
                </Typography>
              </CardContent>
              <CardActions> 
                {projects.actions.map((action, index) => {
                  return (
                    <Button key={index} href={projects.links[index]} variant="contained" color="primary">
                      {action}
                    </Button>
                  )
                })}

              </CardActions>
            </Card>

            </>
          )
        })}


        
        
      </div>

    </main>
   


    <div className="border-2 border-black"> </div>
   

    </>
  );
}
