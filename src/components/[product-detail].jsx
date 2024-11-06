import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../App.css";

function ProductDetail() {

  const [productCount, setProductCount] = useState(0);

  const { productId } = useParams();

  const [productDetail, setProductDetail] = useState([]);


  const getData = async () => {
    await fetch(`https://eyebrowapi.softbenz.com.np/api/product/for-public/${productId}`) // api for the get request
      .then(response => response.json())
      .then(data => setProductDetail(data));
  }


  useEffect(() => {
    getData();
  }, [])




  return (
    <>
      {productDetail.message == "Successfully got detail" && (
        <div className='product-detail'>
          <div className="product-detail-main flex justify-between gap-20">
            <img src={productDetail.data.images[0]} alt="" height={"100%"} width={"40%"}/>
            <div className="product-detail-content">
              <div className="product-categories flex gap-10">
                {productDetail.data.breadCrums.map((breadCrum) => {
                  return <span className='category'>{breadCrum.title}</span>
                })}
              </div>
              <h3 className="product-title font-md">{productDetail.data.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: productDetail.data.description }} />
              <div className="add-to-cart-and-quantity">
                <div className="quantity flex gap-10 align-center mb-10 mt-10">
                  <button
                  onClick={()=>{
                    setProductCount(prevCount => prevCount > 0 ? prevCount-1 : prevCount);
                  }}
                  className='decrement'>-</button>
                  <span className='font-base'>{productCount}</span>
                  <button 
                  onClick={()=>{
                    setProductCount(prevCount => prevCount+1)
                  }}
                  className='increment'>+</button>
                </div>
                <button className='add-to-cart'>Add to Cart</button>
              </div>
            </div>
          </div>
          <div className="ingredients">
            <h3 className='font-md'>Ingredients</h3>
            <div className='ingredients-detail' dangerouslySetInnerHTML={{ __html: productDetail.data.ingredient }} />
            </div>
          <div className="how-to-use">
          <h3 className='font-md'>How To Use</h3>
          <div dangerouslySetInnerHTML={{ __html: productDetail.data.howToUse }} />
          </div>
        </div>
      )}
    </>
  )
}

export default ProductDetail