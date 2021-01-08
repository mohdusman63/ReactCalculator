import React, { useState } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

const Login = () => {
const [username,setUsername]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const PostData=()=>{

  fetch("http://localhost:5000/signup",{
    method:"post",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      username,
      email,
      password,
    })
  }).then(res=>res.json())
  .then(data=>{
    if(data.error){
      alert('something wrong')
    }
    else{
      alert('saved sucessfully')
    }
  })
}

return (
       <>
        {username}

          <div className="signup-form">
              <h2>Sign Up</h2>

              <div className="form-group">
              <input type="text" className="form-control" name="username" placeholder="Username" required="required"
              onChange={(e)=>setUsername(e.target.value)}/>
         </div>
         <div className="form-group">
            	<input type="email" className="form-control" name="email" placeholder="Email Address" required="required"
                onChange={(e)=>setEmail(e.target.value)}/>
         </div>
         <div className="form-group">
            <input type="password" className="form-control" name="password" placeholder="Password" required="required"
              onChange={(e)=>setPassword(e.target.value)}/>
         </div>


       <div className="form-group">
            <button type="submit" className="btn btn-primary btn-lg" onClick={()=>PostData()}>Sign Up</button></div>
       </div>

<div className="text-center">Already have an account? Login here</div>

        </>
    )

}
export default Login
