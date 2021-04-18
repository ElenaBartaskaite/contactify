import style from './style.module.scss';
import Checkbox from '../Checkbox';

function ColumnSelector(props) {
    function handleSelect(column, value) {
        props.selectColumn({ ...props.selectedColumns, [column]: value });
    }

    return (
        <div className={style.container}>
            {Object.keys(props.selectedColumns).map((key, index) =>
                <div key={index} className={style.option}>
                    <Checkbox checked={props.selectedColumns[key]} toggleCheckbox={value => handleSelect(key, value)} /> 
                    <span>{key}</span>
                </div>
            )}
        </div>
    );
}

export default ColumnSelector;