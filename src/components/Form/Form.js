// Import native react hooks
import { useState, useEffect } from "react";

//Special hook for forms
import { useForm } from "react-hook-form";

// Import form styles
import "./Form.scss";

// Import default form inputs
import formInputs from "../../services/formInputs";

// Import form option for uniqe type like: Furniture, DVD, BOOK
import specialFormOptions from "../../services/specialFormOptions";

function Form() {
	const [option, setOption] = useState("size");
	const [submitMessage, setSubmitMessage] = useState("");
	const {
		register,
		unregister,
		handleSubmit,
		formState: { errors },
	} = useForm();

	console.log("reder")

	//Get all form inputs data
	const allFromInputs = formInputs();

	//Get all special options data
	const allFormOptionInputs = specialFormOptions();

	useEffect(() => {
		console.log("option changed")

		// Get all possible optional inputs id
		const allOptionalInputsId = [].concat(
			...Object.entries(allFormOptionInputs)
			.map(option => option[1]
			.map(input => input.id)
		));

		// Get id of current displayed optional inputs
		const currentOptionInputsId = allFormOptionInputs[option].map(input => input.id);

		// Get id of inputs which are not displayed and must be unregistered
		const hidedOptionInputsId = allOptionalInputsId.filter(item => !currentOptionInputsId.includes(item));

		// Unregister unnecessary inputs
		unregister(hidedOptionInputsId);
		
	}, [option]);

	// Hadle form submit
	const onSumbit = (data) => {
		console.log(data);
		setSubmitMessage("Submited successfully");
	};

	// Handlge form change
	const onFormChange = () => {

		//Provides reseting submit message when form had been changed
		if (submitMessage) {
			setSubmitMessage("")
		}
	}

	// Handle option type changing
	const onOptionChange = (e) => {

		// Update option state to display corresponding inputs
		setOption(e.target.value);
	};

	return (
		<div className="Form">
			<div className="container">
				<form onChange={onFormChange} onSubmit={handleSubmit(onSumbit)} id="product_form">
					<div className="bg"></div>
					{

						// Default inputs. SKU, Name, Price
						allFromInputs.map(({ id, name, required, pattern, minLength, errorInputClassName, placeHolder, inputType }) => {
							return (
								<div key={id} className="form-field">
									<label htmlFor="SKU">{name}</label>
									<input
										{...register(id, {
											required,
											pattern,
											minLength,
										})}
										className={errors[id] ? errorInputClassName : null}
										placeholder={placeHolder}
										id={id}
										type={inputType}
									/>
									<p className={errors[id] ? "errorMessage" : null}>{errors[id]?.message}</p>
								</div>
							)
						})
					}

					{/* Option Picker */}
					<div key={"type"} className="form-field">
						<label htmlFor="type">Type Switcher</label>
						<select
							id="productType"
							{...register("type")}
							onChange={(e) => onOptionChange(e)}
							value={option}
						>
							<option value="size">DVD</option>
							<option value="dimensions">Furniture</option>
							<option value="weight">Book</option>
						</select>
					</div>

					{
						//Special type inputs
						allFormOptionInputs[option].map(({ id, label, placeholder, type }) => {
							return (
								<div key={id} className="form-field">
									<label htmlFor={id}>{label}</label>
									<input
										defaultValue={""}
										placeholder={placeholder}
										{...register(id, {
											required: "Required",
											pattern: {
												value: /^\d+(\.\d+)?$/,
												message: "Could be only number",
											},
										})}
										className={errors[id] ? "errorInput" : null + " options"}
										id={id}
										type={type}
									/>
									<p className={errors[id] ? "errorMessage" : null}>{errors[id]?.message}</p>
								</div>
							);
						})
					}

					<button id="special-button" type="sumbit" onClick={handleSubmit}>
						SAVE
					</button>

					<p className={submitMessage ? "submitMessage" : null}>{submitMessage}</p>
				</form>
			</div>
		</div>
	);
}

export default Form;
