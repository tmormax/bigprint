import { useEffect, useState ,useRef } from 'react';
import './Testing.css'
import { Parallax, ParallaxBanner } from 'react-scroll-parallax';

function Testing(){
  let container = useRef(null)

  function setSectionHeight(){
    // document.getElementsByClassName("aspect")[0].style.height = (container.current.scrollHeight + 200) + "px";
  }

  useEffect(()=>{        
    if (document.readyState === 'complete') {
      console.log('ready');
      setSectionHeight();
    } else {
      window.addEventListener("load", setSectionHeight);
    }
    // window.addEventListener("load", setSectionHeight);

    window.addEventListener('resizeend', function(event) {
      document.getElementsByClassName("aspect")[0].style.height = (container.current.offsetHeight) + "px";
    }, true);    
  }),[];

  const gradientOverlay = {
    opacity: [0, 1, "easeInOutCubic"],
    shouldAlwaysCompleteAnimation: true,
    expanded: false,
    children: <div className="gradient inset" />
  };

  return(
      <ParallaxBanner
      layers={[{ image: '/aboutus_section/aboutus_image_bg.jpg', speed: -15 },gradientOverlay]}
      className="aspect" id='about-us-id'>
        <div className="about-content inset flex-column page-padding-side" ref={container}>
          <Parallax 
          translateY={[-200,50]}
          opacity={[1,0, "easeIn"]}
          scale={[1.25,1,"easeInOutCubic"]}
          >
          <h1>ABOUT US</h1>
          </Parallax>
          <div className='about-description justify italic'>
            <p>I. B. Karthikeyan, The founder of BIG PRINT INC - An Outdoor Advertising Company started in the year 2001 and has thus been serving 16 years in promotions till date. He has promoted more than 1000 Films in Tamil Film industry. He then started a Film Production Company, “BIG PRINT PICTURES” in the year 2014 producing his first film in a tie up with “PVP Cinemas”.</p>
            <p>The company has also been Line producing for various films partnering with other companies. Being a passionate person in cinema, he has pursued Film Direction in Balu Mahendra Film School. He has also produced many award-winning short films and one of which has bagged many International awards.</p>
          </div>
        </div>        
      </ParallaxBanner>
    );
}

export default Testing;