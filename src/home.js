import React from "react"
import projects from './projects.json'
import Project from "./components/project"
const Home=()=>{
    return (
        <div style={{
            display: 'flex',
            gap: '20px', 
            }}>            
            <img style={{      
                marginLeft: "20px",
                marginTop: "20px",
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover"
            }} src ="/images/avipic.jpg" alt = ""></img>       
            <div style={{
            display: 'flex',
            flexWrap: 'wrap', 
            gap:"5px"
            }}>     
            <h1 style={{textAlign:"center",width: '50%',color:"#00FF00"}}>Welcome to Avichay Kadosh Page</h1>
            <h4 style={{textAlign:"center",color:"#00FF00"}}>This page showcases my main projects , the technologies I have experience with, and the various programming languages I’ve worked with. Here, you'll find a collection of my work, which highlights both my technical skills and my passion for creating innovative solutions.</h4>
            
            {projects.map((project, index) => (
                <div key={index}>
                <Project {...project}/>
                </div>
            ))}
            </div>
        </div>
            
    )
}
export default Home;