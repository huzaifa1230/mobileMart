// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Sidebar from "../src/Components/Sidebar";
// import Footer from "./Components/Footer";
// import ShopPage from "./Components/ShopPage";
// import CartPage from "./Components/CartPage";

// function App() {
//   return (
//     <>
//         <BrowserRouter>
//       <Navbar />
//       <Sidebar />
//       <div>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/shop" element={<ShopPage />} />
//             <Route path="/cart" element={<CartPage />} />
//           </Routes>
//       </div>
//       <Footer />
//         </BrowserRouter>
//     </>
//   );
// }

// export default App;




import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Footer from "./Components/Footer";
import ShopPage from "./Components/ShopPage";
import CartPage from "./Components/CartPage";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <Router>
      <Navbar  cart={cart}/>
      <Sidebar />
      <div className="bg-black min-h-screen">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ShopPage cart={cart} setCart={setCart} />} />
          <Route path="/cart" element={<CartPage cart={cart} updateCart={setCart} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
