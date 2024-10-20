import React, { useState } from 'react'
import "../components/Signin.css";

function Signin() {
    const [users, setUsers] = useState([]);
    const [inputEmail, setInputEmail] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const [personName,setPersonName] = useState("") 
     

     function SignIn (e){
        e.preventDefault();
        

        const userFound =  users.find((user)=> user.email === 
            inputEmail && user.password === inputPassword )
       if (userFound){
        alert(`Welcome, ${userFound.userName}!`);
        setPersonName(userFound.userName);
       }
       else{
        alert("Invalid Email and Password");
       }

       
     }


  return (
    <div className="signin-container ">
      <div className="form-box">
        <h2>Sign In</h2>
        <form onSubmit={SignIn}>
          
         
          <div className="input-box">
            <input
              value={inputEmail}
              type="email"
              name="email"
              onChange={(e) => {
                setInputEmail(e.target.value);
              }}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <input
              value={inputPassword}
              type="password"
              name="password"
              onChange={(e) => {
                setInputPassword(e.target.value);
              }}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <center>
          <p>Mr{personName} Welcome</p>
          </center>
          <button className="signbtn" onClick={SignIn} type="submit">
            Sign In
          </button>
        </form>
       
      </div>

      
    </div>
  )
}

export default Signin
