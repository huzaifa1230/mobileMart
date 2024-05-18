import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../src/Components/Sidebar";
import Footer from "./Components/Footer";
import ShopPage from "./Components/ShopPage";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<ShopPage />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </>
  );
}

export default App;
