import React, {useState} from 'react';
import "./Register.css";
import axios from 'axios';

const Register = () => {
  const [user,setUser] = useState({
    name: "",
    email: "",
    password: "",
    rePassword: "",
  })
  const HandelInput = e => {
    const {name,value} = e.target;
    setUser({
      ...user,
      [name]:value
    })
  }
  const registerToDB = ()=> {
    const {name, email, password,rePassword} = user;
    
    if (name && email && password && (password === rePassword)) {
      axios.post("http://localhost:9000/register",user)
      .then(res=>console.log(res));
    } else {
      alert("Invalid input");
    }
  }
  
  return (
    <div className='Container'>
        <div className='InnerContainer'>
            <h1>Register</h1>
            <input type="text" placeholder='Your Name' className='LRInput' name="name" value={user.name} onChange={HandelInput}/>
            <input type="text" placeholder='Your Email' className='LRInput' name="email" value={user.email} onChange={HandelInput}/>
            <input type="password" placeholder='Your Password' className='LRInput' name="password" value={user.password} onChange={HandelInput}/>
            <input type="password" placeholder='Your Re-enter Password' className='LRInput' name="rePassword" value={user.rePassword} onChange={HandelInput}/>
            <button className='btn LRBtn' onClick={registerToDB}>Register</button>
            <span>or</span>
            <button className='btn LRBtn'>Login</button>
        </div>
    </div>
  )
}

export default Register
