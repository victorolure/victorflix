import {Link} from "react-router-dom";
import victorFlix from '../assets/victorflix.png'

const Header = (props) => {
    return (
        <header className="header">
            <a href="/">
                <img
                    src={victorFlix}
                    alt="netflix-font"
                    border="0"
                />
            </a>
            <div id="navigation" className="navigation">
                <nav>
                    <ul>
                        <li>
                            <Link to="/my-watch-list">Watch List</Link>
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
