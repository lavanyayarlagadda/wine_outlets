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
import { useClientIp } from "./hooks/userIp";

const Home = lazy(() => import("./pages/Home/Home"));
const ProductsList = lazy(() => import("./pages/ProductList/ProductListPage"));
const ProductViewPage = lazy(() => import("./pages/ProductView/ProductViewPage"));
const MyOrders = lazy(() => import("./pages/MyOrders/MyOrders"));
const Layout = lazy(() => import("./layout/Layout"));
const ProfilePage = lazy(() => import("./pages/Profile/ProfilePage"));
const CartOverview = lazy(() => import("./pages/CartOverView/CartOverViewPage"));
const Invoice = lazy(() => import("./pages/Invoice/Invoice"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPlicy/PrivacyPolicyPage"));
const TermsConditions = lazy(() => import("./pages/TermsConditions/TermsConditionsPage"));
const PickupProcess = lazy(() => import("./pages/PickupProcess/PickupProcessPage"));
const AboutUs = lazy(() => import("./pages/AboutUs/AboutUsPage"));
const ContactUs = lazy(() => import("./pages/ContactUs/ContactUs"));
const Career = lazy(() => import("./pages/Career/Career"));
const AccessibilityStatement = lazy(
  () => import("./pages/AccessibilityStatement/AccessibilityStatementPage")
);
const VipBenefits = lazy(() => import("./pages/VipBenefits/VipBenefitsPage"));
const NotFoundPage = lazy(() => import("./pages/NotFound/NotFound"));
const App: React.FC = () => {
  useClientIp();

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
            <Route path="/myOrders" element={<MyOrders />} />
            <Route path="/cartOverview" element={<CartOverview />} />
            <Route path="/orders/invoice/:id" element={<Invoice />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsConditions />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/pickupProcess" element={<PickupProcess />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/careers" element={<Career />} />
            <Route path="/accessibilityStatement" element={<AccessibilityStatement />} />
            <Route path="/vip/benefits" element={<VipBenefits />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
