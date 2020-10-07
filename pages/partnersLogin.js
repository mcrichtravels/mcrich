import Nav from "./components/nav"
import Footer from "./components/footer"
import emailjs from 'emailjs-com';

const INITIAL_STATE = {
    first_name: '',
    last_name: '',
    country: '',
    phone: '',
    business: '',
    City: '',
    website: '',
    email: '',
    option: '',
    message: '',
    error: ''
}

export default class PartnersLogin extends React.Component{
    constructor(props) {
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    onSubmit = event => {
        const {
            first_name,
            last_name,
            country,
            phone,
            business,
            City,
            website,
            email,
            option,
            message
        } = this.state;
        const templateId = 'template_5aj4fki';

        const country_final = '';

        if(country === 1){
            country_final = Philippines
        }
        
        const variables ={
            to_name: 'mcrichtravels@gmail.com',
            from_name: email,
            first_name: first_name,
            last_name: last_name,
            country: country_final,
            phone: phone,
            business_name: business,
            city: City,
            website: website,
            option: option,
            message: message
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
            first_name, last_name, country, phone, business, City, website, email, option, message, error, success
        } = this.state;

        const isInvalid = first_name === '' || phone === '' || business === '' || website === '' ||  message === '' || email === '' || phone === '';
        return(
            <>
                <Nav />
                <main>
                    <div className="divider">
                        <div className="left-side"></div>
                        <div className="right-side">
                            <div className="form">
                                <h2>Dive in with us and explore the diverse market for tourism of the Queen City of the South</h2>
                                <small>OUR JOURNEY BEGINS HERE:</small>
                                <form onSubmit={this.onSubmit}>
                                    <div className="input-container">
                                        <input type="text" name="first_name" required value={first_name} onChange={this.onChange}/>
                                        <label>First Name</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="text" name="last_name" required value={last_name} onChange={this.onChange}/>
                                        <label>Last Name</label>
                                    </div>
                                    <div className="input-container">
                                        <select required value={country} name="country" onChange={this.onChange}>
                                            <option value="0">--[Select]--</option>
                                            <option value="1">Philippines</option>
                                        </select>
                                        <label>Country</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="tel" name="phone" required value={phone} onChange={this.onChange}/>
                                        <label>Phone</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="text" name="business" required value={business} onChange={this.onChange}/>
                                        <label>Business Name</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="text" name="City" required value={City} onChange={this.onChange}/>
                                        <label>City</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="url" name="website" required value={website} onChange={this.onChange}/>
                                        <label>Website</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="email" name="email" required value={email} onChange={this.onChange}/>
                                        <label>Email</label>
                                    </div>
                                    <div className="input-container">
                                        <select required value={option} name="option" onChange={this.onChange}>
                                            <option value="0">--[Select]--</option>
                                            <option value="1">I want to sell my products on Mcrich</option>
                                            <option value="2">I have marketing opportunities for Mcrich</option>
                                        </select>
                                        <label></label>
                                    </div>
                                    <div className="input-container">
                                        <textarea value={message} name="message" onChange={this.onChange}></textarea>
                                        <label>Message</label>
                                    </div>

                                    <input type="submit" value="Send" className="btn" disabled={isInvalid}/>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}