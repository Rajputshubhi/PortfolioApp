import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css"; 
import Header from './Header';
import Skills from './Skills.jsx'; 
//  import Button from './Button';
import Footer from './Footer';
import { Route,Switch } from 'react-router';
import Reskills from './Reskills';
import Coskills from './Coskills';
import Aboskills from './Aboskiils';
// import Home from './Home';



const Portfolio = () => {
	return (
		<>
		<Header />
        
		<Switch >
			<Route exact path="/home" component={()=>
				<Skills />
			} />
			<Route exact path="/resume" component={()=>
				<Reskills />
			} />
			<Route exact path="/contact" component={()=>
				<Coskills />
			} />
			<Route exact path="/about" component={()=>
				<Aboskills />
			} />
			
			

		</Switch>
		<Footer />
		</>
	)
}

export default Portfolio