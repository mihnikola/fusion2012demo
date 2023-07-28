import React, { useState } from 'react'
import Button from '../../UI/Button';
import CheckUserIds from '../../UI/CheckUserIds';
import Input from '../../UI/Input';
import UsersList from '../../users/UsersList';
import Header from '../boxes/Header';
import styles from './AddUserGroup.module.css';
import FusionLogo from './../../../img/green-power.png'
import { useDispatch, useSelector } from 'react-redux';
import { groupActions } from '../../store/group-slice';
import { groupsActions } from '../../store/groups-slice';

const AddUserGroup = () => {

    const [query, setQuery] = useState("");
    const [show2, setShow2] = useState("");

    const group = useSelector((state) => state.group.name);
    const users = useSelector((state) => state.users.users);
    const usersChecked = useSelector((state) => state.group.users);
    const dispatchGroups = useDispatch();
    const dispatchGroup = useDispatch();

    const addGroupNameHandler = (e) => {
        dispatchGroup(groupActions.editGroupName(e.target.value));
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (usersChecked.length > 0 && group !== "") {
            const groupData = {
                users: usersChecked,
                id: Math.round(Math.random() * 10000),
                name: group
            };
            dispatchGroups(groupsActions.setGroups(groupData));
            dispatchGroup(groupActions.getUsers([]));
            dispatchGroup(groupActions.setResetGroupName());
        }

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
                value={group}
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
                <UsersList users={users} criteria={query} />
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