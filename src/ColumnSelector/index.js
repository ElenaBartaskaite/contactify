import style from './style.module.scss';
import Checkbox from '../Checkbox';
import React, { useRef, useEffect } from "react";

function useOutsideClose(ref, toggleColumnSelector) {
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                toggleColumnSelector(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

function ColumnSelector(props) {
    const clickOutsideRef = useRef(null);
    useOutsideClose(clickOutsideRef, props.toggleColumnSelector);

    function handleSelect(column, value) {
        props.selectColumn({ ...props.selectedColumns, [column]: value });
    }

    return (
        <div>
            <div className={style.darken} />
            <div className={style.container} ref={clickOutsideRef}>
                {Object.keys(props.selectedColumns).map(key =>
                    <div key={key} className={style.option}>
                        <Checkbox checked={props.selectedColumns[key]} toggleCheckbox={value => handleSelect(key, value)} />
                        <span>{key}</span>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ColumnSelector;