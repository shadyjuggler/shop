import { useState } from "react";
//Special hook for forms
import { useForm } from "react-hook-form";

import "./Form.scss";
import DBService from "../../services/DBService";
import formInputs from "../../services/formInputs";
import specialFormOptions from "../../services/specialFormOptions";

function Form() {
	const [option, setOption] = useState("DVD");
	const [submitMessage, setSubmitMessage] = useState("");
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const db = new DBService();
	console.log("render")

	//Import all form inputs data
	const allFromInputs = formInputs();
	//Import all special options data
	const allFormOptions = specialFormOptions();

	const onSumbit = (data) => {
		const finalData = db.__prepareFormData(data);
		setSubmitMessage("Submited successfully");
		console.log(finalData);
	};

	//Provides reseting submit message when form had been changed
	const onFormChange = () => {
		if (submitMessage) {
			setSubmitMessage("")
		}
	}

	const onOptionChange = (e) => {
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

					<div key={"type"} className="form-field">
						<label htmlFor="type">Type Switcher</label>
						<select
							{...register("type")}
							value={option}
							onChange={(e) => onOptionChange(e)}
							id="productType"
						>
							<option value="DVD">DVD</option>
							<option value="Furniture">Furniture</option>
							<option value="Book">Book</option>
						</select>
					</div>

					{
						//Special type inputs
						allFormOptions[option].map(({ id, label, placeholder, type }) => {
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
