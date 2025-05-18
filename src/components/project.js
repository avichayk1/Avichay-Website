import React from 'react';
import Button from '@mui/material/Button';

const Project = ({ title, image, description, technologies, languages, liveUrl, githubUrl, darkMode }) => {
    const textColor = darkMode ? "#88ebfa" : "#000000";
    const backgroundColor = darkMode ? "black" : "#f4f4f4";

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor,
            borderRadius: '12px',
            borderColor: darkMode ? 'AppWorkspace' : '#000000', // ירוק בדארק, שחור בלייט
            borderStyle: 'solid',
            borderWidth: '6px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            height: "550px",
            padding: "10px"
        }}>
            <h3 style={{ color: textColor }}>{title}</h3>
            <img style={{ width: '450px', height: '200px' }} src={image} alt="Project" />
            <p style={{ width: '450px', height: '90px', color: textColor }}>
                <strong>Description:&nbsp;</strong>{description}
            </p>
            <p style={{ width: '450px', color: textColor }}>
                <strong>Technologies:&nbsp;</strong>
                {technologies.map((tech, index) => (
                    <span key={index}>
                        {tech}{index !== technologies.length - 1 && ', '}
                    </span>
                ))}.
            </p>
            <p style={{ width: '450px', color: textColor }}>
                <strong>Languages:&nbsp;</strong>
                {languages.map((lang, index) => (
                    <span key={index}>
                        {lang}{index !== languages.length - 1 && ', '}
                    </span>
                ))}.
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '450px' }}>
                <div>
                    {title !== "Properties Managment Website" && (
                        <Button
                            variant="contained"
                            color="primary"
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: '150px' }}
                        >
                            To Website
                        </Button>
                    )}
                </div>
                <div>
                    {githubUrl && (
                        <Button
                            variant="contained"
                            color="success"
                            href={githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ width: '150px' }}
                        >
                            To GitHub
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Project;
