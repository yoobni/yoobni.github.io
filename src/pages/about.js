import React from "react"
import { Header, Layout } from "../components/";

export default function About() {
    return (
        <>
            <Header title="About here" />
            <Layout style={{ color: `teal` }}>
                <p>Such wow. Very React.</p>
            </Layout>
        </>
    );
}