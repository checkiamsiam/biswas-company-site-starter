import { AppBar, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import HeaderMain from "./HeaderMain";
import HeaderTop from "./HeaderTop";
import style from "../../styles/home.module.css";

const Header = () => {
  const [hideness, setHideness] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > 50) {
        setHideness(true);
      } else {
        setHideness(false);
      }
    };
    window.addEventListener("scroll", controlNavbar);
  }, []);
  return (
    <div style={{ backgroundColor: "#E21F36" , position: "fixed" , top: hideness ? "-60px" : "0px" , transition: "0.3s linear" , width: "100%"}}>
      <HeaderTop />
      <div>
        <HeaderMain />
      </div>
    </div>
  );
};

export default Header;
