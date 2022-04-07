import React from "react";
import "./Signup.css";
import logo from "./logo.png"
import couple from "./couple.png"
import blank from "./blank.png"
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { createUser, uploadFile } from "../../../service/api";

function Signup() {
  const initial = {
    name: "",
    email: "",
    password: "",
    cpassword: "",
    mobile: "",
    dob: "",
    gender: "",
    location: "",
    religion: "",
    mothertongue: "",
    description: "",
    picture: "",
  };
  const history = useHistory();
  const [user, setUser] = useState(initial);
  const [imageURL, setImageURL] = useState("");
  const [file, setFile] = useState("");
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const image = await uploadFile(data);
        user.picture = image.data;
        setImageURL(image.data);
      }
    };
    getImage();
  }, [file]);

  const saveUser = async (e) => {
    e.preventDefault();
    const data = await createUser(user);
    try {
      if (data.status === 200) {
        if (data.data !== "Registration successfull") window.alert(data.data);
        else history.push("/login");
      } else throw new Error("Server Error:500");
    } catch (err) {
      window.alert(err);
    }
  };
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
      <div className = "form-and-img">
        <form className = "sign-up-form">
          <table>
            <tr>
              <td><label htmlFor="name">Name:</label></td>
              <td><label htmlFor="email">Email Address:</label></td>
            </tr>

            <tr>
              <td><input type="text" placeholder="Name" name="name" id="name" onChange={(e)=>handleChange(e)}/></td>
              <td><input type="email" placeholder="Email" name="email" id="email" onChange={(e)=>handleChange(e)}/></td>
            </tr>

            <tr>
              <td><label htmlFor="mobile">Mobile:</label></td>
              <td><label htmlFor="dob">Date of birth:</label></td>
            </tr>

            <tr>
              <td><input type="tel" placeholder="Mobile no." name="mobile" id="mobile" onChange={(e)=>handleChange(e)}/></td>
              <td><input type="date" placeholder="D.O.B" name="dob" id="dob" onChange={(e)=>handleChange(e)}/></td>
            </tr>

            <tr>
              <td><label htmlFor="gender">Gender:</label></td>
              <td><label htmlFor="address">Address:</label></td>
            </tr>

            <tr>
              <td><input type="text" placeholder="Gender" name="gender" id="gender" onChange={(e)=>handleChange(e)}/></td>
              <td><input type="text" placeholder="Address" name="address" id="address" onChange={(e)=>handleChange(e)}/></td>
            </tr>

            <tr>
              <td><label htmlFor="profession">Profession:</label></td>
              <td><label htmlFor="religion">Religion:</label></td>
            </tr>

            <tr>
              <td><input type="text" placeholder="Profession" name="profession" id="profession" onChange={(e)=>handleChange(e)}/></td>
              <td><input type="text" placeholder="Religion" name="religion" id="religion" onChange={(e)=>handleChange(e)}/></td>
            </tr>

            <tr>
              <td><label htmlFor="tongue">Mother Tounge:</label></td>
              <td><label htmlFor="about yourself">Description:</label></td>
            </tr>

            <tr>
              <td><input type="text" placeholder="Mother-Tongue" name="mothertongue" id="tongue" onChange={(e)=>handleChange(e)}/></td>
              <textarea rows="1" cols="20" placeholder="About yourself....." name="description" onChange={(e)=>handleChange(e)}/>
            </tr>

            <tr>
              <td><label htmlFor="password">Password:</label></td>
              <td><label htmlFor="cpassword">Confirm Password:</label></td>
            </tr>

            <tr>
              <td><input type="password" placeholder="Password" name="password" id="password" onChange={(e)=>handleChange(e)}/></td>
              <td><input type="password" placeholder="Confirm Password" name="cpassword" id="cpassword" onChange={(e)=>handleChange(e)}/></td>
            </tr>
          </table>
          <button className ="create-acc" type="submit" onClick={(e)=>saveUser(e)}>Create Account</button>
        </form>
      
        <div className="img-uplaod">
        <img src={imageURL || blank} />
          <label htmlFor="regimg">
            <i className="fa fa-plus-circle"></i>Upload image
          </label>
          <input type="file" className="imgfile" id="regimg" onChange={(e) => setFile(e.target.files[0])}/></div>
        </div>

      </div>
  </div>
  );
}

export default Signup;
