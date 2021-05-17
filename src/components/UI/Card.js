import React from 'react';
import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className
    // line above allows this card to take classNames into account from other css classNames
    // props.children allows use of card as a wrapper
    return (
        <div className={classes}>
            {props.children}
        </div>
    );
}

export default Card;