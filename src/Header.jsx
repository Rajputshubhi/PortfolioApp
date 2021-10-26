import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaImage,FaFacebookSquare,FaInstagramSquare,
	FaGithubSquare,FaTwitterSquare} from 'react-icons/fa';
import shubham from './shubham.jpg';
import Button  from './Button';



const Header = () => {
	return (
		<>
		<header>
		<h4 className="bg-info head "><FaImage className="logos"/>
		<span className="logi">PROFILE</span></h4>
			  <div className="container mt-4">

				   <div className="row">
					    <div className=" col-lg-4 col-md-4">
							 <img src={shubham} alt="profile" />
						</div>
						<div className="col-lg-8 col-md-8">
                           <div className="d-flex flex-column bg-dark p-4">
							    <div className="d-flex flex-row text-white justify-content-between align-items-center ">
									<h2 className="display-4">Shubham Rana</h2>
									<FaFacebookSquare />
									<FaInstagramSquare />
									<FaGithubSquare />
									<FaTwitterSquare />
								</div>
						   </div>
						   <div className="bg-black text-white p-2">
						   I am web developer ........./////
						   </div>



						  <Button />
			
						   


						</div>
				   </div>
			  </div>
		</header>
			
		</>
	)
}

export default Header
