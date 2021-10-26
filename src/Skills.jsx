import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Skills = () => {
	return (
		<>
		<div className="container">
		     <div>
				 <div className="bg-warning text-white p-2">
					 <h1 className="text-success">My Skiils</h1>
				 </div>
				 <div className="card card-body">
			<div>
				
	
				<p className="text-muted">Good skiils for this job a web developer in company is a development</p>
				<hr />
				<p>HTML</p>
				<div className="progress">
					<div className="p-2 progress-bar progress-bar-striped progress-bar-animated" 
					style={{width:"100%"}} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                     100%
					</div>
				</div>
				<p>CSS</p>
				<div className="progress">
					<div className="progress-bar progress-bar-striped progress-bar-animated" 
					style={{width:"70%"}} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                      70%
					</div>
				</div>
				<p>JAVA SCRIPT</p>
				<div className="progress">
					<div className="progress-bar progress-bar-striped progress-bar-animated" 
					style={{width:"80%"}}
					aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                        80%
					</div>
				</div>
				<p>JQUERY</p>
				<div className="progress">
					<div className="progress-bar progress-bar-striped progress-bar-animated" 
					style={{width:"60%"}}
					aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
					60%

					</div>
				</div>
				<p>REACT JS</p>
				<div className="progress">
					<div className="progress-bar progress-bar-striped progress-bar-animated" 
					style={{width:"75%"}}
					aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                        75%
					</div>
				</div>
			</div>

		</div>
			 </div>
		</div>
		</>
	)
}

export default Skills
