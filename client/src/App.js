import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage/CartPage";
import OrderInfoPage from "./pages/OrderInfoPage/OrderInfoPage";
import ShopsPage from "./pages/ShopsPage/ShopsPage";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<ShopsPage pageClassName={"shops"} />} />
        <Route path="/cart" element={<CartPage pageClassName={"cart"} />} />
        <Route
          path="/orderInfo"
          element={<OrderInfoPage pageClassName={"order-info"} />}
        />
      </Routes>
    </>
  );
}
export default App;
