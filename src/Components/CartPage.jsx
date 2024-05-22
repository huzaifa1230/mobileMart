import React from "react";
import { Link } from "react-router-dom";

function CartPage({ cart, updateCart }) {
  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    updateCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 text-white">Shopping Cart</h1>
      <div className="bg-black rounded-lg shadow-md p-4">
        {cart.length === 0 ? (
          <p className="text-white">Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between mb-4 border-b border-gray-700 pb-4"
              >
                <img
                  className="w-20 h-20 rounded"
                  src={item.img}
                  alt={item.title}
                />
                <div className="flex-1 ml-4">
                  <h2 className="text-lg font-semibold text-white">
                    {item.title}
                  </h2>
                  <p className="text-white">{item.des}</p>
                  <p className="text-white font-bold">${item.price}</p>
                </div>
                <div className="flex items-center">
                  <input
                    type="number"
                    className="text-black w-16 text-center border border-gray-300 rounded-md"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                  <button
                    className="ml-4 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-2 text-center"
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center mt-4">
              <span className="text-2xl font-bold text-white">
                Total: ${calculateTotal()}
              </span>
              <Link
                to="/checkout"
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center"
              >
                Proceed to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default CartPage;
