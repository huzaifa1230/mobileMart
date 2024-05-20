// import React, { useState } from "react";
// import data from "../../public/data.json";
// import Hero from "./Hero";
// import Testimonials from "./Testimonials";

// function Home() {
//   const [currentPage, setCurrentPage] = useState(0);
//   const itemsPerPage = 3; // Number of items per page

//   const totalPages = Math.ceil(data.length / itemsPerPage);

//   const handlePreviousPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
//   };

//   const handleNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
//   };

//   const renderItems = () => {
//     const startIndex = currentPage * itemsPerPage;
//     const endIndex = startIndex + itemsPerPage;
//     const currentPageData = data.slice(startIndex, endIndex);

//     return currentPageData.map((item) => (
//       <div key={item.id} className="card">
//         <img src={item.img} alt={item.title} className="card-img-top" />
//         <div className="card-body">
//           <h5 className="card-title font-semibold">{item.title}</h5>
//           <p className="card-text font-semibold">{item.price}</p>
//           <p className="card-text">{item.des}</p>
//           <button className="btn  bg-black text-red-600 border-red-500 drawer-button hover:bg-red-900 hover:text-black">Buy Now</button>
//         </div>
//       </div>
//     ));
//   };

//   return (
//     < >
//     <Hero />
//     <div className="p-10 bg-black text-red-300 min-h-screen flex flex-col items-center justify-center ">
//       <div className="grid grid-cols-3 gap-10  w-[900px]">
//         {renderItems()}
//       </div>
//       <div className="join grid grid-cols-3  w-48   ">
//         <button
//           onClick={handlePreviousPage}
//           className="join-item btn btn-outline   bg-black text-red-600 border-red-500  hover:bg-red-900 hover:text-black"
//         >
//           Previous
//         </button>
//         {/* <span className="col-span-1 text-center">
//           Page {currentPage + 1} of {totalPages}
//         </span> */}
//         <button
//           onClick={handleNextPage}
//           className="join-item btn btn-outline bg-black text-red-600 border-red-500  hover:bg-red-900 hover:text-black"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//     <div className="flex flex-col w-full bg-black">
//   <div className="divider divider-primary p-5"></div>
// </div>
// <Testimonials />
//     </>
//   );
// }

// export default Home;



import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Testimonials from "./Testimonials";

function Home() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 3; // Number of items per page

  useEffect(() => {
    // Fetching the product data from data.json in the public directory
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const renderItems = () => {
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPageData = data.slice(startIndex, endIndex);

    return currentPageData.map((item) => (
      <div key={item.id} className="card">
        <img src={item.img} alt={item.title} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title font-semibold">{item.title}</h5>
          <p className="card-text font-semibold">{item.price}</p>
          <p className="card-text">{item.des}</p>
          <button className="btn bg-black text-red-600 border-red-500 drawer-button hover:bg-red-900 hover:text-black">Buy Now</button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <Hero />
      <div className="p-10 bg-black text-red-300 min-h-screen flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 gap-10 w-[900px]">
          {renderItems()}
        </div>
        <div className="join grid grid-cols-3 w-48">
          <button
            onClick={handlePreviousPage}
            className="join-item btn btn-outline bg-black text-red-600 border-red-500 hover:bg-red-900 hover:text-black"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            className="join-item btn btn-outline bg-black text-red-600 border-red-500 hover:bg-red-900 hover:text-black"
          >
            Next
          </button>
        </div>
      </div>
      <div className="flex flex-col w-full bg-black">
        <div className="divider divider-primary p-5"></div>
      </div>
      <Testimonials />
    </>
  );
}

export default Home;
