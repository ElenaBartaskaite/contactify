import style from './style.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Checkbox(props) {
    return (
        <div>
            <div className={props.checked ? style.checkbox : style.checkboxUnchecked}
                onClick={() => props.toggleCheckbox(!props.checked)}>
                {props.checked ?
                    <div className={style.check}>
                        <FontAwesomeIcon icon={faCheck} />
                    </div>
                    : null}
            </div>
        </div>

    )
}

export default Checkbox;