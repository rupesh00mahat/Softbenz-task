import React, { useContext, useEffect, useState } from 'react'
import { CiStar } from "react-icons/ci";
import { EcommerceStore } from '../store/store';
import { Link } from 'react-router-dom';

function ProductItems() {
    const [products, setProducts] = useState([]);

    const {state, dispatch} = useContext(EcommerceStore)

    console.log(state);

    const getData = async () => {
        await fetch('https://eyebrowapi.softbenz.com.np/api/product/latest') // api for the get request
            .then(response => response.json())
            .then(data => setProducts(data.data));
    }


    useEffect(() => {
        getData();
    }, [])

    return (
        <div className="products flex justify-start gap-20 container">
            {products.docs && products.docs.map(({ images, slug, price, strikePrice, title, totalRatings, _id, variantType }, index) => {

                return (
                    <div key={`${title}-${index}`} className='product-item'>
                        <img src={images[0]} title={title} height={"300px"} width={"300px"} className='rounded-md' />
                        <div className="product-content flex justify-between align-center">
                            <div className="title-and-rating flex-col justify-center">
                                <Link to={`/products/${slug}`}><h4 className='font-sm'>{title.slice(0, 20)}...  </h4></Link>
                                <div className="rating flex align-center">
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <CiStar />
                                    <span>({totalRatings})</span>
                                </div>
                            </div>
                            <div className="prices flex-col justify-center">
                                <span className="current-price font-base">
                                    ${price}
                                </span>
                                <span className="previous-price font-sm">
                                    ${strikePrice}
                                </span>
                            </div>
                        </div>
                        <button
                        onClick={ ()=>{
                            dispatch({type: "ADD_TO_STORE",payload: {title, images, price, quantity:1}})
                        }}
                        className="add-to-cart font-sm">
                            Add To Cart
                        </button>
                    </div>
                )
            })}
        </div>
    )
}

export default ProductItems