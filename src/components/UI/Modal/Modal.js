import React, { Component } from 'react';

import classes from './Modal.module.css';
import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.modalVisible !== this.props.modalVisible || nextProps.children !== this.props.children;
    }

    componentWillUpdate () {
        console.log('[Modal] WillUpdate');
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.modalVisible} clicked={this.props.hideModalHandler} />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.modalVisible ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.modalVisible ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        )
    }
}

export default Modal;