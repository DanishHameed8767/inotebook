import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Signup = (props) => {
    const [credentials, setCredentials] = useState({name:"",email: "", password: "",cpassword:""}) 
    let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const {name,email,password} = credentials
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name,email,password})
        });
        const json = await response.json()
        console.log(json);
        if (json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken); 
            navigate("/");
            props.showAlert("Account created successfully","success")
        }
        else{
          props.showAlert("Invalid Credentials","danger")
        }
    }

    const onChange = (e)=>{
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }
    return (
        <div className='container mt-5'>
            <form onSubmit={handleSubmit}>
  <div className="form-group">
    <label htmlFor="email">Name</label>
    <input
      type="text"
      className="form-control"
      id="name"
      onChange={onChange}
      aria-describedby="emailHelp"
      placeholder="Enter name"
      name='name'
    />
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input
      type="email"
      className="form-control"
      id="email"
      onChange={onChange}
      aria-describedby="emailHelp"
      placeholder="Enter email address"
      name='email'
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Password</label>
    <input
      type="password"
      className="form-control"
      id="password"
      placeholder="Password"
      onChange={onChange}
      name='password'
      required={true}
      minLength={5}
    />
  </div>
  <div className="form-group">
    <label htmlFor="password">Confirm Password</label>
    <input
      type="password"
      className="form-control"
      id="cpassword"
      placeholder="Password"
      onChange={onChange}
      name='cpassword'
      required={true}
      minLength={5}
    />
  </div>
  <button type="submit" className="btn btn-primary" >
    Submit
  </button>
</form>

        </div>
    )
}

export default Signup
