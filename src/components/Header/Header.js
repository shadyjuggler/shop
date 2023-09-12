import "./Header.scss";
import { Link } from "react-router-dom";

import logo from "../../resources/logo.png";
import AddProduct from "../../pages/AddProduct";



function Header({ title, buttons }) {


    return (
        <header className="header">
            <div className="container">
                <div className="header-logo">
                    <img className="header-logo-img" src={logo} alt="logo" />
                    <h1 className="header-logo-text">{title}</h1>
                </div>

                {
                    buttons
                }

                <div className="header-burgerMenu">
                    <svg id="burgerIcon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 18L20 18" stroke-width="2" stroke-linecap="round"></path> <path d="M4 12L20 12" stroke-width="2" stroke-linecap="round"></path> <path d="M4 6L20 6" stroke-width="2" stroke-linecap="round"></path> </g></svg>
                </div>
            </div>
        </header>
    )
}

export default Header;