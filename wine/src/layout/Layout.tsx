import { Outlet } from "react-router-dom";
import { Navigation } from "../molecules";
import Footer from "../organisms/Footer/Footer";
const Layout = () => {
  return (
    <div className="app-container">
      {/* Fixed Header */}
      <header
        className="app-header"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <Navigation />
      </header>

      {/* Main content (children via Outlet) */}
      <main className="app-main" style={{ marginTop: "150px" }}>
        <Outlet />
      </main>

      <footer className="app-footer">{/* <Footer /> */}</footer>
    </div>
  );
};
export default Layout;
