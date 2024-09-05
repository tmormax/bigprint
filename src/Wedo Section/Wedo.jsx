import './Wedo.css'
import { ParallaxBanner, Parallax } from 'react-scroll-parallax';

export default function Wedo(){

    const gradientOverlay = {
        opacity: [0, 1, "easeOutQuart"],
        shouldAlwaysCompleteAnimation: true,
        expanded: false,
        children: <div className="wedo-gradient inset" />
      };

    return(
        <section className='wedo-section' id='wedo-id'>
            <ParallaxBanner
            layers={[{ image: '/whatdowedo_section/whatdowedo_image.png', speed: -20 },gradientOverlay]}
            className="wedo-parallax">
                <div className='about-content inset flex-column page-padding-side'>                
                    <Parallax 
                    translateY={[-260,50]}
                    opacity={[1,0, "easeIn"]}
                    scale={[1.25,1,"easeInOutCubic"]}
                    >
                    <h1 id='wedo-h1'>WHAT DO WE DO</h1>
                    </Parallax>
                    <div className="services-container">
                        <div className="service-item">
                            <h4>FILM</h4>
                            <h4>PRODUCTION</h4>
                        </div>
                        <div className="service-item">
                            <h4>FILM</h4>
                            <h4>DISTRIBUTION</h4>
                        </div>
                        <div className="service-item">
                            <h4>OUTDOOR</h4>
                            <h4>PROMOTIONS</h4>
                        </div>        
                    </div>
                </div>
            </ParallaxBanner>
        </section>
    );
}