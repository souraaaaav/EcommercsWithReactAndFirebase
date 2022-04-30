import React from 'react'
import { Link } from 'react-router-dom'
import './Payment.css'
const Payment = ({ totalPrice }) => {
    const newPrice = totalPrice + '$'
    return (
        <>
            <div class='card-checkout'>
                <div class='heading'>
                    <h3>payment details</h3>
                    <label>credit card information</label>
                    <i class='icon ion-card'></i>
                </div>
                <div class='content'>
                    <label>name on the card</label>
                    <div class='input-group'>
                        <input class='form-control' type='text' />
                    </div>
                    <label>card number</label>
                    <div class='input-group'>
                        <input class='form-control' type='text' />
                    </div>
                    <label>expiration date</label>
                    <div class='input-group'>
                        <input class='form-control' type='text' />
                    </div>
                    <label>ccv/cvv</label>
                    <div class='input-group'>
                        <input class='form-control' type='text' />
                    </div>
                    <label>Total bill</label>
                    <div class='input-group'>
                        <input class='form-control' type='text' placeholder={newPrice} disabled />
                    </div>
                    <br />
                    <Link to='cashout' className='cashout-link'>
                        <input class='button -primary' type='submit' value='Place Your Order' />
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Payment