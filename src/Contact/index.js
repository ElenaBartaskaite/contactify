import style from './style.module.scss';
import React from 'react';
import userPicture from '../Images/userpic.jpg';
import {shortSurname} from '../helperFunctions';

function Contact(props) {
    return (
        <div className={style.container}>
            <div className={style.header}></div>
            {props.selected === false ?
                <div className={style.contactContainer}>
                    <div className={style.emptyImage}></div>
                    <div className={style.emptyText}></div>
                    <div className={style.emptyText}></div>
                    <div className={style.emptyText}></div>
                    <div className={style.emptyText}></div>
                </div>
                : <div className={style.contactContainer}>
                    <div className={style.image}>
                        <img src={userPicture} alt="profile pic" />
                    </div>
                    <div className={style.textContainer}>
                        <span className={style.firstColumn}>Name:</span>
                        <span className={style.secondColumn}>{props.selected.name} {shortSurname(props.selected.surname)}</span>

                        <span className={style.firstColumn}>City:</span>
                        <span className={style.secondColumn}>{props.selected.city}</span>

                        <span className={style.firstColumn}>Email:</span>
                        <span className={style.email}><a href={"mailto: " + props.selected.email}>{props.selected.email}</a></span>

                        <span className={style.firstColumn}>Phone:</span>
                        <span className={style.secondColumn}>{props.selected.phone}</span>

                    </div>
                </div>
            }
        </div>
    );
}

export default Contact;