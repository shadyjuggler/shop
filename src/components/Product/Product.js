// Import native react hooks
import { useState} from "react";

// Import Styles
import "./Product.scss";

//Import top card background image
import bg from "../../resources/green-abstract.jpg"

function Product ({sku, name, price, type, type_param}) {
    const [checked, setChecked] = useState(false);

    // Make clicking on product itself check the checkbox
    const onProductClick = () => {
        setChecked(!checked);
    }

    const onCheckboxChange = () => {
    
    }

    // Create corresponding measure for type
    const typeMeasure = (type) => {
        const measures = {
            "size": "MB",
            "weight": "KG",
            "dimensions": "" 
        };

        return measures[type];
    }

    return (
        <div onClick={onProductClick} className="Product">
            <div className="Product-bg">
                <input onChange={onCheckboxChange} className="delete-checkbox" type="checkbox" checked={checked} />
            </div>
            <div className="Product-main">
                <h2 className="Product-main-name">{name}</h2>
                <p className="Product-main-sku">{sku}</p>
            </div>
            <div id="divider"></div>
            <div className="Product-descr">
                <p className="Product-descr-size">
                    {type[0].toUpperCase() + type.slice(1)}: {type_param} {typeMeasure(type)}
                </p>
                <p className="Product-descr-price">{price}$</p>
            </div>
        </div>
    )
}

export default Product;