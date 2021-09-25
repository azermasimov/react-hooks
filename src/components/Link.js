const Link = ({ className, href, children }) => {
    const onClick = (e) => {
        e.preventDefault();

        window.history.pushState({}, "", href);

        const navEvent = new PopStateEvent("popstate");
        window.dispatchEvent(navEvent);
    };

    return (
        <a className={className} href={href} onClick={onClick}>
            {children}
        </a>
    );
};

export default Link;
