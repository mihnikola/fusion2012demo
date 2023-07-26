import "./Sidebar.css";
import { FaBars, FaTimes, FaRegCommentDots, FaRegComments,FaUsers } from "react-icons/fa";
import {CiLogout} from "react-icons/ci";
import {RiTodoLine} from "react-icons/ri";
import {VscDiffAdded} from "react-icons/vsc";
import {useNavigate} from 'react-router-dom';
import AuthApi from "../../context/AuthApi";
import Cookies from 'js-cookie';
import { useContext } from "react";
import React  from 'react';
import PropTypes from 'prop-types';

const Sidebar = (props) => {

    const navigate = useNavigate();
    const Auth = useContext(AuthApi);



    const navigateHome = () => {
        // 👇️ navigate to /contacts
        navigate('/kreiranje_grupe');
        
      };
    const navigateViewGroup=()=>{
      navigate('/pregled_grupe');
    }
   
    const navigateMessage = () => {
        navigate('/kreiranje_poruke');
      };
      const navigateViewQuestions = () => {
        navigate('/surveys');
      };
      const navigateViewAddQuestions = () => {
        navigate('/dodeli_anketu');
      };
      const navigateViewMessage = () => {
        navigate('/poruke');
      };

      const navigateLogout = () => {
        Auth.setAuth(false);
        Cookies.remove('user');
        navigate('/');
      };
      
    return (
        <div>
            <input  type="checkbox" id="check"></input>
            <label className="label-sidebar see" htmlFor="check">
                <div className="fa fa-bars" id="btn"> <FaBars /></div>
                <div className="fa fa-times" id="cancle"><FaTimes /></div>
            </label>
            <div className="sidebar hide">
                <header>
                    <p className="title-of-sidebar">FUSION 2012 KV</p>
                </header>
                <ul className="list-sidebar">
                    <li className="litag-sidebar" onClick={navigateHome}><a className="atag-sidebar"><i className="itag-sidebar"><FaUsers /></i>Napravi grupu</a></li>
                    <li className="litag-sidebar" onClick={navigateViewGroup}><a className="atag-sidebar"><i className="itag-sidebar"><FaUsers /></i>Pregled grupe</a></li>
                    <li className="litag-sidebar" onClick={navigateMessage}><a className="atag-sidebar"><i className="itag-sidebar"><FaRegCommentDots /></i>Poruka</a></li>
                    <li className="litag-sidebar" onClick={navigateViewMessage}><a className="atag-sidebar"><i className="itag-sidebar"><FaRegComments /></i>Pregled</a></li>
                    <li className="litag-sidebar" onClick={navigateViewQuestions}><a className="atag-sidebar"><i className="itag-sidebar"><RiTodoLine /></i>Create survey</a></li>
                    <li className="litag-sidebar" onClick={navigateViewAddQuestions}><a className="atag-sidebar"><i className="itag-sidebar"><VscDiffAdded /></i>Assign survey </a></li>
                    <li className="litag-sidebar" onClick={navigateLogout}><a className="atag-sidebar"><i className="itag-sidebar"><CiLogout /></i>Odjavi se</a></li>
                </ul>
            </div>
                {props.children}
        </div>
    )
};


Sidebar.propTypes = {
  children: PropTypes.any,
};


export default Sidebar;