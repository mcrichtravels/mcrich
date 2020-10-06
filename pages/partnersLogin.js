import Nav from "./components/nav"
import Footer from "./components/footer"

export default class PartnersLogin extends React.Component{
    render(){
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
                                <form>
                                    <div className="input-container">
                                        <input type="text" name="firstname" required />
                                        <label>First Name</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="text" name="lastname" required />
                                        <label>Last Name</label>
                                    </div>
                                    <div className="input-container">
                                        <select required>
                                            <option>--[Select]--</option>
                                            <option>Philippines</option>
                                        </select>
                                        <label>Country</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="tel" name="phone" required />
                                        <label>Phone</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="text" name="buss-name" required />
                                        <label>Business Name</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="text" name="city" required />
                                        <label>City</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="url" name="website" required />
                                        <label>Website</label>
                                    </div>
                                    <div className="input-container">
                                        <input type="email" name="email" required />
                                        <label>Email</label>
                                    </div>
                                    <div className="input-container">
                                        <select required>
                                            <option>--[Select]--</option>
                                            <option>I want to sell my products on Mcrich</option>
                                            <option>I have marketing opportunities for Mcrich</option>
                                        </select>
                                        <label></label>
                                    </div>
                                    <div className="input-container">
                                        <textarea></textarea>
                                        <label>Message</label>
                                    </div>

                                    <input type="submit" value="Send" className="btn"/>
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