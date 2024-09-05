import "./Contactus.css"
import { Parallax } from "react-scroll-parallax";
function Contactus(){
    return(
        <section className="contact-us-section">
            <div className="contact-us-inner">
                <Parallax translateY={[-150,50]}
                scale={[1.35,1]}
                easing="easeOutQuad"
                >
                    <h1>CONTACT US</h1>          
                </Parallax>      
                <div className="contact-us-content" id="contact-us-id">
                    <div className="contact-us-left">
                        <div className="footer-logo" onClick={() => {
                            window.scrollTo({top: 0, behavior: 'smooth'});
                        }}>
                            <img src="/bigprint_logo_white.png" alt="logo" />
                        </div>
                        <div className="social-media">
                            <a href="https://www.instagram.com/bigprintoffl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                                <i className="fa-brands fa-facebook fa-2xl" />
                            </a>
                            <a href="https://www.instagram.com/bigprintoffl?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
                                <i className="fa-brands fa-instagram fa-2xl" />
                            </a>
                        </div>                        
                    </div>
                    <div className="contact-us-right">
                        <div className="address">
                            <p><a href="https://maps.google.com/?q=13.085303,80.225113" target="_blank">#3/2, 1B 1st floor,D Block,</a></p>
                            <p><a href="https://maps.google.com/?q=13.085303,80.225113" target="_blank">6th Street, Anna Nagar East,</a></p>
                            <p><a href="https://maps.google.com/?q=13.085303,80.225113" target="_blank">Chennai - 102</a></p>
                        </div>                        
                        <p>+91 98849 00010</p>
                        <a href="mailto:ibkarthikeyan@bigprintpictures.in"><p>ibkarthikeyan@bigprintpictures.in</p></a>
                    </div>
                </div>
                <div className="contact-us-copyright">
                    <p>© Bigprint Pictures {new Date().getFullYear()}</p>
                </div>
            </div>

        </section>
    );
}

export default Contactus;