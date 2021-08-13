import React from "react"
import { Layout } from "../components";

export default function About() {
    return (
        <>
            <Layout
                style={{ color: `teal` }}
                pageTitle={"About"}
            >
                <p>Such wow. Very React.</p>
            </Layout>
        </>
    );
}