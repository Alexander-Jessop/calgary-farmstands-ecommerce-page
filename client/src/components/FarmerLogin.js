import {  useState } from "react"

const FarmerLogin = () => {

  const [farmer, setFarmer] = useState('');
  const [pwd, setPwd] = useState('');
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

  return (
    <div>
      {success ? (
        <section>
          <h1>You are logged in</h1>
          <br />
          <p>
            <a href="#">Go to home page</a>
          </p>
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
      )}
    </div> 
  );
}

export default FarmerLogin