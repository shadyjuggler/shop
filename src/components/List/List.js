// Import list styles
import "./List.scss";

// Import product component
import Product from "../Product/Product";

// Import products
import products from "../../services/testProduct";

function List () {

    // Get all products
    const productList = products();

    return (
        <div className="List">
           <div className="container">
                {
                    productList.map(({sku, name, price, type, type_param, checked}) => {
                        return (
                            <Product
                                sku={sku}
                                name={name}
                                price={price}
                                type={type}
                                type_param={type_param}
                                checked={checked}
                            />
                        );
                    })
                }
           </div>
        </div>
    );
}

export default List;