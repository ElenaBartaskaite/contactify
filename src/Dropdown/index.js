import Select, { components } from 'react-select';
import style from './style.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const colourStyles = {
    indicatorSeparator: styles => ({ ...styles, display: "none" }),
    valueContainer: (provided) => ({
        ...provided,
        padding: '0'
    }),
    option: (provided, state) => ({
        ...provided,
        color: state.isSelected ? 'white' : '#4f4d43',
        backgroundColor: state.isSelected ? '#4eb7be' : 'white',
        cursor: "pointer",
        "&:active": {
            backgroundColor: '#4eb7be',
            color: "white"
        }
    }),
    control: (provided) => ({
        ...provided,
        backgroundColor: 'transparent',
        cursor: "pointer",
        border: 'none',
        borderBottom: '1px solid white',
        borderRadius: '0',
        padding: '0',
        boxShadow: 'none',
        "&:focus": {
            outline: 'none'
        },
        "&:hover": {
            borderColor: "white"
        }
    }),
    placeholder: (provided) => ({
        ...provided,
        color: 'white',
        fontFamily: 'Open Sans',
        fontSize: '17px',
        marginLeft: '0'
    }),
    input: (provided) => ({
        ...provided,
        color: 'white'
    }),
    singleValue: (provided) => ({
        ...provided,
        color: 'white',
        fontFamily: 'Open Sans',
        fontSize: '17px'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: 'white',
        "&:focus": {
            color: 'white'
        },
        "&:hover": {
            color: 'white'
        }
    })
};

function Dropdown(props) {
    return (
        <div className={style.container}>
            <Select
                defaultValue={props.selectedCity}
                onChange={selected => props.selectCity(selected.value)}
                options={props.options}
                placeholder={props.placeholder}
                styles={colourStyles}
                components={{ DropdownIndicator }}
            />
        </div>
    )
};

function DropdownIndicator (props) {
    return (
        <components.DropdownIndicator {...props}>
            <FontAwesomeIcon icon={faCaretDown} />
        </components.DropdownIndicator>
    );
};

export default Dropdown;