import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <header className="header">
            <a href="/">
                <img
                    src="https://fontmeme.com/temporary/d3992aee6f1963fe7de45968e039489f.png"
                    alt="netflix-font"
                    border="0"
                />
            </a>
            <div id="navigation" className="navigation">
                <nav>
                    <ul>
                        <li>
                            <a href="/my-watch-list">Watch List</a>
                        </li>
                        <li>
                            <Link to="/providers">Providers</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            {props.children}
        </header>
    );
};

export default Header;
