import { StaticImage } from "gatsby-plugin-image"
import React from "react";

type LinkProps = {
    linkPage: string,
    source: string,
    alt: string
}

// StaticImage использовать вместо image

export const LinkItem = ({ linkPage, source, alt }: LinkProps) => {
    return (
        // console.log(source)
        <a style={{ border: "2px solid red" }} href={linkPage}>
            <StaticImage src={source} alt={alt} />
        </a>
    )
}
