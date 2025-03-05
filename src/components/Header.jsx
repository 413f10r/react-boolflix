const Header = () => {

    return (
        < >
            <nav className="navbar bg-body-tertiary bkgHeader">
                <div className="container-fluid ">
                    <h1 className="mainTitle">BOOLFLIX</h1>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search Movies or Series" aria-label="Search" />
                        <button className="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header;