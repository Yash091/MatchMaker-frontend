import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { getUser } from "../../service/api";
import { useHistory } from "react-router-dom";
import "./Profile.css";
import { deleteUser } from "../../service/api";
import Update from "./Update";
import {Link} from "react-router-dom"
import { UserContext } from "../../context/Context";

const initial = {
  name: "",
  email: "",
  mobile: "",
  dob: "",
  gender: "",
  address: "",
  religion: "",
  mothertongue: "",
  description: "",
  picture: "",
};

const Profile = () => {

  const {user,setUser} = useContext(UserContext);
  const history = useHistory();


  
  const handleDelete = async () => {
    const data = await deleteUser();
    window.localStorage.clear();
    history.push("/register");
  };

  return (
    <section style={{ backgroundColor: "#eee" }}>
      
      <div className="container py-5">
        <div className="row">
          <div className="col">
            {/* <nav
              aria-label="breadcrumb"
              className="bg-light rounded-3 p-3 mb-4"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item">
                  <a href="#">User</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  User Profile
                </li>
              </ol>
            </nav> */}
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={user.picture}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "250px" }}
                />
                <h5 className="my-3">{user.name}</h5>
                {/* <p className="text-muted mb-1">Full Stack Developer</p>
                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p> */}
                <div className="d-flex justify-content-center mb-2">
                  <Link to={`/update/${user._id}`}>
                    <button type="button" className="btn btn-primary">
                    Edit Profile
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-outline-primary ms-1"
                    onClick={handleDelete}
                  >
                    Delete Profile
                  </button>
                </div>
              </div>
            </div>
            <div className="card mb-4 mb-lg-0">
              <div className="card-body p-0">
                <ul className="list-group list-group-flush rounded-3">
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i className="fas fa-globe fa-lg text-warning"></i>
                    <p className="mb-0">https://mdbootstrap.com</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-github fa-lg"
                      style={{ color: "#333333" }}
                    ></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-twitter fa-lg"
                      style={{ color: "#55acee" }}
                    ></i>
                    <p className="mb-0">@mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-instagram fa-lg"
                      style={{ color: "#ac2bac" }}
                    ></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                    <i
                      className="fab fa-facebook-f fa-lg"
                      style={{ color: "#3b5998" }}
                    ></i>
                    <p className="mb-0">mdbootstrap</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="card mb-4">
              <div className="card-body">
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Full Name</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.mobile}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Date of Birth</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.dob}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.address}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.gender}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Religion</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.religion}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mother Tongue</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.mothertongue}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Description</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{user.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
