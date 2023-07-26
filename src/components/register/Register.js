import Communication from "../../img/networking.png";
import {  useEffect,useRef,useState } from 'react';
import { useNavigate } from "react-router-dom";
import styles from "../register/Register.module.css";
import React from 'react';

const Register = () => {
  const [name, setName] = useState([]);
    const [count, setCount] = useState(0);
  let navigate = useNavigate();

    useEffect(()=>{

        if (count > 0){
                navigate('/');

        }
            
       
       
    },[name]);


  
    const emailRef = useRef();
    const passwordRef = useRef();

    const submitHandler = (event) => {

        event.preventDefault();
        const enterEmail = emailRef.current.value;
        const enterPassword = passwordRef.current.value;
        const userData = {
            email: enterEmail,
            password: enterPassword,
        };
        // console.log(userData);
        if (count > 0){
            console.log("Counter " + count);
        }
       

        // setName((prevState)=>[...prevState,userData]);
        setName(userData);
        
    }

   

    

  return (
    <div className={styles.containerreg}>
        <div className={styles.borderReg}>
            <form className={styles.register} onSubmit={submitHandler}>
                <h4 className={styles.titlereg}>Sign up FUSION 2012 KV</h4>
                <input type="text"
                    id="fname1"
                    className={styles.form1}
                    name="fname"
                    placeholder="Ime"
                />
                <input type="text"
                    id="fname2"
                    className={styles.form1}
                    name="fname"
                    placeholder="Prezime"
                    />
                <input type="email"
                    id="email"
                    className={styles.form1}
                    name="email"
                    placeholder="E-mail" 
                    ref={emailRef}/>
                <input type="password"
                    id="fnamepass"
                    className={styles.form1}
                    name="fname"
                    placeholder="Šifra"
                    ref={passwordRef} />
                <input type="password"
                    id="fnamepass2"
                    className={styles.form1}
                    name="fname"
                    placeholder="Potvrda šifre" 
                    />
                <div className={styles['text-centerreg']}>
                    <button className={styles['btn-register']} onClick={()=> setCount(count+1)}>Registruj se</button>
                </div>
            </form>
            <div className={styles.imageformreg}>
                <img src={Communication} className={styles.windowImgreg} alt="" />
            </div>
        </div>  
    </div>
   
  );
}

export default Register;
