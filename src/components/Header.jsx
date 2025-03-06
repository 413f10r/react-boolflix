import { useGlobalContext } from "../context/GlobalContext"


const Header = () => {

    const { movies, handleSummit, handleSearch  } = useGlobalContext()
    return (
        < >
            <nav className="navbar bg-body-tertiary bkgHeader">
                <div className="container-fluid ">
                    <h1 className="text-danger">BOOLFLIX</h1>
                    <form className="d-flex" role="search" onSubmit={handleSummit} >
                        <input className="form-control me-2" type="search" placeholder="Search Movies or Series" onChange={handleSearch } aria-label="Search" />
                        <button className="btn btn-outline-danger" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Header;