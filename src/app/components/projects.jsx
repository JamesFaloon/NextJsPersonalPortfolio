'use client'

import {useEffect, useState} from 'react';
import { Card, CardContent, CardMedia, CardHeader, Typography, Button, CardActions, TextField } from "@mui/material";
import Like from './like'
import { useRouter } from 'next/navigation';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';


export default function ProjectsPage({projectsJson, contentJson}) { 
    let [value, setValue] = useState("");
    const [filteredProjects, setFilteredProjects] = useState(projectsJson);
    let [projects, setProjects] = useState(projectsJson);
    const [content, setContent] = useState(contentJson);
    let [like, setLike] = useState([false, false, false, false, false])
    

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedLikes = localStorage.getItem('likes');
      if (storedLikes) {
        setLike(JSON.parse(storedLikes));
      }
    }
    
  }, []);

  useEffect(() => {
    localStorage.setItem('likes', JSON.stringify(like));
  }, [like]);


    function filter(e) {
        const filter =  projects.filter((project) => {
          return project.title.toLowerCase().substring(0, e.target.value.length) === e.target.value.toLowerCase() ? true : false;    
        })
        setValue(e.target.value);
        setFilteredProjects(filter); 
         
      }


      function toggleLike(i) {
        console.log(i);
        let toggleLikes = like.map((like, j) => i === j ? !like : like)
        setLike(toggleLikes);
    }



    return (
        <> 
        <main className="dark:bg-[#454545] dark:text-white bg-white text-black p-5">  
          <TextField 
          value={value}
          onChange={(e) => filter(e)}

          />
          <div className="flex justify-around flex-wrap gap-6 mt-6">  
            {filteredProjects.map((project) => {
              return (
                <Card key={project.projectId} className = "dark:bg-[#5A5A5A] dark:text-white bg-[#D3D3D3] text-black "sx={{ width: '30%', alignItems: 'stretch', border : "black 1px solid", padding : "20px", borderRadius : "20px", display : 'flex', justifyContent : 'center', flexWrap : 'wrap' }} > 
                  <CardHeader 
                  title={project.title}
                  />
                  <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        width: '95%', // Ensures the image takes full width of the container
                        objectFit: 'contain', // Prevents the image from being cropped while maintaining aspect ratio
                        border: '1px solid black', // Adds a border around the imag
                        padding: '20px', // Resets any internal padding
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
                          <Button key={`${project.projectId}-action-${index}`} href={project.links[index]} variant="contained" color="primary">
                            {action}
                          </Button>
                         
    
                        


                      )

                      

                      
                    })}


                {like[project.projectId - 1] ? <ThumbUpIcon onClick={() => {toggleLike(project.projectId - 1)}}> </ThumbUpIcon> 
            : <ThumbUpOffAltIcon onClick={() => {toggleLike(project.projectId - 1)}}> </ThumbUpOffAltIcon>}


                  

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