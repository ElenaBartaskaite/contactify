import style from'./style.module.scss';
import React, { useState } from 'react';
import Contact from '../Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEye, faEyeSlash, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ContactTable(props) {
    const [selected, selectContact] = useState(false);
    return (
        <div className={style.container}>
            <table className={style.listContainer}>
                <thead>      
                    <tr className={style.topRow}>
                        <th className={style.item}>Name <FontAwesomeIcon icon = {faArrowDown} /></th>
                        <th className={style.item}>City</th>
                        <th className={style.item}></th>
                        <th className={style.item}>Email</th>
                        <th className={style.itemRight}>Phone</th>
                        <th className={style.item}><FontAwesomeIcon icon = {faBars} /></th>
                    </tr>
                </thead>
                <tbody>
                   {props.contacts.map(contact=> <ContactListItem contact = {contact} selectContact = {selectContact} selected = { selected === contact ? true : false}/>)} 
                </tbody>
            </table>
            <Contact selected = {selected} />
        </div>
    );
}
  
function ContactListItem(props) {
    return (
        <tr key = {props.contact.id} className={style.row} onClick = { () => props.selectContact(props.contact) }>
            <td className={style.item}>{props.contact.name} {props.contact.surname[0]}. </td>
            <td className={style.item}>{props.contact.city}</td>
            <td className={style.item}>{props.contact.isActive?<FontAwesomeIcon icon={faEye} />: <FontAwesomeIcon icon={faEyeSlash} />}</td>
            <td className={style.item}>{props.contact.email}</td>
            <td className={style.itemRight}>{props.contact.phone}</td>
            <td className={style.item}>{props.selected?<div>hahah</div>:null}</td>
        </tr>
    );
}

export default ContactTable;