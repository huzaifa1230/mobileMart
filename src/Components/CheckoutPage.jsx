import React, { useState } from "react";

function CheckoutPage({ cart }) {
  const [billingInfo, setBillingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [shippingInfo, setShippingInfo] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    email: "",
    phone: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("creditCard");

  const calculateTotal = () => {
    return cart
      .reduce(
        (total, item) => total + parseFloat(item.price) * item.quantity,
        0
      )
      .toFixed(2);
  };

  const handleBillingChange = (e) => {
    const { name, value } = e.target;
    setBillingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleShippingChange = (e) => {
    const { name, value } = e.target;
    setShippingInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission and payment processing logic here
    console.log("Order placed:", {
      billingInfo,
      shippingInfo,
      paymentMethod,
      cart,
    });
  };

  return (
    <div className="container mx-auto p-4 bg-black text-white">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Billing Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={billingInfo.firstName}
              onChange={handleBillingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={billingInfo.lastName}
              onChange={handleBillingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={billingInfo.address}
              onChange={handleBillingChange}
              className="p-2 rounded-md bg-gray-800 text-white col-span-2"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={billingInfo.city}
              onChange={handleBillingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={billingInfo.state}
              onChange={handleBillingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={billingInfo.zip}
              onChange={handleBillingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={billingInfo.email}
              onChange={handleBillingChange}
              className="p-2 rounded-md bg-gray-800 text-white col-span-2"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={billingInfo.phone}
              onChange={handleBillingChange}
              className="p-2 rounded-md bg-gray-800 text-white col-span-2"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Shipping Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={shippingInfo.firstName}
              onChange={handleShippingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={shippingInfo.lastName}
              onChange={handleShippingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={handleShippingChange}
              className="p-2 rounded-md bg-gray-800 text-white col-span-2"
              required
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={handleShippingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              value={shippingInfo.state}
              onChange={handleShippingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="text"
              name="zip"
              placeholder="Zip Code"
              value={shippingInfo.zip}
              onChange={handleShippingChange}
              className="p-2 rounded-md bg-gray-800 text-white"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={shippingInfo.email}
              onChange={handleShippingChange}
              className="p-2 rounded-md bg-gray-800 text-white col-span-2"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={shippingInfo.phone}
              onChange={handleShippingChange}
              className="p-2 rounded-md bg-gray-800 text-white col-span-2"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Payment Options</h2>
          <div className="flex flex-col space-y-2">
            <label className="flex items-center">
              <input
                type="radio"
                value="creditCard"
                checked={paymentMethod === "creditCard"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Credit Card
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="paypal"
                checked={paymentMethod === "paypal"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              PayPal
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="bankTransfer"
                checked={paymentMethod === "bankTransfer"}
                onChange={handlePaymentChange}
                className="mr-2"
              />
              Bank Transfer
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
          <div className="bg-gray-800 p-4 rounded-md">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>
                  {item.title} x {item.quantity}
                </span>
                <span>
                  ${(parseFloat(item.price) * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${calculateTotal()}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="btn bg-black text-red-600 border-red-800  hover:bg-red-900 hover:text-black hover:border-black">
            Place order
          </button>
        </div>
      </form>
    </div>
  );
}

export default CheckoutPage;
