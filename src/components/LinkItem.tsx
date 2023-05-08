type LinkProps = {
    linkPage: string,
    children: any // which type for <StaticImage />?
}

export const LinkItem = ({ linkPage, children }: LinkProps) => {
    return (
        // console.log(source)
        <a className="menu-link__item" href={linkPage}>
            {children}
            {/* <StaticImage src={source} alt={alt} width={50} height={50} /> */}
        </a>
    )
}
