import React from 'react';
import "./Home.css";

const Home = () => {
  return (
    <div className='Container'>
        <div className='InnerHome'>
            <h1 className='HomeHead'>Hello, Demon</h1>
            <p className='HomeMail'>demon@gmail.com</p>
            <button className='btn HomeBtn'>Logout</button>
        </div>
    </div>
  )
}

export default Home
