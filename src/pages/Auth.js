import { onAuthStateChanged } from "firebase/auth";
import React, { useState, Fragment, useEffect } from "react";
import {
  loginWithGitHub,
  loginWithGoogle,
  auth,
  login,
  register,
} from "../firebase";
import { useNavigate } from "react-router-dom";
import GoogleIcon from "@mui/icons-material/Google";
import { GitHub } from "@mui/icons-material";
import ReCAPTCHA from "react-google-recaptcha";
import {
  Box,
  Alert,
  Typography,
  Button,
  CircularProgress,
  TextField,
  FormControl,
  FormGroup,
} from "@mui/material";

export default function Auth() {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(false);
  const [recaptcha, setCaptcha] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);

  const handleEmail = (event) => {
    setInputs({ ...inputs, email: event.target.value });
  };

  const handlePass = (event) => {
    setInputs({ ...inputs, password: event.target.value });
  };

  const onRecaptchaChange = (value) => {
    if (value) {
      setCaptcha(true);
    }
  };

  function onError() {
    setCaptcha(false);
  }

  const switchToggle = () => {
    setToggle(!toggle);
    setErrors({});
  };

  const authLogin = async () => {
    setLoading(true);
    await login(inputs.email, inputs.password)
      .then((user) => {
        setErrors({});
        navigate("/profile");
      })
      .catch((error) => {
        setErrors({
          errorMessage: error.message,
          errorCode: error.code,
        });
      });
    setLoading(false);
  };

  const authGoogle = async () => {
    setLoading(true);
    await loginWithGoogle()
      .then((user) => {
        setErrors({});
        navigate("/profile");
      })
      .catch((error) => {
        if ("auth/account-exists-with-different-credential" === error.code) {
          setErrors({
            ...errors,
            exists: "Account already exists with different credential",
          });
        } else if ("auth/user-not-found" === error.code) {
          setErrors({
            ...errors,
            exists: "User not found",
          });
        }
      });
    setLoading(false);
  };

  const authGitHub = async () => {
    setLoading(true);
    await loginWithGitHub()
      .then((user) => {
        setErrors({});
        navigate("/profile");
      })
      .catch((error) => {
        if ("auth/account-exists-with-different-credential" === error.code) {
          setErrors({
            ...errors,
            exists: "Account already exists with different credential",
          });
        } else if ("auth/user-not-found" === error.code) {
          setErrors({
            ...errors,
            exists: "User not found",
          });
        }
      });
    setLoading(false);
  };

  const authRegister = async () => {
    setLoading(true);
    await register(inputs.email, inputs.password)
      .then((user) => {
        setErrors({});
        navigate("/profile");
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/invalid-email") {
          setErrors({ ...errors, email: "Please enter a valid email" });
        }
        if (errorCode === "auth/weak-password") {
          setErrors({
            ...errors,
            password: "Password must be at least 6 characters",
          });
        }
        if (errorCode === "auth/email-already-in-use") {
          setErrors({ ...errors, email: "Email is already in use" });
        }
      });
    setLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        if (isMounted) navigate("/profile");
      }
    });
    return () => {
      isMounted = false;
    };
  }, [navigate]);

  return (
    <Fragment>
      <Box sx={{ height: "85vh", width: "100vw" }}>
        <Box sx={{ padding: "80px" }} component="form">
          <FormGroup className="form">
            <FormControl variant="standard" sx={{ width: "100%", m: 0.5 }}>
              <TextField
                autoComplete="email"
                variant="filled"
                type="email"
                required
                onChange={handleEmail}
                id="email"
                label="Email"
                aria-describedby="enter email"
              />
            </FormControl>
            <FormControl variant="standard" sx={{ width: "100%", m: 0.5 }}>
              <TextField
                autoComplete="current-password"
                variant="filled"
                required
                type="password"
                onChange={handlePass}
                id="password"
                label="Password"
                aria-describedby="enter password"
              />
            </FormControl>
            {loading ? (
              <Box
                sx={{ display: "flex", justifyContent: "center", mt: 2, mb: 2 }}
              >
                <CircularProgress />{" "}
              </Box>
            ) : undefined}
            <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
              <ReCAPTCHA
                required
                style={{ marginBottom: "10px" }}
                sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA}
                onChange={onRecaptchaChange}
                render="explicit"
                onErrored={onError}
                onExpired={onError}
              />
            </Box>
            <Button
              disabled={!recaptcha}
              variant="contained"
              onClick={toggle ? () => authLogin() : () => authRegister()}
            >
              {toggle ? "Login" : "Register"}
            </Button>
            <Button
              disabled={!recaptcha}
              sx={{ mt: 2 }}
              variant="outlined"
              startIcon={<GoogleIcon />}
              onClick={authGoogle}
            >
              Sign in with Google
            </Button>
            <Button
              disabled={!recaptcha}
              sx={{ mt: 2 }}
              variant="outlined"
              startIcon={<GitHub />}
              onClick={authGitHub}
            >
              Sign in with GitHub
            </Button>
            {Object.keys(errors).length > 0 ? (
              <Alert sx={{ mt: 2 }} severity="error">
                {errors.exists ? errors.exists : undefined}
                {errors.email ? errors.email : undefined}
                {errors.password ? errors.password : undefined}
              </Alert>
            ) : undefined}
          </FormGroup>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <Typography textAlign="center" sx={{ mt: 2 }} variant="body1">
              {toggle ? "Don't have an account?" : "Already have an account?"}
            </Typography>
            <Button
              sx={{ margin: "0 auto" }}
              variant="contained"
              onClick={switchToggle}
            >
              {toggle ? "Register" : "Login"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
