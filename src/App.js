import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../src/Components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
