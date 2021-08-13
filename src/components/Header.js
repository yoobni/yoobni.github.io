import React from "react";
import styled from "styled-components";
import { Link, useStaticQuery, graphql } from 'gatsby'

const Container = styled.header`
    width: 100%;
    height: 70px;
    border-bottom: 1px solid #f1f3f6;
    box-shadow: 1px 1px 2px rgba(233, 244, 255, 0.7);
    padding: 22px 3rem 0;
    margin-bottom: 1.5rem;
    
    h3 {
        display: inline;
    }
    
    ul {
        display: inline;
        float: right;
    }
`;

const ListLink = (props) => (
    <li style={{ display: `inline-block`, margin: `0 1rem 0 0`}}>
        <Link to={props.to}>
            {props.children}
        </Link>
    </li>
);

const Header = ({ pageTitle = "", props }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    // const {
    //     title = "Yoobni blog",
    // } = props;

    const {
        title
    } = data.site.siteMetadata;

    console.log(title);

    return (
        <Container>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3>{title}</h3>
            </Link>
            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/blog">Blog</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact">Contact</ListLink>
            </ul>
        </Container>
    );
}

export default Header;