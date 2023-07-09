import "./Header.scss";
import { Link } from "react-router-dom";

import logo from "../../resources/logo.png";
import AddProduct from "../../pages/AddProduct";



function Header({ title, buttons, onFormSubmit}) {

    
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

            </div>
        </header>
    )
}

export default Header;