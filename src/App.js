import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AddProducts } from './Components/AddProducts'
import { Cart } from './Components/Cart'
import { Cashout } from './Components/Cashout'
import { Home } from './Components/Home'
import { Login } from './Components/Login'
import { NotFound } from './Components/NotFound'
import { Signup } from './Components/Signup'
import TermsAndCondition from './Components/TermsAndCondition'
import { auth, db } from './Config/Config'
import { CartContextProvider } from './Global/CartContext'
import { ProductsContextProvider } from './Global/ProductsContext'

export class App extends Component {

    state = {
        user: null,
    }

    componentDidMount() {

        // getting user info for navigation bar
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('SignedUpUsersData').doc(user.uid).get().then(snapshot => {
                    this.setState({
                        user: snapshot.data().Name
                    })
                })
            }
            else {
                this.setState({
                    user: null
                })
            }
        })

    }

    render() {
        return (
            <ProductsContextProvider>
                <CartContextProvider>
                    <BrowserRouter>
                        <Switch>
                            {/* home */}
                            <Route exact path='/' component={() => <Home user={this.state.user} />} />
                            {/* signup */}
                            <Route path="/signup" component={Signup} />
                            {/* login */}
                            <Route path="/login" component={Login} />
                            {/* cart products */}
                            <Route path="/cartproducts" component={() => <Cart user={this.state.user} />} />
                            {/* add products */}
                            <Route path="/addproducts" component={AddProducts} />
                            {/* cashout */}
                            <Route path='/cashout' component={() => <Cashout user={this.state.user} />} />
                            <Route path='/termsandcondition' component={TermsAndCondition} />
                            <Route component={NotFound} />
                        </Switch>
                    </BrowserRouter>
                </CartContextProvider>
            </ProductsContextProvider>
        )
    }
}

export default App
