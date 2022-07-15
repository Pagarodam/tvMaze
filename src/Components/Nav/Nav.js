import { Link } from "react-router-dom"

const Nav = ()=>{
    return(
        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            }}
        >
            <Link to="/showSingleView">SingleView</Link> |{" "}
        </nav>
    )
}
export default Nav;