import React from 'react';
import styles from './Card.module.css';

const Card = props => {
    // console.log(props.children)
    return <div className={`${styles.card} ${props.className}`}> 
        {props.children}
    </div>
}

export default Card;