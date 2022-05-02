import React, { useEffect, useState } from "react";
import { Box, makeStyles, Avatar, TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "500px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const Form = ({ handleClose }) => {
  const classes = useStyles();
  // create state variables for each input
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const GenderStyle = { width: "100%", margin: "5px 0 0 18px" };
  const [userList, setUserList] = useState();

  useEffect(() => {
    if (userList) {
      setFirstName(userList.firstName);
      setLastName(userList.lastName);
      setEmail(userList.email);
      setPassword(userList.password);
      setGender(userList.gender);

      console.log(`userList is:`, userList);
    }
  }, [userList]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      firstName,
      lastName,
      email,
      password,
      gender,
    };
    console.log("newUser", newUser);
    const data = JSON.stringify(newUser);
    let response = await fetch("/users/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    });
    let user = await response.json();
    console.log("user", user);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setGender("");

    console.log(firstName, lastName, email, password, gender);
    handleClose();
  };
  console.log(gender);
  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <h1>
        <br />
        SIGN UP
      </h1>
      <Avatar style={avatarStyle}></Avatar>
      <TextField
        label="First Name"
        variant="filled"
        required
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <TextField
        label="Last Name"
        variant="filled"
        required
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />

      <TextField
        label="Email"
        variant="filled"
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Password"
        variant="filled"
        type="password"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormControl
        component="fieldset"
        style={GenderStyle}
        onChange={(e) => setGender(e.target.value)}
      >
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          aria-label="gender"
          name="gender"
          style={{ display: "initial" }}
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>

      <Box>
        <Button variant="contained" onClick={handleClose}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="primary">
          Signup
        </Button>
      </Box>
    </form>
  );
};

export default Form;
