import React from 'react';
import './Login.css';
import Signup from './Signup';

function Login() {
  return (
    <div className="login">
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Login</button>
        <label> you have`t an account?: <button type='submit' className='bt2' onClick={Signup}>signup</button> </label> 
        
      </form>
    </div>
  );
}

export default Login;
