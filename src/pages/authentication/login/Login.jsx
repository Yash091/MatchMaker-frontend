import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { logUser } from "../../../service/api"
import "./Login.css";

const Login = ({socket}) => {
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const history = useHistory();
  const userLog = async (e) => {
    e.preventDefault();
    const obj = { email: email, password: password };
    const data = await logUser(obj);
    
    if (data.status === 200) {
      window.localStorage.setItem("userInfo", JSON.stringify(data.data.user));
      socket?.emit("setup",{sender: data.data.user});
      history.push("/");
    }
    else window.alert("Invalid Credentials!");
  };

  return (
    <>
      <div className="log-container">
        <div className="log-cont1">
          <Link to="/register">
            <button>Sign Up</button>
          </Link>
        </div>
        <div className="log-cont2">
          <div className="log-head"> Sign In</div>
          <div log-form>
            <form>
              <div className="label">
                <label htmlFor="email">Email</label>
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="label">
                <label htmlFor="password">Password</label>
              </div>
              <div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div>
                <button type="submit" onClick={(e) => userLog(e)}>
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
