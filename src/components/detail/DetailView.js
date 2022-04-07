import React from 'react'
import { useState, useEffect , useContext } from "react";
import { useParams ,useHistory} from 'react-router';
import { getDetail } from '../../service/api';
import { UserContext } from '../../context/Context';
import { updateLike , updateDislike } from '../../service/api';

function DetailView() {

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

  const {id} = useParams();

  const [like, setLike] = useState(false);
  const {user , setUser} = useContext(UserContext);
  const [userdata, setUserdata] = useState(initial);
  const history = useHistory();

  useEffect(() => {
    const getData = async (id) => {
      // console.log(id);
      const data = await getDetail(id);
    //   if (!data.data._id) history.push("/");
      setUserdata(data.data);
    };
    getData(id);
  }, []);

  const handleLike = () => {
    // socket.volatile.emit("liked",user._id,elem._id)
    const editLike = async (obj) => {
      try {
        const data = await updateLike(obj);
        console.log(data);
        window.localStorage.setItem("userInfo", JSON.stringify(data.data));
      } catch (error) {
        console.log("It's an error!")
      }
    }
    editLike({
      "likedby": user._id,
      "liked": id
    });
  }

  const handleDislike = () => {
    // socket.volatile.emit("liked",user._id,elem._id)
    const editDislike = async (obj) => {
      try {
        const data = await updateDislike(obj);
        console.log(data);
        window.localStorage.setItem("userInfo", JSON.stringify(data.data));
      } catch (error) {
        console.log("It's an error!")
      }
    }
    editDislike({
      "dislikedby": user._id,
      "disliked": id
    });
  }

  return (
    <div>
        <section style={{ backgroundColor: "#eee" }}>
      
      <div className="container py-5">
        <div className="row">
          <div className="col">
          </div>
        </div>

        <div className="row">
          <div className="col-lg-4">
            <div className="card mb-4">
              <div className="card-body text-center">
                <img
                  src={userdata.picture}
                  alt="avatar"
                  className="rounded-circle img-fluid"
                  style={{ width: "250px" }}
                />
                <h5 className="my-3">{userdata.name}</h5>
              
                <div className={`init-heart ${like === false ? "" : "hidden"}`} ><i className="fa fa-heart-o" onClick={()=>{setLike(!like); handleLike()}}></i></div> 
                <div className={`heart ${like === false ? "hidden" : ""}`} ><i className="fa fa-solid fa-heart" onClick={()=>{setLike(!like); handleDislike()}}></i></div>
              
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
                    <p className="text-muted mb-0">{userdata.name}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Email</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdata.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mobile</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdata.mobile}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Date of Birth</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdata.dob}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Address</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdata.address}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Gender</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdata.gender}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Religion</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdata.religion}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Mother Tongue</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdata.mothertongue}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-sm-3">
                    <p className="mb-0">Description</p>
                  </div>
                  <div className="col-sm-9">
                    <p className="text-muted mb-0">{userdata.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}

export default DetailView