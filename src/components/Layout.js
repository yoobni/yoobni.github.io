import React from "react";
import { Header } from "./";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <div style={{ margin: `3rem auto`, maxWidth: 800, padding: `0 1rem` }}>
                {children}
            </div>
        </>
    )
}