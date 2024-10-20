import React, { useState } from "react";
import "../components/Signup.css";

function Signup() {
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);

  function SignUp(e) {
    e.preventDefault();
    

    
    

    const userFound = users.find((user)=> user.email === email )
    if(!userFound){
      setUsers([...users, { name, userName, email, password }]);
      alert("user registered successfully")
    }
    else{
      alert("user already exist")
    }

    setName("");
    setUserName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div className="signup-container ">
      <div className="form-box">
        <h2>Sign Up</h2>
        <form onSubmit={SignUp}>
          <div className="input-box">
            <input
              value={name}
              type="text"
              name="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              required
            />
            <label htmlFor="name">Full Name</label>
          </div>
          <div className="input-box">
            <input
              value={userName}
              type="text"
              name="userName"
              onChange={(e) => {
                setUserName(e.target.value);
              }}
              required
            />
            <label htmlFor="userName">UserName</label>
          </div>
          <div className="input-box">
            <input
              value={email}
              type="email"
              name="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <input
              value={password}
              type="password"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label htmlFor="password">Password</label>
          </div>
          <button className="signbtn" value="submit" type="submit">
            Sign Up
          </button>
        </form>
        <div className="user-map">
        {users.map((users, index) => (
          <div key={index}>
            <h2>{index + 1}</h2>
            
            <p>Name: {users.name}</p>
            <p>Name: {users.userName}</p>
            <p>Email: {users.email}</p>
            <p>Password: {users.password}</p>
          </div>
        ))}
      </div>
      </div>

      
    </div>
  );
}

export default Signup;
