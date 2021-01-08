import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => (
    <Aux>
        <Backdrop show={props.modalVisible} clicked={props.hideModalHandler} />
        <div
            className={classes.Modal}
            style={{
                transform: props.modalVisible ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.modalVisible ? '1' : '0'
            }}>
            {props.children}
        </div>
    </Aux>
);

export default modal;