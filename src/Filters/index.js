import style from './style.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import Dropdown from '../Dropdown';
import Checkbox from '../Checkbox';


function Filters(props) {
    const options = props.contacts.map(contact => ({ value: contact.city, label: contact.city }));
    options.unshift({ value: "", label: "None" });
    const [selectedCity, selectCity] = useState("");
    const [name, selectName] = useState("");
    const [showActive, selectShowActive] = useState(false);

    function filter() {
        let filters = {};
        if (selectedCity !== "") filters.city = selectedCity;
        if (name !== "") filters.name = name;
        if (showActive === true) filters.isActive = showActive;

        props.updateFilters(filters);
    }

    return (
        <div className={style.container}>
            <div className={style.filterContainer}>
                <input type="text" placeholder="Name" value={name} onChange={event => selectName(event.target.value)} className={style.input}></input>
                <Dropdown selectedCity={selectedCity} selectCity={selectCity} options={options} />
                <div className={style.activityContainer}>
                    <Checkbox
                        checked={showActive}
                        toggleCheckbox={selectShowActive}
                    />
                    <div>Show Active</div>
                    <div><FontAwesomeIcon icon={faEye} /></div>
                </div>
                <button className={style.button} onClick={filter}>Filter</button>

            </div>
            <div className={style.logo}>Contactify</div>
        </div>
    );
}

export default Filters;