import React ,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {FaUser,FaAt,FaPhone} from 'react-icons/fa';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Coskills = () => {

	const [user,setUser]=useState({
		name:"",
		email:"",
		phone:"",


	});

	let name,value;
const getData=(event)=>{
	name=event.target.name;
	value=event.target.value;
	setUser({ ...user, [name]: value });

	
}
const postData=async()=>{
const {name,email,phone}=user;
if(name && email && phone){
	const res=await fetch("https://portfolipro-default-rtdb.firebaseio.com/portfoliopro.json",
	{
		method:"POST",
		headers:{
			"Content-Type" :"application/json",
		},
		body:JSON.stringify({
			name,
			email,
			phone,
		}),
	});
	if(res){
		setUser({
			name:"",
			email:"",
			phone:"",
		})
		toast.error("Data stored",{
			position:"top-center"
		});

}

	
	
	}
	else{
		toast.error("plz.. fill data",{
		  position: "top-center"
		});
	  }
	
}

	return (
		<>
		<div className="container">
		<div className="bg-danger text-white p-2">
		<h1 className="text-warning text-center "> Contact number</h1>
		</div>
		<div className="p-5 contact-div">
			<form method="POST">
				<div className="input-group">
				<span className="input-group-addon bg-info p-2">
					<FaUser />
				</span>
				<input type="text"
				name="name"
				value={user.name}
				onChange={getData}
				 placeholder="User name" 
				 className="form bg-info "
				 autoComplete="off"
				  required />

				</div>


				<div className="input-group">
				<span className="input-group-addon bg-danger p-2">
					<FaAt />
				</span>
				<input type="text"
				name="email"
				value={user.email}
				onChange={getData}

				 placeholder="Email"
				  className="form bg-danger"
				  autoComplete="off"
				  required  />

				</div>


				<div className="input-group">
				<span className="input-group-addon bg-warning p-2">
					<FaPhone />
				</span>
				<input type="text"
				name="phone"
				value={user.phone}
				onChange={getData}

				 placeholder="contact number"
				  className="form bg-warning"
				  autoComplete="off"
				  required  />

				</div>
			</form>
		<button className="btn btn-success mt-3 btu" onClick={postData} >Submit</button>
		<ToastContainer />

		</div>
	
		</div>
		
		
		
			
		</>
	)
}

export default Coskills
