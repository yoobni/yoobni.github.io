import React from "react";
import { Link } from "gatsby";
import { Header, Layout } from "../components/";

export default function Home() {
    return (
        <>
            <Header title="Hello Gatsby!" />
            <Layout>
                <p>What a world.</p>
                <p>What a description. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum enim esse ex mollitia vero? Aut illo impedit quasi recusandae rerum velit? Assumenda beatae eos esse, ex nemo neque quae temporibus!</p>
                <img src="https://source.unsplash.com/random/400x200" alt="" />
            </Layout>
        </>
    )
}