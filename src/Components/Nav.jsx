import "./Styles/Nav.css"


function Nav() {
    return (
        <nav className={"nav"}>
            <div>
                <button> Profile</button>
            </div>
            <div>
                <button > Messages</button>
            </div>
            <div>
                <button > News</button>
            </div>
            <div>
                <button > Music</button>
            </div>
        </nav>
    )
}

export default Nav