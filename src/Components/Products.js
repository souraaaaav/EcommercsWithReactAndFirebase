import React, { useContext } from 'react';
import { CartContext } from '../Global/CartContext';
import { ProductsContext } from '../Global/ProductsContext';
import Footer from './Footer';

export const Products = () => {

    const { products } = useContext(ProductsContext);
    const newProduct = [...products]
    newProduct.splice(32, 112)
    const topProduct = newProduct.slice(0, 4)
    const dailyProduct = newProduct.slice(4, 8)
    const grossingProduct = newProduct.slice(8, 12)
    const ratedProduct = newProduct.slice(12, 16)
    const topSellProduct = newProduct.slice(16, 20)
    const localProduct = newProduct.slice(20, 24)
    const internationalProduct = newProduct.slice(24, 32)

    const { dispatch } = useContext(CartContext);

    return (
        <>
            {topProduct.length !== 0 && <h1>Top Products</h1>}
            <div className='products-container'>
                {topProduct.length === 0 && <div>slow internet...no products to display</div>}
                {topProduct.map((product) => (
                    <>
                        <div className='product-card' key={product.ProductID}>
                            <div className='product-img'>
                                <img src={product.ProductImg} alt="not found" />
                            </div>
                            <div className='product-name'>
                                {product.ProductName}
                            </div>
                            <div className='product-price'>
                                $ {product.ProductPrice}.00
                            </div>
                            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </div>
                    </>
                ))}
            </div>

            {dailyProduct.length !== 0 && <h1>Daily Products</h1>}
            <div className='products-container'>
                {dailyProduct.length === 0 && <div>slow internet...no products to display</div>}
                {topProduct.map((product) => (
                    <>
                        <div className='product-card' key={product.ProductID}>
                            <div className='product-img'>
                                <img src={product.ProductImg} alt="not found" />
                            </div>
                            <div className='product-name'>
                                {product.ProductName}
                            </div>
                            <div className='product-price'>
                                $ {product.ProductPrice}.00
                            </div>
                            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </div>
                    </>
                ))}
            </div>

            {grossingProduct.length !== 0 && <h1>Grossing Products</h1>}
            <div className='products-container'>
                {grossingProduct.length === 0 && <div>slow internet...no products to display</div>}
                {grossingProduct.map((product) => (
                    <>
                        <div className='product-card' key={product.ProductID}>
                            <div className='product-img'>
                                <img src={product.ProductImg} alt="not found" />
                            </div>
                            <div className='product-name'>
                                {product.ProductName}
                            </div>
                            <div className='product-price'>
                                $ {product.ProductPrice}.00
                            </div>
                            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </div>
                    </>
                ))}
            </div>

            {ratedProduct.length !== 0 && <h1>Rated Products</h1>}
            <div className='products-container'>
                {ratedProduct.length === 0 && <div>slow internet...no products to display</div>}
                {ratedProduct.map((product) => (
                    <>
                        <div className='product-card' key={product.ProductID}>
                            <div className='product-img'>
                                <img src={product.ProductImg} alt="not found" />
                            </div>
                            <div className='product-name'>
                                {product.ProductName}
                            </div>
                            <div className='product-price'>
                                $ {product.ProductPrice}.00
                            </div>
                            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </div>
                    </>
                ))}
            </div>

            {topSellProduct.length !== 0 && <h1>Top Sell Products</h1>}
            <div className='products-container'>
                {topSellProduct.length === 0 && <div>slow internet...no products to display</div>}
                {topSellProduct.map((product) => (
                    <>
                        <div className='product-card' key={product.ProductID}>
                            <div className='product-img'>
                                <img src={product.ProductImg} alt="not found" />
                            </div>
                            <div className='product-name'>
                                {product.ProductName}
                            </div>
                            <div className='product-price'>
                                $ {product.ProductPrice}.00
                            </div>
                            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </div>
                    </>
                ))}
            </div>

            {localProduct.length !== 0 && <h1>Local Products</h1>}
            <div className='products-container'>
                {localProduct.length === 0 && <div>slow internet...no products to display</div>}
                {localProduct.map((product) => (
                    <>
                        <div className='product-card' key={product.ProductID}>
                            <div className='product-img'>
                                <img src={product.ProductImg} alt="not found" />
                            </div>
                            <div className='product-name'>
                                {product.ProductName}
                            </div>
                            <div className='product-price'>
                                $ {product.ProductPrice}.00
                            </div>
                            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </div>
                    </>
                ))}
            </div>

            {internationalProduct.length !== 0 && <h1>International Products</h1>}
            <div className='products-container'>
                {internationalProduct.length === 0 && <div>slow internet...no products to display</div>}
                {internationalProduct.map((product) => (
                    <>
                        <div className='product-card' key={product.ProductID}>
                            <div className='product-img'>
                                <img src={product.ProductImg} alt="not found" />
                            </div>
                            <div className='product-name'>
                                {product.ProductName}
                            </div>
                            <div className='product-price'>
                                $ {product.ProductPrice}.00
                            </div>
                            <button className='addcart-btn' onClick={() => dispatch({ type: 'ADD_TO_CART', id: product.ProductID, product })}>ADD TO CART</button>
                        </div>
                    </>
                ))}
            </div>
            <Footer />
        </>
    )
}
