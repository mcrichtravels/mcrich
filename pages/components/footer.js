import React from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebookF, FaTwitter,
    FaInstagram, FaYoutube, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import Link from 'next/link'

// import logo from '../../assets/img/main-logo.png';

const Footer = () =>{
	return(
		<>	
			<footer className="footer">
                <div className="footer-left">
                    {/* <img src="../../assets/img/main-logo.png" alt="main-logo" /> */}
                    <h1>Mcrich Travels</h1>
                    <p>Come visit the South of Cebu and experience the beautiful sights and experience nature at its best.</p>
                    <div className="socials">
                        <a href="#facebook"><FaFacebookF className="icons"/></a>
                        <a href="#twitter"><FaTwitter className="icons"/></a>
                        <a href="#instagram"><FaInstagram className="icons"/></a>
                        <a href="#youtube"><FaYoutube className="icons"/></a>
                    </div>
                </div>
                <ul className="footer-right">
                    <li>
                        <h2>Tours</h2>
                        <ul className="box">
                            <li><Link href="/"><a>Badian Canyoneering</a></Link></li>
                            <li><Link href="/"><a>Kawasan Waterfalls Private Tour</a></Link></li>
                            <li><Link href="/"><a>Moalboal Island Hopping</a></Link></li>
                            <li><Link href="/"><a>Oslob Whaleshark Watching</a></Link></li>
                        </ul>
                    </li>
                    <li className="address">
                        <h2>Address</h2>
                        <ul className="box">
                            <li><Link href="/"><a>Badian,6031</a></Link></li>
                            <li><Link href="/"><a>Cebu Philippines</a></Link></li>
                        </ul>
                    </li>
                    <li>
                        <h2>Partners</h2>
                        <ul className="box">
                            <li><Link href="/"><a>Partner 1</a></Link></li>
                            <li><Link href="/partnersLogin"><a>Be our Partner</a></Link></li>
                        </ul>
                    </li>
                </ul>
                <div className="footer-bottom">
                    <p>&copy; 2020 Copyright, Mcrich Travels</p>
                </div>
            </footer>	
		</>
	)
}

export default Footer;