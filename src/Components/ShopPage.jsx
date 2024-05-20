import React, { useEffect, useState } from 'react';

function ShopPage() {
  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState('default'); 

  useEffect(() => {
   
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const sortProducts = (criteria) => {
    let sortedProducts = [...products]; // Create a copy of the original array
    
    switch(criteria) {
      case 'priceLowToHigh':
        sortedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'priceHighToLow':
        sortedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      default:
        // Default case, do nothing (products remain in original order)
        break;
    }
    
    setProducts(sortedProducts); // Update state with the sorted array
  };
  

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    console.log('Selected option:', selectedOption);
    setSortBy(selectedOption);
    sortProducts(selectedOption); // Call sortProducts after updating sortBy state
  };

  return (
    <>
      {/* Sorting dropdown menu */}
      <div className="flex justify-end my-4">
      <select
  className="text-white bg-black border border-white px-4 py-2 rounded-md"
  value={sortBy}
  onChange={handleChange}
>
  <option value="default">Default</option>
  <option value="priceLowToHigh">Price: Low to High</option>
  <option value="priceHighToLow">Price: High to Low</option>
</select>
      </div>

      <div className="flex flex-wrap justify-center bg-black">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2">
            <div className=" border text-white border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-2">
              <a href="#">
                <img className="p-4 rounded-t-lg" src={product.img} alt={`${product.title} image`} />
              </a>
              <div className="px-4 pb-4">
                <a href="#">
                  <h5 className="text-lg font-semibold tracking-tight text-white">{product.title}</h5>
                  <p>{product.des}</p>
                </a>
                <div className="flex items-center justify-between mt-2.5 mb-4">
                  <span className="text-2xl font-bold text-white">{product.price}</span>
                  <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ShopPage;
