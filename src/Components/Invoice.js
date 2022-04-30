import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { auth, db } from '../Config/Config';
import { CartContext } from '../Global/CartContext';
import Footer from './Footer';
import './Invoice.css';
import { Navbar } from './Navbar';

const Invoice = () => {
    const history = useHistory();
    const { shoppingCart, totalPrice, totalQty, dispatch } = useContext(CartContext);
    console.log(shoppingCart)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                })
            }
        })
    })
    const homePage = () => {
        dispatch({ type: 'EMPTY' })
        history.push('/')
    }
    var nowDate = new Date();
    var date = nowDate.getFullYear() + '/' + (nowDate.getMonth() + 1) + '/' + nowDate.getDate();
    return (

        <>
            <Navbar />
            <div class="invoice-box">
                <table cellpadding="0" cellspacing="0">
                    <tr class="top">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td>

                                        Invoice: <br />
                                        Created: {date}<br />

                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr class="information">
                        <td colspan="2">
                            <table>
                                <tr>
                                    <td>
                                        <b>User:</b> <br />
                                        {name}<br />
                                        {email}<br />
                                    </td>

                                    <td>
                                        <b>Company:</b> <br />
                                        Nusrat E-Commerce<br />

                                        nusrat.khan@g.bracu.ac.bd <br />
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <tr class="heading">
                        <td>Payment Method</td>

                        <td>Card #</td>
                    </tr>

                    <tr class="details">
                        <td>Card</td>

                        <td>{totalPrice}</td>
                    </tr>

                    <tr class="heading">
                        <td>Item</td>

                        <td>Price</td>
                    </tr>
                    {shoppingCart.map(product => (
                        <tr class="item">
                            <td>{product.ProductName}</td>

                            <td>{product.ProductPrice}</td>
                        </tr>
                    ))}

                    <tr class="total">
                        <td></td>

                        <td>Total: ${totalPrice}</td>
                    </tr>
                </table>

            </div >
            <button type="submit" className='btn btn-success btn-md mybtn' onClick={homePage} style={{ margin: '0 auto', display: 'block', marginTop: '10px' }}>Go To Homepage</button>
            <Footer />
        </>
    )
}

export default Invoice