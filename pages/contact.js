import Nav from "./components/nav"
import Footer from "./components/footer"
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter,
    FaInstagram, FaYoutube, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';
    import emailjs from 'emailjs-com';

    const INITIAL_STATE = {
        fullname: '',
        email: '',
        phone: '',
        message: '',
        error: '',
    }

class Contact extends React.Component {


    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    onSubmit = event => {
        const {fullname, email,phone,message} = this.state;
        const templateId = 'template_mqzrucr';

        
        const variables ={
            full_name: fullname,
            message: message,
            phone: phone,
            to_name: 'mcrichtravels@gmail.com',
            from_name: email,
        }

        console.log(variables);

        emailjs.send('service_v549dai', templateId, variables, 'user_7q6ASfxJDulWt0xuIM59z')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    
        
        
        event.preventDefault();
    }

    onChange = event => {
        this.setState({ [event.target.name]: event.target.value});
    };
    render(){
        const {
            fullname, email, phone, message, error, success
        } = this.state;

        const isInvalid = email == '' || phone == '';
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
    
                            <form onSubmit={this.onSubmit}>
                                <h3 className="title">Contact Us</h3>
                                <div className="input-container">
                                    <input type="text" name="fullname" className="input" value={fullname} onChange={this.onChange}/>
                                    <label for="">Full Name</label>
                                    {/* <span>Full Name</span> */}
                                </div>
                                <div className="input-container">
                                    <input type="email" name="email" className="input" value={email} onChange={this.onChange}/>
                                    <label for="">Email</label>
                                    {/* <span>Email</span> */}
                                </div>
                                <div className="input-container">
                                    <input type="tel" name="phone" className="input" value={phone} onChange={this.onChange}/>
                                    <label for="">Phone</label>
                                    {/* <span>Phone</span> */}
                                </div>
                                <div className="input-container textarea">
                                    <textarea name="message" className="input" value={message} onChange={this.onChange} ></textarea>
                                    <label for="">Message</label>
                                    {/* <span>Message</span> */}
                                </div>
    
                                <input value="Send" className="btn" type="submit" disabled={isInvalid}/>
                                {error && <p>{error.message}</p>}
                                {success && <p>{success.message}</p>}
                            </form>
                        </div>
                    </div>
                </div> 
                <Footer />
            </>
        )
    }
  }

export default Contact