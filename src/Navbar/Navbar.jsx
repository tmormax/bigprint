import { useEffect, useState } from 'react';
import './Navbar.css'

function Navbar(){
    const [isMobile, setIsMobile] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
        window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false)       
        window.addEventListener('resize', function(event) {
            window.innerWidth < 900 ? setIsMobile(true) : setIsMobile(false)                   
            setIsOpen(false)
        }, true);
    },[]);

    return(
        <header className="nav-bar">            
            <nav>
                <div className="nav-logo" onClick={()=>{window.scrollTo({top: 0, behavior: 'smooth'});}}>
                    <img src="/bigprint_logo_white.png" alt="logo" />            
                </div>
                {isMobile &&
                    <div className={isOpen ? "nav-menu rotation": "nav-menu no-rotation"} onClick={() => setIsOpen(!isOpen)}>
                        <i className="fa-solid fa-bars fa-2xl" />
                    </div>                
                }
                {!isMobile && 
                    <div className="nav-links">
                        <ul>
                            <li className='nav-link'><a href="#">Home</a></li>
                            <li className='nav-link'><a href="#wedo-id">What We Do</a></li>
                            <li className='nav-link'><a href="#about-us-id">About Us</a></li>
                            <li className='nav-link'><a href="#projects-id">Projects</a></li>
                            <li className='nav-link'><a href="#contact-us-id">Contact Us</a></li>
                        </ul>
                    </div>
                }
            </nav>
            {isMobile && isOpen &&
                <div className="nav-links-mobile">
                    <ul>
                        <li className='nav-link'><a href="#">Home</a></li>
                        <li className='nav-link'><a href="#wedo-id">What We Do</a></li>
                        <li className='nav-link'><a href="#about-us-id">About Us</a></li>
                        <li className='nav-link'><a href="#projects-id">Projects</a></li>
                        <li className='nav-link'><a href="#contact-us-id">Contact Us</a></li>
                    </ul>
                </div>
            }
        </header>
    );
}

export default Navbar;