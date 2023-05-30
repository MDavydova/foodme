import Navbar from "./components/Navbar/Navbar";
import CartPage from "./pages/CartPage/CartPage";
import OrderInfoPage from "./pages/OrderInfoPage/OrderInfoPage";
import ShopsPage from "./pages/ShopsPage/ShopsPage";
import { Route, Routes } from "react-router-dom";

function App() {
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
