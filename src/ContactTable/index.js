import style from './style.module.scss';
import React, { useState } from 'react';
import Contact from '../Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEye, faEyeSlash, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import ColumnSelector from '../ColumnSelector';

function ContactTable(props) {
    const [selected, setContact] = useState(false);
    const [sortDirection, setSortDirection] = useState(0);
    const [columnSelectorOpen, toggleColumnSelector] = useState(false);
    const [selectedColumns, selectColumn] = useState({
        Name: true,
        City: true,
        Email: true,
        Phone: true
    });

    let filteredList = props.contacts
        .sort((contact1, contact2) => sort(contact1, contact2))
        .filter(filter);

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
                if (contact[key].toString().toLowerCase().includes(props.filters[key].toString().toLowerCase())) return true;
                return false;
            })
            .includes(false);
    }

    return (
        <div className={style.container}>
            {columnSelectorOpen ? <div className={style.darken} /> : null}
            <table className={style.listContainer}>
                {columnSelectorOpen ? <ColumnSelector selectedColumns={selectedColumns} selectColumn={selectColumn} /> : null}
                <thead>
                    <tr className={style.topRow}>
                        {selectedColumns.Name ? <th className={style.multipleItemContainer}
                            onClick={() => setSortDirection(sortDirection === 0 ? 1 : -sortDirection)}>
                            Name
                            <span className={sortDirection === 1 ? style.reverseArrow : style.arrow}>
                                <FontAwesomeIcon icon={faArrowDown} />
                            </span>
                        </th> : null}
                        {selectedColumns.City ? <th className={style.itemLong}>City</th> : null}
                        <th className={style.item}></th>
                        {selectedColumns.Email ? <th className={style.item}>Email</th> : null}
                        {selectedColumns.Phone ? <th className={style.itemRight}>Phone</th> : null}
                        <th className={columnSelectorOpen ? style.selectorItemOpen : style.selectorItem}
                            onClick={() => toggleColumnSelector(!columnSelectorOpen)}>
                            <FontAwesomeIcon icon={faBars} />
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {filteredList.map(contact =>
                        <ContactListItem key={contact.id} contact={contact}
                            selectContact={selectContact} selected={selected.id === contact.id}
                            selectedColumns={selectedColumns} />
                    )}
                </tbody>
            </table>
            <Contact selected={filteredList.some(filteredItem => filteredItem.id === selected.id) ? selected : false} />
        </div>
    );
}

function ContactListItem(props) {
    return (
        <tr className={props.selected ? style.rowSelected : style.row} onClick={() => props.selectContact(props.contact)}>
            {props.selectedColumns.Name ? <td className={style.item}>{props.contact.name} {props.contact.surname[0]}. </td> : null}
            {props.selectedColumns.City ? <td className={style.item}>{props.contact.city}</td> : null}
            <td className={style.item}><FontAwesomeIcon icon={props.contact.isActive ? faEye : faEyeSlash} /></td>
            {props.selectedColumns.Email ? <td className={style.item}>{props.contact.email}</td> : null}
            {props.selectedColumns.Phone ? <td className={style.itemRight}>{props.contact.phone}</td> : null}
            <td className={style.item}></td>
        </tr>
    );
}

export default ContactTable;