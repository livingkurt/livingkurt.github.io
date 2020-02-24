import React from "react";
import { Link, useLocation } from "react-router-dom";
import './header.css'

function NavTabs() {
    // We'll go into the Hooks API later, for now, we are just using some code
    // from the react-router docs (https://reacttraining.com/react-router/web/api/Hooks/uselocation)
    // This allows the component to check the route any time the user uses a link to navigate.
    const location = useLocation();

    return (
        <ul className="nav">
            <li className="nav_items">
                <Link to="/" >
                    <i id="home_i" className={location.pathname === "/" ? "fas fa-home tooltip icon_active zoom_h" : " fas fa-home tooltip icon_inactive zoom_h" }>
                        <span id="home_pop_up"className="tooltiptext">Home</span>
                    </i>
                </Link>

            </li>
            <li className="nav_items">
                <Link to="/about">
                    <i id="about_i" className={location.pathname === "/about" ? "fas fa-address-card tooltip icon_active zoom_h" : " fas fa-address-card tooltip icon_inactive zoom_h" }>
                        <span id="about_pop_up"className="tooltiptext">About</span>
                    </i>
                </Link>

            </li>
            <li className="nav_items">
                <Link to="/projects">
                    <i id="projects_i" className={location.pathname === "/projects" ? "fas fa-folder tooltip icon_active zoom_h" : " fas fa-folder tooltip icon_inactive zoom_h" }>
                        <span id="projects_pop_up"className="tooltiptext">Projects</span>
                    </i>
                </Link>

            </li>
            <li className="nav_items">
                <Link to="/contact">
                    <i id="contact_i" className={location.pathname === "/contact" ? "fas fa-envelope tooltip icon_active zoom_h" : " fas fa-envelope tooltip icon_inactive zoom_h" }>
                        <span id="contact_pop_up"className="tooltiptext">Contact</span>
                    </i>
                </Link>

            </li>
        </ul>
    );
}

export default NavTabs;
