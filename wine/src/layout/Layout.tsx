import { Outlet } from "react-router-dom";
import { Navigation } from "../molecules";
import Footer from "../organisms/Footer/Footer";
import { useHomeLogic } from "../pages/Home/Home.hook";
const Layout = () => {
  const { stores, storesData } = useHomeLogic();

  return (
    <div className="app-container">
      {/* Fixed Header */}
      <header
        className="app-header"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <Navigation stores={stores} storesData={storesData} />
      </header>

      {/* Main content (children via Outlet) */}
      <main className="app-main" style={{ marginTop: "180px" }}>
        <Outlet />
      </main>

      <footer className="app-footer">
        <Footer stores={stores} storesData={storesData} />
      </footer>
    </div>
  );
};
export default Layout;
