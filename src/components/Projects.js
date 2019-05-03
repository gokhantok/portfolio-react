import React from 'react';
import PROJECTS from '../data/projects';


const Project = props => {
        const { title, image, description, link} = props.project;

        return (
            <div style= {{display : 'inline-block',height:400, width: 300, margin: 10}}>
                <h3>{title}</h3>
                <img src = {image} alt = 'profile' style= {{ width : 200, height:150 , objectFit: 'cover' }}/>
                <p style={{}}>{description}</p>
                <a href = {link}> {link} </a>
            </div>
        )
    } 



const Projects  = () => (
        <div>
            <h2>Higlighted Projects</h2>
            <div>
                {
                    PROJECTS.map( PROJECT =>  (
                        <Project key = {PROJECT.id} project={PROJECT} />
                    ))
                }
            </div>
        </div>
)


export default Projects;