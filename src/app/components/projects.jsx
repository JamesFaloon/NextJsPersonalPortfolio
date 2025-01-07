'use client'

import { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, CardHeader, Typography, Button, CardActions, TextField } from "@mui/material";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


export default function ProjectsPage({ projectsJson, contentJson, number }) {
  let [value, setValue] = useState("");
  const [filteredProjects, setFilteredProjects] = useState(projectsJson);
  let [projects, setProjects] = useState(projectsJson);
  const [content, setContent] = useState(contentJson);
  let [like, setLike] = useState([false, false, false, false, false])


  // when the profoltio mounts check what projects were liked 
  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedLikes = localStorage.getItem('likes');
      if (storedLikes) {
        setLike(JSON.parse(storedLikes));
      }
    }

  }, []);


  // when someone changes the value of a like update the local storage
  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(like));
  }, [like]);


  // when someone types into filter projects text filed filter the projects based on the code that they typed 
  function filter(e) {
    const filter = projects.filter((project) => {
      return project.title.toLowerCase().substring(0, e.target.value.length) === e.target.value.toLowerCase() ? true : false;
    })
    setValue(e.target.value);
    setFilteredProjects(filter);

  }


  // when someone likes or unlikes change the current variable 
  function toggleLike(i) {
    console.log(i);
    let toggleLikes = like.map((like, j) => i === j ? !like : like)
    setLike(toggleLikes);
  }






  return (
    <>
      <main className="dark:bg-[#454545] dark:text-white bg-white text-black p-5">
        <h1 className="text-5xl p-3 text-center"> {content.title}</h1>


        <TextField
          label={content.filter}
          value={value}
          onChange={(e) => filter(e)}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}

        />
        <div className="flex justify-around flex-wrap gap-6 mt-6">
          {filteredProjects.map((project) => {
            return (
              <Card key={project.projectId} className="dark:bg-[#5A5A5A] dark:text-white bg-[#D3D3D3] text-black " sx={{ width: '30%', alignItems: 'stretch', border: "black 1px solid", padding: "20px", borderRadius: "20px", display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }} >
                <CardHeader
                  title={project.title}
                />
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: '95%',
                    objectFit: 'contain',
                    border: '1px solid black',
                    padding: '20px',
                  }}
                />
                <CardContent>
                  <Typography variant="body2">
                    {project.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  {project.actions.map((action, index) => {
                    return (
                      <Button key={`${project.projectId}-action-${index}`} href={index >= project.links.length ? "projects/" + project.projectId : project.links[index]} variant="contained" color="primary">
                        {action}
                      </Button>





                    )




                  })}

                  {/* Button feature if all the projects are being shown show button to go to indivual project else have a button to show all projects*/}
                  {filteredProjects.length < number ? <Button href="/" variant="contained" color="primary"> See all Projects </Button> : <Button href={"/projects/" + project.projectId} variant="contained" color="primary"> Go to Project </Button>}


                  {like[project.projectId - 1] ? <ThumbUpIcon onClick={() => { toggleLike(project.projectId - 1) }}> </ThumbUpIcon>
                    : <ThumbUpOffAltIcon onClick={() => { toggleLike(project.projectId - 1) }}> </ThumbUpOffAltIcon>}




                </CardActions>
              </Card>
            )
          })}




        </div>


      </main>

      <div className="border-2 dark:border-b-[#D3D3D3] border-b-black"> </div>
    </>

  )

}