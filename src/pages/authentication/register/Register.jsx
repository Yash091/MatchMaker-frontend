import "./Register.css";
import blank from "./blank.png";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import { createUser , uploadFile } from "../../../service/api";

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

const Register = () => {
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
    <>
      <div className="reg-container">
        <div className="reg-cont1">
          <div>Register</div>
          <div className="reg-img">
            <img src={imageURL || blank} />
          </div>
          <div className="reg-addimg">
            <label htmlFor="regimg">
              <i className="fa fa-plus-circle"></i>
              Upload image
            </label>
            <input
              type="file"
              className="imgfile"
              id="regimg"
              onChange={(e) => setFile(e.target.files[0])}
            />
          </div>
        </div>
        <div className="reg-cont2">
          <form className="reg-form">
            <table>
              <tr>
                <td>
                  <label htmlFor="name">Name:</label>
                </td>
                <td>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    id="name"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="email">Email Address:</label>
                </td>
                <td>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="password">Password:</label>
                </td>

                <td>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    id="password"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="cpassword">Confirm Password:</label>
                </td>

                <td>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="cpassword"
                    id="cpassword"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="mobile">Mobile:</label>
                </td>

                <td>
                  <input
                    type="tel"
                    placeholder="Mobile no."
                    name="mobile"
                    id="mobile"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="dob">Date of birth:</label>
                </td>

                <td>
                  <input
                    type="date"
                    placeholder="D.O.B"
                    name="dob"
                    id="dob"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label htmlFor="gender">Gender:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="gender"
                    id="gender"
                    placeholder="Gender"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="address">Address:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="address"
                    id="address"
                    placeholder="Address"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="profession">Profession:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="profession"
                    id="profession"
                    placeholder="Profession"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="religion">Religion:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="religion"
                    id="religion"
                    placeholder="Religion"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="tongue">Mother Tongue:</label>
                </td>
                <td>
                  <input
                    type="text"
                    name="mothertongue"
                    id="tongue"
                    placeholder="Mother-Tongue"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label>Description:</label>
                </td>
                <td>
                  <textarea
                    rows="4"
                    cols="20"
                    placeholder="About yourself....."
                    name="description"
                    onChange={(e) => handleChange(e)}
                  />
                </td>
              </tr>
            </table>
            <button type="submit" onClick={(e) => saveUser(e)}>
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
