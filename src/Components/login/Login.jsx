import React,{useState} from 'react'
import "./Login.css"

const Login = () => {
  const [Loger,setLoger] = useState({
    email:"",
    password:""
  })
  const HandelLogin = e => {
    const {name, value} = e.target;
    setLoger({
      ...Loger,
      [name]:value
    })
  }
  return (
    <div className='Container'> 
      <div className='InnerContainer'>
        <h1 className='LogingHead'>Login</h1>
        <input type="email" placeholder='Your Email' className='LRInput' name="email" value={Loger.email} onChange={HandelLogin}/>
        <input type="password" placeholder='Your Password' className='LRInput' name="password" value={Loger.password} onChange={HandelLogin}/>
        <button className='btn LRBtn'>Login</button>
        <span>or</span>
        <button className='btn LRBtn'>Register</button>
      </div>
    </div>
  )
}

export default Login
