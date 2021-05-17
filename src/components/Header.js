import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";

const Container = styled.header`
    width: 100%;
    height; 50px;
    border-bottom: 1px solid #f1f3f6;
    box-shadow: 1px 1px 2px rgba(233, 244, 255, 0.7);
`;

export default function Header(props) {
    const {
        title = "Yoobni blog",
    } = props;

    return (
        <Container>
            <h1>{title}</h1>
            <Link to="/">Home</Link>
            <Link to="/about/">About</Link>
            <Link to="/contact/">Contact</Link>
        </Container>
    );
}