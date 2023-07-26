import React, { useEffect, useState } from 'react'
import Button from '../../UI/Button';
import ButtonClose from '../../UI/ButtonClose';
import CheckUserIds from '../../UI/CheckUserIds';
import Input from '../../UI/Input';
import UsersList from '../../users/UsersList';
import Header from '../boxes/Header';
import styles from './AddUserGroup.module.css';
import FusionLogo from './../../../img/green-power.png'
import { addGroupData, fetchGroupData } from '../../store/add-group-actions';
import { useDispatch, useSelector } from 'react-redux';
import { groupActions } from '../../store/add-group-slice';
import { Navigate, useNavigate } from 'react-router-dom';
const AddUserGroup = () => {

    const [query, setQuery] = useState("");
    const [show2, setShow2] = useState("");
    const navigate = useNavigate();
    const usersData = useSelector((state) => state.group.userChecked);
    const group = useSelector((state) => state.group.nameGroup);
    const dispatch = useDispatch();

    const addGroupNameHandler = (e) => {
        console.log(e.target.value);
        dispatch(groupActions.editGroupName(e.target.value));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        const groupData = {
            users: usersData, name: group 
        };
        console.log("groupData", groupData);
        let result = dispatch(addGroupData(groupData));
        result.then(()=>{
            console.log("test");
            navigate('/xxx');
        })

       
    }
    const checkHandler = (e) => {
        setQuery("");
    }
    return (
        <form onSubmit={submitHandler}>
        
            <Header
                style={styles.titleofForm}
                title="Users"
                imageStyle={styles.log}
                image={FusionLogo}
            />
            <Input
                type="text"
                style={styles.searchUsers}
                placeholder="Add group name..."
                autoComplete="off"
                onChange={addGroupNameHandler}
            />
            <CheckUserIds />
            <Input
                type="search"
                style={styles.searchUsers}
                placeholder="Search..."
                autoComplete="off"
                onChange={(e) => (setQuery(e.target.value) || e.target.value.length >= 3 ? setShow2(true) : setShow2(false))}
            />

            <div className={styles.boxforUsers}>
                <UsersList criteria={query}  />
            </div>
            <Button
                style={styles['btn-addpost']}
                type="submit"
                title="Save"
            />
        </form>
    )
}

export default AddUserGroup;