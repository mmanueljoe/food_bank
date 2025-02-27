import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css"

const Cart = () => {
  const { CartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  return (
    <>
      <div className="cart">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          <br />
          <hr />
          {food_list.map((item) => {
            if (CartItems[item._id] > 0) {
              return (
                <div>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>Ghc {item.price}</p>
                    <p>{CartItems[item._id]}</p>
                    <p>Ghc {CartItems[item._id] * item.price}</p>
                    <p onClick={() => removeFromCart(item._id)} className="cross">X</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
        {/* cart items div ends here */}
        <div className="cart-bottom">
            <div className="cart-total">
                <h2>Cart Total</h2>
            </div>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>Ghc{getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Delivery Charges</p>
            <p>Ghc{getTotalCartAmount() === 0 ? 0:10}</p>
          </div>
          <hr />
          <div className="cart-total-details">
            <p>Total</p>
            <p>Ghc{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 10}</p>
          </div>
          <button>Proceed To Checkout</button>
        </div>
        <div className="cart-promocode">
            <p>
                Enter promo code here
            </p>
            <div className="cart-promocode-input">
                <input type="text" placeholder="Promo code"/>
                <button>Submit</button>
            </div>
        </div>
      </div>
      {/* cart bottom div ends here */}
    </>
  );
};

export default Cart;
