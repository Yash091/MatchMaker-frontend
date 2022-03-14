import React from "react";
import "./Signup.css";
import logo from "./logo.png"
import couple from "./couple.png"

function Signup() {
  return (
  <div className="sign-up-container">
    <div className = "register-intro">
      <div className = "logo-name">
        <img className = "logo" src = {logo} />
        <h3 className = "heading">Match Founder</h3>
      </div>
      <h6 className = "tag-line">A few clicks away from finding your soul mate</h6>
      <img className="couple-img" src = {couple} />
    </div>

    <div className = "register-fields">
      <h2 className="reg-heading">Register</h2>
      <p className="reg-tagline">Let’s get you all set up so you can verify your personal account and begin setting up your profile</p>

      <form className = "sign-up-form">
        <table>
          <tr>
            <td><label htmlFor="name">Name:</label></td>
            <td><label htmlFor="email">Email Address:</label></td>
          </tr>

          <tr>
            <td><input type="text" placeholder="Name" name="name" id="name"/></td>
            <td><input type="email" placeholder="Email" name="email" id="email"/></td>
          </tr>

          <tr>
            <td><label htmlFor="mobile">Mobile:</label></td>
            <td><label htmlFor="dob">Date of birth:</label></td>
          </tr>

          <tr>
            <td><input type="tel" placeholder="Mobile no." name="mobile" id="mobile"/></td>
            <td><input type="date" placeholder="D.O.B" name="dob" id="dob"/></td>
          </tr>

          <tr>
            <td><label htmlFor="gender">Gender:</label></td>
            <td><label htmlFor="address">Address:</label></td>
          </tr>

          <tr>
            <td><input type="text" placeholder="Gender" name="gender" id="gender"/></td>
            <td><input type="text" placeholder="Address" name="address" id="address"/></td>
          </tr>

          <tr>
            <td><label htmlFor="profession">Profession:</label></td>
            <td><label htmlFor="religion">Religion:</label></td>
          </tr>

          <tr>
            <td><input type="text" placeholder="Profession" name="profession" id="profession"/></td>
            <td><input type="text" placeholder="Religion" name="religion" id="religion"/></td>
          </tr>

          <tr>
            <td><label htmlFor="tongue">Mother Tounge:</label></td>
            <td><label htmlFor="about yourself">Description:</label></td>
          </tr>

          <tr>
            <td><input type="text" placeholder="Mother-Tongue" name="mothertongue" id="tongue"/></td>
            <textarea rows="1" cols="20" placeholder="About yourself....." name="description"/>
          </tr>

          <tr>
            <td><label htmlFor="password">Password:</label></td>
            <td><label htmlFor="cpassword">Confirm Password:</label></td>
          </tr>

          <tr>
            <td><input type="password" placeholder="Password" name="password" id="password"/></td>
            <td><input type="password" placeholder="Confirm Password" name="cpassword" id="cpassword"/></td>
          </tr>
        </table>
        <button type="submit">Create Account</button>
      </form>
      <h6>Already have an account</h6>
    </div>
  </div>
  );
}

export default Signup;
