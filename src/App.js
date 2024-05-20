import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../src/Components/Sidebar";
import Footer from "./Components/Footer";
import ShopPage from "./Components/ShopPage";
import Cart from "./Components/Cart";

function App() {
  return (
    <>
        <BrowserRouter>
      <Navbar />
      <Sidebar />
      <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
      </div>
      <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
