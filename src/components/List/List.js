import "./List.scss";

import Product from "../Product/Product";

const checkboxs = document.querySelectorAll(".delete-checkbox");

function List () {

    const onProductClick = (e) => {
        
    }

    return (
        <div className="List">
           <div className="container">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
           </div>
        </div>
    );
}

export default List;