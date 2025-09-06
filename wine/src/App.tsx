import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/100.css";
import { Box } from "@mui/material";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductsList = lazy(() => import("./pages/ProductList/ProductListPage"));
const ProductViewPage = lazy(() => import("./pages/ProductView/ProductViewPage"));
const Layout = lazy(() => import("./layout/Layout"));

const App: React.FC = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
            <img src="/loader.gif" alt="Loading..." style={{ width: 150, height: 150 }} />
          </Box>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productsList" element={<ProductsList />} />
            <Route path="/productView" element={<ProductViewPage />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
