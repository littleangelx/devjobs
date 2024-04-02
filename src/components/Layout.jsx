import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import DarkModeToggle from "./DarkModeToggle";
import logo from "/assets/desktop/logo.svg";

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });

  return (
    <>
      <div
        style={{
          backgroundImage: isMobile
            ? 'url("/assets/mobile/bg-pattern-header.svg")'
            : isTablet
            ? 'url("/assets/tablet/bg-pattern-header.svg")'
            : 'url("/assets/desktop/bg-pattern-header.svg")',

          backgroundSize: "cover",
          height: isMobile ? "8.5rem" : "10rem",
          paddingLeft: isMobile ? "1.5rem" : isTablet ? "3rem" : "10rem",
          paddingRight: isMobile ? "1.5rem" : isTablet ? "3rem" : "10rem",
          paddingTop: "2rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <img className="logo" src={logo} />
        <div className="toggle">
          <img src="/assets/desktop/icon-sun.svg" />
          <div className="dark-mode-toggle">
            <DarkModeToggle />
          </div>
          <img src="/assets/desktop/icon-moon.svg" />
        </div>
      </div>
      <div
        className="container"
        style={{
          paddingLeft: isMobile ? "1.5rem" : isTablet ? "3rem" : "10rem",
          paddingRight: isMobile ? "1.5rem" : isTablet ? "3rem" : "10rem",
        }}
      >
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
