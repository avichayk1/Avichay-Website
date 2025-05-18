import React, { useState } from "react";
import projects from './projects.json';
import Project from "./components/project";
import { Switch, FormControlLabel } from '@mui/material';

const Home = () => {
    const [darkMode, setDarkMode] = useState(true);

    const toggleMode = () => {
        setDarkMode(!darkMode);
    };

    const pageStyle = {
        position: 'relative', 
        backgroundColor: darkMode ? '#121212' : '#ffffff',
        color: darkMode ? '#00FF00' : '#000000',
        minHeight: '100vh',
        padding: '20px'
    };

    const textColor = darkMode ? '#00FF00' : '#000000';

    return (
        <div style={pageStyle}>
            <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
                <FormControlLabel
                    control={
                        <Switch 
                            checked={darkMode} 
                            onChange={toggleMode} 
                            sx={{
                                '& .MuiSwitch-switchBase.Mui-checked': {
                                  color: '#00FF00',
                                },
                                '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
                                  backgroundColor: '#00FF00',
                                },
                                '& .MuiSwitch-track': {
                                  backgroundColor: darkMode ? '#555' : '#ccc',  // צבע לקו ברקע
                                }
                              }}
                        />
                    }
                    label={` ${darkMode ? "Light" : "Dark"} Mode`}
                    style={{ color: textColor }}
                />
            </div>

            <div style={{ display: 'flex', gap: '20px' }}>
                <img
                    style={{
                        marginLeft: "20px",
                        marginTop: "20px",
                        width: "150px",
                        height: "150px",
                        borderRadius: "50%",
                        objectFit: "cover"
                    }}
                    src="/images/avipic.jpg"
                    alt=""
                />

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: "5px" }}>
                    <h1 style={{ textAlign: "center", width: '50%', color: textColor }}>
                        Welcome to Avichay Kadosh Page
                    </h1>

                    <h4 style={{ textAlign: "center", color: textColor }}>
                        This page showcases my main projects, the technologies I have experience with, and the various programming languages I’ve worked with. Here, you'll find a collection of my work, which highlights both my technical skills and my passion for creating innovative solutions.
                    </h4>

                    {projects.map((project, index) => (
                        <div key={index}>
                            <Project {...project} darkMode={darkMode} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
