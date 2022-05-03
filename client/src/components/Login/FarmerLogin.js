import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { Navigate } from "react-router-dom";
import "./FarmerLogin.css";
import ModalDialog from "../Signup/ModalDialog";

const FarmerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setshowPass] = useState(false);
  //Just for learning purposes - to be removed
  const [success, setSuccess] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("");
    setPassword("");
    //Placeholder to see action of form submission
    setSuccess(true);

    const loginFarmer = {
      username: username,
      password: password,
    };
    const data = JSON.stringify(loginFarmer);
    console.log(`Creating new farmer: ${data}`);
    const response = await fetch("/sign-in/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    if (response.status === 200) {
      console.log("Successful login");
    } else {
      alert("login failed");
    }
  };

  const togglePasswordVis = () => {
    setshowPass(!showPass);
  };

  return (
    <div>
      {success ? (
        <section>
          <Navigate to={"/inventory"}></Navigate>
        </section>
      ) : (
        <section>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <p />
            <input
              type="text"
              id="username"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              required
            />
            <label htmlFor="password">Password:</label>
            <p />
            <input
              type={showPass ? "text" : "password"}
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              required
            />
            <FaEye className="eye" onClick={togglePasswordVis} />
            <label htmlFor="submit">
              <input type="submit" id="submit" value="Sign In" />
            </label>
            <p />
          </form>
          <h4>Need an account?</h4>
          <p />
          <a href="#" onClick={() => setShowModal(true)}>
            Sign Up
          </a>
          {showModal && <ModalDialog />}
          <p />
          <a href="#">Continue as guest</a>
          <p />
          <a href="#">Forgot Password</a>
        </section>
      )}
    </div>
  );
};

export default FarmerLogin;
