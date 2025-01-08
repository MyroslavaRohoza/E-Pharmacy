import "./App.module.css";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./components/SharedLayout/SharedLayout.tsx";
import LoginPage from "./pages/LoginPage/LoginPage.tsx";
import DasboardPage from "./pages/DasboardPage/DasboardPage.tsx";
import AllOrdersPage from "./pages/AllOrdersPage/AllOrdersPage.tsx";
import AllProductsPage from "./pages/AllProductsPage/AllProductsPage.tsx";
import AllSuppliersPage from "./pages/AllSuppliersPage/AllSuppliersPage.tsx";
import CustomersDataPage from "./pages/CustomersDataPage/CustomersDataPage.tsx";

function App() {
  return (
    <SharedLayout>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<DasboardPage />} />
        <Route path="/orders" element={<AllOrdersPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/suppliers" element={<AllSuppliersPage />} />
        <Route path="/customers" element={<CustomersDataPage />} />
      </Routes>
    </SharedLayout>
  );
}

export default App;
