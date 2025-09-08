import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/100.css";
import AppLoader from "./atoms/AppLoader/AppLoader";
import ScrollToTop from "./ScrollTop";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductsList = lazy(() => import("./pages/ProductList/ProductListPage"));
const ProductViewPage = lazy(() => import("./pages/ProductView/ProductViewPage"));
const Layout = lazy(() => import("./layout/Layout"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage"));

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<AppLoader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/productsList" element={<ProductsList />} />
            <Route path="/productView" element={<ProductViewPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<h1>404 - Page Not Found</h1>} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
