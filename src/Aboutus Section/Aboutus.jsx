import './Aboutus.css'
import { Parallax } from 'react-scroll-parallax';
function Aboutus(){
    return(
        <section className='about-us-section'>
            <div className="about-us-content">
                <Parallax 
                translateY={[-200,0]}
                scale={[1.25,1]}
                easing="easeOutQuad"
                >   
                <h1>ABOUT US</h1>
                </Parallax>
                <Parallax translateY={[-30,30]}>
                    <div className="about-us-description">
                        <p>I. B. Karthikeyan, The founder of BIG PRINT INC – An Outdoor Advertising Company started in the year 2001 and has thus been serving 16 years in promotions till date. He has promoted more than 1000 Films in Tamil Film industry. He then started a Film Production Company, “BIG PRINT PICTURES” in the year 2014 producing his first film in a tie up with “PVP Cinemas”.</p>
                        <p>The company has also been Line producing for various films partnering with other companies. Being a passionate person in cinema, he has pursued Film Direction in Balu Mahendra Film School. He has also produced many award-winning short films and one of which has bagged many International awards.</p>
                    </div>                
                </Parallax>
            </div>            
        </section>
    );
}

export default Aboutus;