import React from "react";
import { Outlet } from "react-router-dom";

const Footer=()=>{
    return(
        <>
            <p className="footer mt-auto mb-0 text-center p-3">&copy; copyrights by aakash dave, since 2022 , ❤️ from DEVLOPER</p>
            <Outlet/>
        </>
    )
}

export default Footer;