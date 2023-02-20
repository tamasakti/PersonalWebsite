import React, { FC } from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col bg-white">
        <Navbar />
        <div className="w-full min-h-screen">{children}</div>
      </div>
    </>
  );
};

export default Layout;
