import './assets/scss/Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar border-bottom mb-5">
            <div className="container-fluid">
                <h1 className="navbar-brand fw-bold">List and Info</h1>
                <div className="d-flex">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/new-blog">New Entry</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;