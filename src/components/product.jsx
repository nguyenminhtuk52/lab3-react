import React from "react"
import { useDispatch } from "react-redux"
import '../App.css'
const Product = ({ product }) => {
  const dispatch = useDispatch()
  const addToCart = (item) => {
    dispatch({
      type: "cart/add",
      payload: { ...item, count: 1 }
    });
    alert("Add Thanh Cong");
  }
  return (
    <div>
      <h3>Products</h3>
      <div className='product-container'>
        {product?.map(item => (
          <div className="product-item" onClick={() => addToCart(item)}>
            <h4>{item.name}</h4>
            <div>{item.saleOffPrice}</div>
            <img style={{ width: "50%" }} src={item.image} />
          </div>
        ))}
      </div>
    </div>

  )
}

export default Product