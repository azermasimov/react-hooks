import Link from "./Link";

const Header = () => {
    return (
        <div className="ui secondary pointing menu">
            <Link className="item" href="/">
                Accordion
            </Link>
            <Link className="item" href="/list">
                SearchList
            </Link>
            <Link className="item" href="/dropdown">
                Dropdown
            </Link>
            <Link className="item" href="/translate">
                Translate New
            </Link>
        </div>
    );
};

export default Header;
