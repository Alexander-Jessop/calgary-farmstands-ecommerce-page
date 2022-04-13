import { useState } from "react"
import { FaEye } from "react-icons/fa";

import "./FarmerLogin.css";

const FarmerLogin = () => {

  const [farmer, setFarmer] = useState('');
  const [pwd, setPwd] = useState('');
  const [showPass, setshowPass] = useState(false);
  //Just for learning purposes - to be removed
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(farmer, pwd);
    setFarmer('');
    setPwd('');
    //Placeholder to see action of form submission
    setSuccess(true);
  }

  const togglePasswordVis = () => {
    setshowPass(!showPass);
  };

  return (
    <div>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <p />
            <a href="#">Go to home page</a>
        </section>
      ) : (
        <section>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                id="username"
                autoComplete="off"
                onChange={(e) => setFarmer(e.target.value)}
                value={farmer}
                required
              />
              </label>
              <p />
            <label htmlFor="password">
              Password:
              <input
                type={showPass ? "text" : "password"}
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                />
                <FaEye className = "eye" onClick={togglePasswordVis} />
              </label>
              <p />
            <label htmlFor="submit">
              <input type="submit" id="submit" value="Sign In" />
              </label>
              <p />
          </form>
            <h4>Need an account?</h4>
            <p />
            <a href="#">Sign Up</a>
            <p />
            <a href="#">Continue as guest</a>
            <p />
            <a href="#">Forgot Password</a>
          </section>
      )}
    </div> 
  );
}

export default FarmerLogin