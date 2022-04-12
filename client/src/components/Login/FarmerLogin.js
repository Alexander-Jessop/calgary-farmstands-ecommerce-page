import {  useState } from "react"

const FarmerLogin = () => {

  const [farmer, setFarmer] = useState('');
  const [pwd, setPwd] = useState('');

    return (
      <section>
        <h1>Sign In</h1>
        <form>
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
          <br />
          <label htmlFor="password">
            Password:
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
          </label>
          <br />
          <label htmlFor="submit">
            <input type="submit" id="submit" value="Sign In" />
          </label>
        </form>
        <p>
          Need an account?
          <br />
          <a href="#">Sign Up</a>
          <br />
          <a href="#">Continue as guest</a>
          <br />
          <a href="#">Forgot Password</a>
        </p>
      </section>
    );
  }

export default FarmerLogin