import React from "react";
import {Outlet} from "react-router-dom";
import NavbarComponent from"../components/NavbarComponent";
import FooterComponent from"../components/footer";

const Layout = () => {
 return (
<>
<NavbarComponent />
<Outlet />
<FooterComponent />
</>
);
};

export default Layout;