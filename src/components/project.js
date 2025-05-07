import React from 'react';
import Button from '@mui/material/Button';

const Project=(project)=>{
    return(
        <div 
        style= {{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // מפזר תוכן מעלה/מטה
            backgroundColor: 'black',
            borderRadius: '12px',
            borderColor:"AppWorkspace",
            borderStyle: 'solid',        // חייבים סגנון למסגרת
            borderWidth: '6px',  
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            height:"520px",
            // width: '300px'
        }}>
             <h3 style={{color:"#88ebfa"}}>{project.title}</h3>
             <img   style={{ width: '450px', height: '200px' }} 
                    src={project.image} alt="A picture of the web" />
             <p style={{ width: '450px', height: '90px',color:"#88ebfa" }}><strong>Description:&nbsp;</strong>{project.description}</p>
             <p style={{ width: '450px',color:"#88ebfa" }}><strong>Technologies:&nbsp;</strong>{ project.technologies.map((tech,index)=>(
                <span key = {index}>
                    {tech}
                    {index !== project.technologies.length - 1 && ', '}
                </span>
             ))}.</p>
                <p style={{ width: '450px',color:"#88ebfa" }}><strong>Languages:&nbsp;</strong>{ project.languages.map((lang,index)=>(
                <span key = {index}>
                    {lang}
                    {index !== project.languages.length - 1 && ', '}
                </span>
             ))}.</p>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Button 
                variant="contained" 
                color="primary"
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '150px',marginRight:"150px"}}
                >
                To Website
                </Button>
                <Button 
                variant="contained" 
                color="success"
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '150px' }}
                >
                To GitHub
                </Button>
          </div>
        </div>

    )
}
export default Project