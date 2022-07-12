import React, { useRef, useState } from "react";
import "./login.scss";
function Login() {
  const [editForm, setEditForm] = useState({
    email: "",
    password: ""
  });
  const handelFoormSubmit=(event)=>{
    event.preventDefault();
    const emailUser=event.target.getAttribute("name")
    const passwordUser=event.target.value
    const newLogin=[...editForm]
    newLogin[emailUser]=passwordUser
    setEditForm(newLogin)
console.log(newLogin)
   
  }
const handelFormCange=(event)=>{
  event.preventDefault();
  const atributename =event.target.getAttribute("name")
  const valueName=event.target.value
  const newLogion=[editForm]
  newLogion[atributename]=valueName
  console.log(newLogion)

}
  
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="netflix"
            className="logo"
          />
        </div>
      </div>
      <div className="container">
        <form onSubmit={handelFoormSubmit}>
          <h1>Sign In</h1>
          <input type="email" placeholder="emali" name="email" onChange={handelFormCange}/>
          <input type="password" placeholder="password" name="password" onChange={handelFormCange}/>
          <button className="sigInButton">Sign In</button>
          <span>new  to netflix?  <b> Sign UP now</b> </span>
          <small>This page is protected by kingSoli reCAPTCA to ensure you're not a bot . <b>learn more</b></small>
        </form>
      </div>
    </div>
  );
}

export default Login;
