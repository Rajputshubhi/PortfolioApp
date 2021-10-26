import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaDownload} from 'react-icons/fa';
import DownloadLink from 'react-download-link';

const Footer = () => {
	return (
		<>
			<footer>
		<div className="container">
		<div className="bg-dark p-3 text-center">
		<div className="btn btn-info">
		<FaDownload />
		<DownloadLink
		className="text-white"
		label="Download"
		filename="shubhamprofile.pdf"
		exportFile={()=>
		Promise.resolve("My cached data")} style={{textDecoration:"none"}}/>
			

		</div>
		
		</div>
		</div>
			
		</footer>
		</>
	)
}

export default Footer
