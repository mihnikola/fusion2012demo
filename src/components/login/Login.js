import styles from "../login/Login.module.css";
import LayoutForm from "../layout/LayoutForm";
import {  useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Communication from "../../img/networking.png";
import GIRLogo from "../../img/green-power.png";
import Cookies from "js-cookie";
import React from 'react';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  let navigate = useNavigate();

  useEffect(() => {
    const user = Cookies.get("user");
    if (user) {
      navigate("/poruke");
    }
  }, []);

  const submitHandler = (event) => {
    event.preventDefault();
    const enterEmail = emailRef.current.value;
    const enterPassword = passwordRef.current.value;
    // const userData = {
    //   email: enterEmail,
    //   password: enterPassword,
    // };
    if (enterEmail.length > 3 && enterPassword.length > 3) {
      Cookies.set("user", Math.random());
      navigate("/poruke");
    }
  };
  return (
    <LayoutForm>
      <form className={styles.login} onSubmit={submitHandler}>
        <img src={GIRLogo} className="logoImg" alt="" />
        <h4 className={styles.title}>FUSION 2012 KV</h4>
        {/* 
        <Box>
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box> */}
        <div className={styles["form-group"]}>
          <input
            type="text"
            id="fname"
            className={styles.passform}
            name="fname"
            placeholder="Enter a username"
            ref={emailRef}
          />

          <input
            type="password"
            id="fname"
            className={styles.passform}
            name="fname"
            placeholder="Enter a password"
            ref={passwordRef}
          />
          <div className={styles["text-center"]}>
            {/* <button type="submit" className="btn app-btn-primary w-100 theme-btn mx-auto" onClick={() => setCount(count + 1)}>Prijavi me</button> */}
            <button
              type="submit"
              className={styles.btnLogin}
              onClick={submitHandler}
            >
              Sign in
            </button>
          </div>
        </div>
      </form>
      <div className={styles.imageform}>
        <img src={Communication} className={styles.windowImg} alt="" />
      </div>
    </LayoutForm>
  );
};
export default Login;
