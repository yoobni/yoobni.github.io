import React from "react";

export default function Header(props) {
    const {
        title = "Yoobni blog",
    } = props;

    return <h1>{title}</h1>
}