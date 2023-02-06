import "./nav-styles.scss";
import React, { useState, useEffect } from "react";
import LeftNav from "./LeftNav";
import RightNav from "./RightNav";
import useWindowDimensions from "../../hooks/useWindowDimensions";

export default function NavContainer() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (width > 768) setSidebarOpen(true);
    else setSidebarOpen(false);
  }, [width]);

  return (
    <nav id="nav">
      <LeftNav setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen} />
      <RightNav sidebarOpen={sidebarOpen} />
    </nav>
  );
}
