import style from'./style.module.scss';
import React from 'react';

function Contact(props) {
    return (
        <div className={style.container}>
            <div className={style.header}></div>
            {props.selected===false?
            <div className={style.contactContainer}>
                <div className={style.emptyImage}></div>
                <div className={style.emptyText}></div>
                <div className={style.emptyText}></div>
                <div className={style.emptyText}></div>
                <div className={style.emptyText}></div>
            </div>
            :<div>

            </div>
            }
        </div>
    );
}

export default Contact;