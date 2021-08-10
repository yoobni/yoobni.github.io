import React from "react";
import { Header } from "./";

const Layout = ({ pageTitle = "", children }) => {

    return (
        <>
            <Header pageTitle={pageTitle} />
            <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
                {children}
            </div>
        </>
    )
}

export default Layout;