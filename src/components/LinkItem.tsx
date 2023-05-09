type LinkProps = {
    linkPage: string,
    children: any // which type for <StaticImage />?
}

export const LinkItem = ({ linkPage, children }: LinkProps) => {
    return (
        <a className="menu-link__item" href={linkPage}>
            {children}
        </a>
    )
}
