import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Resume from './Resume'; 
import Contact from './Contact';
import About from './About';
import  {NavLink} from 'react-router-dom';

	 

const Button = () => {
	

	return (
		<>
		 <div className="d-flex flex-row align-items-start">
		       <NavLink exact to="/home" style={{
				   textDecorationLine:"none"
			   }} ><Home /></NavLink>  
		       <NavLink exact to="/resume" style={{
				   textDecorationLine:"none"}}><Resume /></NavLink>         
		       <NavLink exact to="/contact"
			    style={{
				   textDecorationLine:"none"}} ><Contact /></NavLink>         
		       <NavLink exact to="/about"
			    style={{
				   textDecorationLine:"none"}} ><About /></NavLink>         

							  

	     </div>
			
		</>
		
	)
}

export default Button
