import React, { useEffect, useState } from "react";

function SamsungPage({ cart, setCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => {
        const samsungProducts = data.filter(
          (product) => product.company === "samsung"
        );
        setProducts(samsungProducts);
      });
  }, []);

  const addToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    const price = parseFloat(product.price);

    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, price, quantity: 1 }]);
    }
  };

  return (
    <>
      <div className="flex flex-wrap justify-center bg-black">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2"
          >
            <div className="border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
              <a href="#">
                <img
                  className="p-4 rounded-t-lg"
                  src={product.img}
                  alt={`${product.title} image`}
                />
              </a>
              <div className="px-4 pb-4">
                <a href="#">
                  <h5 className="text-lg font-semibold tracking-tight text-white">
                    {product.title}
                  </h5>
                  <p>{product.des}</p>
                </a>
                <div className="flex items-center justify-between mt-2.5 mb-4">
                  <span className="text-2xl font-bold text-white">
                    ${product.price}
                  </span>
                  <button
                    onClick={() => addToCart(product)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="divider mb-0 divider-primary pb-12 pt-12 p-5"></div>
    </>
  );
}

export default SamsungPage;
