import React from "react";
import MobileSidebar from "./sidebar-mobile";
import NavbarRoutes from "@/components/navbar-routes";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="p-4 border-border h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes/>
    </div>
  );
};

export default Navbar;
