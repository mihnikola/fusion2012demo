import React from 'react'
import UserItem from './UserItem'
import styles from './UserItem.module.css';
function UsersList({ criteria, users}) {
   return (
        <div className={styles.boxforusers}>
            {users?.filter((user) => user.name.toLowerCase().includes(criteria.toLowerCase()) || user.lastName.toLowerCase().includes(criteria.toLowerCase())).map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </div>
    )
}

export default UsersList;