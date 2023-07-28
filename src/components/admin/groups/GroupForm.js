import React, { useState } from 'react'

import styles from "../groups/GroupForm.module.css";
import FusionLogo from "../../../img/green-power.png";
import Header from '../boxes/Header';
import Search from '../../UI/Search';
import FormListButton from '../form/FormListButton';
import Button from '../../UI/Button';
import ButtonClose from '../../UI/ButtonClose';


export default function GroupForm(props) {

    const {socket, groups} = props;
    const [show2, setShow2] = useState(false);
    const [query, setQuery] = useState("");
  
    const editHandler = (data,group,check) => {
        console.log("AJMOOOOOOO");
        console.log(group);
        props.onEditForm(data,group,check);
    }
    const refreshHandler = (data) => {
        props.onRefresh(data);
    }
    const checkHandler=(e)=>{
        setQuery("");
        setShow2(false);
      }

    return (
        <form>
            <Header
                style={styles.titleGroupForm}
                title="Groups"
                image={FusionLogo}
                imageStyle={styles.log}
            />
            <Search
                type="search"
                // className={styles.pretraga}
                style={styles.searchUsers}
                placeholder="Search..."
                autoComplete="off"
                id="search"
                // onChange={(e) => setQuery(e.target.value)}
                onChange={(e) => (setQuery(e.target.value) || e.target.value.length >= 3 ? setShow2(true) : setShow2(false))}
            />
            <ButtonClose query={query} onAddCheck={checkHandler}/>
            <FormListButton 
                query={query} 
                socket={socket} 
                groups={groups}
                onEditGroup={editHandler} 
                refresh={refreshHandler}
            />
        </form>


    )

}
