import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import DarkModeToggle from "./DarkModeToggle";
import logo from "/assets/desktop/logo.svg";

const Layout = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1223 });
  const isDesktop = useMediaQuery({ minWidth: 1224 });

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
          padding: isMobile ? "1.5rem" : isTablet ? "3rem" : "3rem 10rem",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <img src={logo} />
        <div>
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
          padding: isMobile ? "1.5rem" : isTablet ? "3rem" : "3rem 10rem",
        }}
      >
        {location.pathname === "/" && <FilterSection />}
        <Outlet />
      </div>
    </>
  );
};
