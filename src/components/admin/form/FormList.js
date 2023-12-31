import React, { useState } from 'react'
import styles from '../form/FormList.module.css'
import FormItem from '../form/FormItem';

export default function FormList(props) {
    const { users,criteria,checkedUsers,serverData,setServerData,checkedUsersIds,setCheckedUsersIds,unCheckedUsersEvent } = props;
   
    const checkedItemsHandler = data => {
        console.log(data);
        props.onCheckedItems(data);
    }
    return (
        <div className={styles.boxforusers}>
            {users.filter((user) => user.name.toLowerCase().includes(criteria.toLowerCase())).map((user) => (
                <FormItem 
                    users={users} 
                    key={user.id} 
                    user={user} 
                    unMarkedUser={unCheckedUsersEvent}
                    serverData={serverData} 
                    setServerData={setServerData} 
                    checkedUsersIds={checkedUsersIds} 
                    unCheckedUsers={checkedUsers}
                    setCheckedUsersIds={setCheckedUsersIds}
                    onAddCheckedItems={checkedItemsHandler} 
                />
            ))}
        </div>
    )
}
