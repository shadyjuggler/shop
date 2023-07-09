import Header from '../components/Header/Header';
import { Link } from "react-router-dom";
import Form from '../components/Form/Form';

import {useRef} from "react"

// import DBConnect from "../services/DBConnect";

function AddProduct() {
    // const db = new DBConnect();

    // const form = useRef();

    // const onFormSubmit = (e) => {
    //     // form.current.submit();
    //     console.log(e)
    // }

    // const handleSumbit = (e) => {
    //     console.log("smtj");
    //     e.preventDefault();
    // }


    return (
        <div className="app">
            <Header
                title={"Product Add"}
                buttons=
                {
                    <div className="header-btns">
                        
                        <Link to="/">CANSEL</Link>
                    </div>
                }
            />
            <Form />
        </div>
    );
}

export default AddProduct;