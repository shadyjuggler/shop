import "./Product.scss";

import bg from "../../resources/green-abstract.jpg"

function Product () {
    return (
        <div className="Product">
            <div className="Product-bg">
                <input className="delete-checkbox" type="checkbox" />
            </div>
            <div className="Product-main">
                <h2 className="Product-main-name">Chair</h2>
                <p className="Product-main-sku">S3FGS31A1</p>
            </div>
            <div id="divider"></div>
            <div className="Product-descr">
                <p className="Product-descr-size">Dimension: 24x14x15</p>
                <p className="Product-descr-price">40.00$</p>
            </div>
        </div>
    )
}

export default Product;