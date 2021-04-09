import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import "./Navbar.css"
import HomeDropdown from "../components/Dropdowns/HomeDropdown"
import PagesDropdown from "../components/Dropdowns/PagesDropdown"
import ServicesDropdown from "../components/Dropdowns/ServicesDropdown"
import BlogsDropdown from "../components/Dropdowns/BlogsDropdown"

export default function Navbar() {

	const [click, setClick] = useState(false);
	const [Homedropdown, setHomeDropdown] = useState(false);
	const [Pagesdropdown, setPagesDropdown] = useState(false);
	const [Servicesdropdown, setServicesDropdown] = useState(false);
	const [Blogsdropdown, setBlogsDropdown] = useState(false);
  
	const closeMobileMenu = () => setClick(false);
  
	const onMouseEnterHome = () => {
	  if (window.innerWidth < 960) {
		setHomeDropdown(false);
	  } else {
		setHomeDropdown(true);
	  }
	};
  
	const onMouseLeaveHome = () => {
	  if (window.innerWidth < 960) {
		setHomeDropdown(false);
	  } else {
		setHomeDropdown(false);
	  }
	};

	const onMouseEnterPages = () => {
		if (window.innerWidth < 960) {
		  setPagesDropdown(false);
		} else {
		  setPagesDropdown(true);
		}
	  };
	
	  const onMouseLeavePages = () => {
		if (window.innerWidth < 960) {
		  setPagesDropdown(false);
		} else {
		  setPagesDropdown(false);
		}
	};


	const onMouseEnterServices = () => {
		if (window.innerWidth < 960) {
		  setServicesDropdown(false);
		} else {
		  setServicesDropdown(true);
		}
	  };
	
	  const onMouseLeaveServices = () => {
		if (window.innerWidth < 960) {
		  setServicesDropdown(false);
		} else {
		  setServicesDropdown(false);
		}
	  };


	  const onMouseEnterBlogs = () => {
		if (window.innerWidth < 960) {
		  setBlogsDropdown(false);
		} else {
		  setBlogsDropdown(true);
		}
	  };
	
	  const onMouseLeaveBlogs = () => {
		if (window.innerWidth < 960) {
		  setBlogsDropdown(false);
		} else {
		  setBlogsDropdown(false);
		}
	  };

	return (
		<div className = "Navbar">

			{/* LOGO and Heading */}
			<div className = "logo_heading">
				<div className="logo">
					<Link to="/">
						<img src={logo} alt = "MIDAS IIIT Delhi" />
					</Link>
				</div>
				<div className = "heading">
					<Link to="/" className = "heading_link">
						<h2>Midas IIITD</h2>
					</Link>
				</div>
			</div>


			{/* Options of Navbar */}
			<div className = "options">
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>


					<li className='nav-item'
						onMouseEnterHome={onMouseEnterHome}	
						onMouseLeaveHome={onMouseLeaveHome} >

						<Link to='/' className='nav-links'>
						Home <i className='fas fa-chevron-down' />
						</Link>
						{Homedropdown && <HomeDropdown />}

					</li>




					<li
						className='nav-item'
						onMouseEnterServices={onMouseEnterServices}
						onMouseLeaveServices={onMouseLeaveServices} >
						<Link
						to='/services'
						className='nav-links'
						onClick={closeMobileMenu}
						>
						Services <i className='fas fa-chevron-down' />
						</Link>
						{Servicesdropdown && <ServicesDropdown />}
					</li>
					<li className='nav-item'
						onMouseEnterPages={onMouseEnterPages}
						onMouseLeavePages={onMouseLeavePages}
					>
						<Link
						to='/pages'
						className='nav-links'
						onClick={closeMobileMenu}
						>
						Pages <i className='fas fa-chevron-down' />
						</Link>
						{Pagesdropdown && <PagesDropdown />}
					</li>
					<li className='nav-item'
						onMouseEnterBlogs={onMouseEnterBlogs}
						onMouseLeaveBlogs={onMouseLeaveBlogs}
					>
						<Link
						to='/blogs'
						className='nav-links'
						onClick={closeMobileMenu}
						>
						Blogs <i className='fas fa-chevron-down' />
						</Link>
						{Blogsdropdown && <BlogsDropdown />}
					</li>
					<li className='nav-item'>
						<Link
						to='/contacts'
						className='nav-links'
						onClick={closeMobileMenu}
						>
						Contacts
						</Link>
					</li>
				</ul>
			</div>



			{/* Search and Hamburger */}
			<div className = "search_bars">
				<div className="search">
					<i class="far fa-search"></i>
				</div>

				<div className="bars">
					<i class="fal fa-bars"></i>
				</div>
			</div>

		</div>
	)
}
