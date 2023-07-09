class DB {
    fetchForm = (e) => {
        console.log(e.target)
    }

    __prepareFormData = ({ type, SKU, name, price, height, lenght, size, width, weight }) => {
        let output = { SKU, name, price, type};
        switch (type) {
            case "DVD": output = { ...output, size };
                break;
            case "Furniture": output = { ...output, height, width, lenght };
                break;
            case "Book": output = { ...output, weight }
        }

        return output;
    }
}

export default DB;