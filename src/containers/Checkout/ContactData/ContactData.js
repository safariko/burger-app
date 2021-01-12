import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false

    }

    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients)
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: 'Safar',
                address: {
                    street: '5400 Ramsey St',
                    zipCode: '734042',
                    country: 'USA'
                },
                email: 'safar.kurbansho@gmail.com'
            },
            deliveryMethod: 'fastest'
        }

        axios.post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({ loading: false });
            })
    }

    render() {
        let form = (
            <form>
                <input type="text" className={classes.Input} name="name" placeholder="Your name" />
                <input type="text" className={classes.Input} name="email" placeholder="Your email" />
                <input type="text" className={classes.Input} name="address" placeholder="Your street" />
                <input type="text" className={classes.Input} name="postal" placeholder="Your postal code" />
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }

        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Contact Data</h4>
                {form}
            </div>
        );
    }

}

export default ContactData;