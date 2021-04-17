import style from './style.module.scss';
import React, { useState } from 'react';
import Contact from '../Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEye, faEyeSlash, faArrowDown } from '@fortawesome/free-solid-svg-icons';

function ContactTable(props) {
    const [selected, setContact] = useState(false);
    const [sortDirection, setSortDirection] = useState(0);

    async function selectContact(contact) {
        const url = "https://contactify-api.herokuapp.com/api/contacts/" + contact.id;
        try {
            const response = await fetch(url, { mode: "cors" });
            const data = await response.json();
            setContact(data);
        } catch (error) {
            console.log(error);
        }
    }

    function sort(contact1, contact2) {
        if (contact1.name > contact2.name)
            return sortDirection;
        if (contact1.name < contact2.name)
            return -sortDirection;
        return 0;
    }

    function filter(contact) {
        return !Object.keys(props.filters)
            .map(key => {
                console.log(key);
                console.log(contact[key]);
                console.log(props.filters[key]);
                console.log(contact);
                if (contact[key].toString().toLowerCase().includes(props.filters[key].toString().toLowerCase())) return true;
                return false;
            })
            .includes(false);
    }

    return (
        <div className={style.container}>
            <table className={style.listContainer}>
                <thead>
                    <tr className={style.topRow}>
                        <th className={style.multipleItemContainer} >Name <span className={sortDirection === 1 ? style.reverseArrow : style.arrow} onClick={() => setSortDirection(sortDirection === 0 ? 1 : -sortDirection)}><FontAwesomeIcon icon={faArrowDown} /></span></th>
                        <th className={style.item}>City</th>
                        <th className={style.item}></th>
                        <th className={style.item}>Email</th>
                        <th className={style.itemRight}>Phone</th>
                        <th className={style.item}><FontAwesomeIcon icon={faBars} /></th>
                    </tr>
                </thead>
                <tbody>
                    {props.contacts
                        .sort((contact1, contact2) => sort(contact1, contact2))
                        .filter(filter)
                        .map(contact => <ContactListItem key={contact.id} contact={contact} selectContact={selectContact} selected={selected.id === contact.id ? true : false} />)}
                </tbody>
            </table>
            <Contact selected={selected} />
        </div>
    );
}

function ContactListItem(props) {
    return (
        <tr className={props.selected ? style.rowSelected : style.row} onClick={() => props.selectContact(props.contact)}>
            <td className={style.item}>{props.contact.name} {props.contact.surname[0]}. </td>
            <td className={style.item}>{props.contact.city}</td>
            <td className={style.item}>{props.contact.isActive ? <FontAwesomeIcon icon={faEye} /> : <FontAwesomeIcon icon={faEyeSlash} />}</td>
            <td className={style.item}>{props.contact.email}</td>
            <td className={style.itemRight}>{props.contact.phone}</td>
            <td className={style.item}></td>
        </tr>
    );
}

export default ContactTable;