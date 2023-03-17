import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import FormControl from "@mui/material/FormControl";
import { loginUser } from "../config/Firebase/firebaseMethod";
import { useNavigate } from "react-router-dom";

function Login() {
  // password show or hidden
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  //useNavigate
  const navigate = useNavigate();

  //form state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //login user function
  const loginUsers = () => {
    const obj = {
      email: email,
      password: password,
    };
    loginUser(obj)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
    >
      <Typography className="mb-4" variant="h4">
        Login User
      </Typography>
      <TextField
        className="mb-3"
        id="outlined-basic"
        label="Email"
        type="email"
        variant="outlined"
        sx={{ width: "25rem" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormControl sx={{ width: "25rem" }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          onClick={handleClickShowPassword}
          id="outlined-adornment-password"
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton aria-label="toggle password visibility" edge="end">
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button
        size="large"
        className="mt-5"
        variant="contained"
        onClick={loginUsers}
      >
        Login
      </Button>
      <Typography
        sx={{ cursor: "pointer" }}
        className="text-primary mt-2"
        onClick={() => navigate("/signup")}
      >
        Not a user please register!
      </Typography>
    </Box>
  );
}

export default Login;