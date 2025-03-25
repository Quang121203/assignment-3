import './sidebar.css'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="sidebar col-4 col-md-2">
            <h5 className="text-center fw-bold py-5 pb-2">Menu</h5>
            <ul className="flex-column ps-2">
                <NavLink to="/" className="nav-link fw-bold text-dark my-4"> Dashboard</NavLink>
                <NavLink to="/search" className="nav-link fw-bold text-dark my-4"> Search Scores</NavLink>
                <NavLink to="/report" className="nav-link fw-bold text-dark my-4"> Reports</NavLink>
                <NavLink to="/ranking" className="nav-link fw-bold text-dark my-4"> Rankings</NavLink>
            </ul>
        </div>
    )
}

export default Sidebar