import React from 'react';
import Link from 'next/link'

// import logo from '../../assets/img/main-logo.png';

const Nav = () =>{
	return(
		<>	
			<nav className="main-nav">
				<div className="logo"><Link href="/"><a>Mcrich Travels</a></Link></div>
				<ul>
				  	{/* <li className="float-left"><Link href="/"><a>Mcrich Travels</a></Link></li> */}
				    <li><Link href="/about"><a>About Us</a></Link></li>
					<li><Link href="/tours"><a>Tours</a></Link></li>
					<li><Link href="/contact"><a>Contact</a></Link></li>
					<li><Link href="/login"><a>Login</a></Link></li>
				</ul>
			</nav>	
		</>
	)
}

export default Nav;