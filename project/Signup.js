import React from 'react';
import './Signup.css';
function Signup() {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form>
        <label>First Name:</label>
        <input type="text" name="first-name" required />
        <label>Last Name:</label>
        <input type="text" name="last-name" required />
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Phone Number:</label>
        <input type="tel" name="phone-number" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <label>Confirm Password:</label>
        <input type="password" name="confirm-password" required />
        <button type="submit" >Sign Up</button>
        <label>already have an account? <button type='submit' className='bt1'>login</button> </label>
      </form>
    </div>
  );
}

export default Signup;
