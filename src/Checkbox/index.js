import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Checkbox(props) {
    return (
        <div>
            {props.checked ?
                <div className={style.checkbox} onClick={() => props.toggleCheckbox(false)}>
                    <div className={style.check}><FontAwesomeIcon icon={faCheck} /></div>
                </div> :
                <div className={style.checkboxUnchecked} onClick={() => props.toggleCheckbox(true)} />}
        </div>

    )
}

export default Checkbox;