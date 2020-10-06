import Nav from "./components/nav"
import Footer from "./components/footer"
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter,
    FaInstagram, FaYoutube, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'

export default class Contact extends React.Component {
    render(){
        return (
            <>
                <Nav />
                <div className="container">
                    <div className="form">
                        <div className="contact-info">
    
                            <h3 className="title">Let's Get in Touch</h3>
                            <p className="text">
                                Got a question ? We’d love to hear from you. Send us a message and we’ll respond as soon as possible
                            </p>
    
                            <div className="info">
                                <div className="information">
                                    <FaMapMarkerAlt color="#3ec094" size={30} className="icon"/>
                                    <p>Badian 6031, Cebu Philippines</p>
                                </div>
                                <div class="information">
                                    <FaEnvelope color="#3ec094" size={30} className="icon"/>
                                    <p>mcrichtravels@gmail.com</p>
                                </div>
                                <div className="information">
                                    <FaPhoneAlt color="#3ec094" size={30} className="icon"/>
                                    <p>+639296604887</p>
                                </div>
                            </div>
    
                            <div className="social-media">
                                <p>Connect with us:</p>
                                <div className="social-icons">
                                    <a href="#facebook"><FaFacebookF /></a>
                                    <a href="#twitter"><FaTwitter /></a>
                                    <a href="#instagram"><FaInstagram /></a>
                                    <a href="#youtube"><FaYoutube /></a>
                                </div>
                            </div>
                        </div>
                        <div className="contact-form">
                            <span className="circle one"></span>
                            <span className="circle two"></span>
    
                            <form action="">
                                <h3 className="title">Contact Us</h3>
                                <div className="input-container">
                                    <input type="text" name="name" className="input" />
                                    <label for="">Full Name</label>
                                    {/* <span>Full Name</span> */}
                                </div>
                                <div className="input-container">
                                    <input type="email" name="email" className="input" />
                                    <label for="">Email</label>
                                    {/* <span>Email</span> */}
                                </div>
                                <div className="input-container">
                                    <input type="tel" name="phone" className="input" />
                                    <label for="">Phone</label>
                                    {/* <span>Phone</span> */}
                                </div>
                                <div className="input-container textarea">
                                    <textarea name="message" className="input" ></textarea>
                                    <label for="">Message</label>
                                    {/* <span>Message</span> */}
                                </div>
    
                                <input type="submit" value="Send" className="btn" />
                            </form>
                        </div>
                    </div>
                </div> 
                <Footer />
            </>
        )
    }
  }