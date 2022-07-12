import React, { useRef, useState } from "react";
import "./register.scss";
function Register() {
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const emailRef=useRef()
  const passwordRef=useRef()
  function handelEmail()
  {
    setEmail(emailRef.current.value)
  }
  function handelPassword()
  {
    setPassword(emailRef.current.value)
  }

  return (
    <div className="register">
      <div className="top">
          <div className="wrapper">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="netflix" className="logo" />
        <button className="loginButton">Sign In</button>
          </div>

      </div>
      <div className="container">
          <h1>Unlimted movie ,Tv show ,and more.</h1>
          <h2>watch anywhere , cancel anytime</h2>
          <p>
              Ready to watch ? enter your email to creat or restart your membership
          </p>
          {!email?(
               <div className="input">
               <input type="email" placeholder="enter your email address" ref={emailRef}/>
               <button className="registerButton" onClick={handelEmail}>Get Start</button>
           </div>
          ):(
            <div className="input">
            <input type="password" placeholder="enter your password " ref={passwordRef}/>
            <button className="registerButton"  onClick={handelPassword}> Start</button>
        </div>
          )}
         
      </div>
    </div>
  );
}

export default Register;
