import './HeroSection.css'
import logo from '../assets/bigprint_logo_white.png'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

function HeroSection(){
    const gradientOverlay = {
        opacity: [0, 1, "easeOutQuart"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="hero-gradient inset" />
      };

    return(
        <section className='hero-section'>    
            <ParallaxBanner
            layers={[{ image: '/hero_section/hero_image_bg.png', speed: -20 }, gradientOverlay]}
            className="hero-parallax">
                {/* Content */}
                <div className="hero-inner-section inset flex-column page-padding-side">
                    <Parallax speed={-15}>
                        <div className="hero-section-logo-block">                
                            <img src={logo} alt="Logo" />
                        </div>    
                    </Parallax>         
                    <div className="scroll-down-block" onClick={() =>{
                        document.getElementById("wedo-id").scrollIntoView();
                    }}> 
                        <div className="down-icon">
                            <i className="fa-solid fa-angle-down fa-2xl" />          
                        </div>               
                        <p>Scroll down</p>                
                    </div>                  
                </div> 
            </ParallaxBanner>
        </section>
    );
}

export default HeroSection;





/**
 * 
 *          
 */