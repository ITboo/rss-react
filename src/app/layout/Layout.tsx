import { Outlet } from "react-router-dom";

import { Home } from "../../pages/Home/Home";
import { Footer } from "../../widgets/Footer/Footer";
import { Header } from "../../widgets/Header/Header";

import styles from "../styles/Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.app}>
      <Header />
      <>
        <Home />
        <Outlet />
      </>
      <Footer />
    </div>
  );
};
