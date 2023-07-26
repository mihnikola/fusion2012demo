import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { socket } from '../../App';
import { fetchGroupData } from '../store/add-group-actions';
import { groupActions } from '../store/add-group-slice';
import UserItem from './UserItem'
import styles from './UserItem.module.css';
function UsersList(props) {
    const { criteria } = props;
    // const usersData = useSelector((state)=>state.group.users);
    const usersData = [{
        id: 1,
        name: "nenad",
        lastName: "radovic",
        email:"nenad.radovic@example.rs",
        active: 1

    },{
        id: 2,
        name: "uros",
        lastName: "radovic",
        email:"uros.radovic@example.rs",
        active: 1

    }];
    console.log("+userData", usersData);

    return (
        <div className={styles.boxforusers}>
            {usersData?.filter((user) => user.name.toLowerCase().includes(criteria.toLowerCase()) || user.lastName.toLowerCase().includes(criteria.toLowerCase()) ).map((user) => (
                <UserItem key={user.id} user={user}/>
            ))}
        </div>
    )
}

export default UsersList;