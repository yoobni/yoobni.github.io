import React from "react";
import { Link } from "gatsby";
import { Header, Layout } from "../components/";

export default function Contact() {
    return (
        <>
            <Header title="Contact" />
            <Layout>
                <p>Send us a message!</p>
            </Layout>
        </>
    );
}