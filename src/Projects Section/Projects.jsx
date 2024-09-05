import { Parallax } from 'react-scroll-parallax';
import './Projects.css'
function Projects(){
    const project_titles = 
    [
        {
            title: "Graghanam",
            director:"Elan",
            language:"Tamil",
            status: "Yet to be released",
            role:"Producer",            
            image: "/projects_section/01.png"
        },        
        {
            title: "Gemini Ganeshanum Suruli Raajanum",
            director:"Odam Ilavarasu",
            language:"Tamil",
            status: "July 2017",
            role:"Line Producer",            
            image: "/projects_section/02.png"
        },  
        {
            title: "8 THOTTAKKAL",
            director:"Sri Ganesh",
            language:"Tamil",
            status: "April 2017",
            role:"Co-Producer",            
            image: "/projects_section/03.png"
        },  
        {
            title: "KALAVU",
            director:"Karthik Murali",
            language:"Tamil",
            status: "Feb 2019 (Zee OTT)",
            role:"Producer",            
            image: "/projects_section/04.png"
        },  
        {
            title: "ADANGAMARU",
            director:"Karthik Thangavelu",
            language:"Tamil",
            status: "Dec 2018",
            role:"Line Producer",            
            image: "/projects_section/06.png"
        },  
        {
            title: "JIIVI",
            director:"Gopi",
            language:"Tamil",
            status: "June 2019",
            role:"Line Producer",            
            image: "/projects_section/07.png"
        },  
        {
            title: "C/o Kaadhal",
            director:"Hemambar Jasthi",
            language:"Tamil",
            status: "Feb 2021",
            role:"Producer",            
            image: "/projects_section/10.png"
        },  
        {
            title: "KURUDHI AATTAM",
            director:"Sree Ganesh",
            language:"Tamil",
            status: "Aug 2022",
            role:"Line Producer",            
            image: "/projects_section/08.png"
        },  
        {
            title: "CLAP",
            director:"Prithvi Adhithya",
            language:"Tamil / Telugu",
            status: "March 2022",
            role:"Producer",            
            image: "/projects_section/09.png"
        },  
        {
            title: "SSHHH...",
            director:"Prithvi Adithya\nVaali Mohan Das\nHarish GY\nKarthikeyan IB",
            language:"Tamil",
            status: "Coming Soon",
            role:"Producer",            
            image: "/projects_section/11.png"
        },  
        {
            title: "CRIMINAL",
            director:"Dhakshinamoorthy Ramar",
            language:"Tamil",
            status: "Post-Production",
            role:"Producer",            
            image: "/projects_section/12.png"
        },  
        {
            title: "BOAT",
            director:"Chimbudevan",
            language:"Tamil",
            status: "Post-Production",
            role:"Co-Producer",            
            image: "/projects_section/13.png"
        },  
        {
            title: "EERAPAHAM KAATRU MAZHAI",
            director:"Saleem R Baadshah",
            language:"Tamil",
            status: "In Shooting",
            role:"Producer",            
            image: "/projects_section/14.png"
        },  

          
    ]
    return(
        <section className='projects-section' id='projects-id'>
            <div className="projects-top">                
                <img src="/projects_section/projects_top.jpg" alt="" />            
                <div className="projects-title">
                <Parallax translateY={[-150,20,"easeInCubic"]}
                scale={[1.5,1]}
                easing="easeOutQuad"
                >
                    <h1>PROJECTS</h1>
                </Parallax>
                </div>

            </div>            
            <div className="project-titles">                
                {
                    project_titles.map((project,index) => {
                        return (
                            <img className="project-title" key={project.title + index} src={project.image} alt={project.title} />
                        );
                    })
                }
                  
            </div>             
            <div className="project-bottom">
                <img src="/projects_section/projects_bottom.png" alt="" /> 
                <div className="projects-man-standing">
                    <img src="/projects_section/projects_bottom_man.png" alt="" />          
                </div>            
            </div>            
        </section>
    );
}

export default Projects;