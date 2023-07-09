export default function formInputs() {
    return [
        {
            id: "SKU",
            name: "SKU",
            required: "Required",
            pattern: { value: /^[A-Z0-9]+$/, message: "Not valid SKU" },
            minLength: { value: 7, message: "SKU should be at least 7 characters" },
            placeHolder: "Pleace, provide SKU like: XYZ12345",
            inputType: "text",
            errorInputClassName: "errorInput",
            errorMessageClassName: "errorInput"
        },
        {
            id: "name",
            name: "Name",
            required: "Required",
            minLength: { value: 4, message: "Name should be at least 4 characters" },
            placeHolder: "Please, provide product name",
            inputType: "text",
            errorInputClassName: "errorInput",
            errorMessageClassName: "errorInput"
        },
        {
            id: "price",
            name: "Price",
            required: "Required",
            pattern: { value: /^\d+(\.\d+)?$/, message: "Price could be only number" },
            placeHolder: "Please, provide product price",
            inputType: "text",
            errorInputClassName: "errorInput",
            errorMessageClassName: "errorInput"
        }
    ]
}