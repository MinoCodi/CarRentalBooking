import React from "react";
import PropTypes from "prop-types";
import { reduxForm } from "redux-form";
import FormComponent from "./OrderForm.component";

export const FormContainer = ({ handleSubmit }) => {
	const submitForm = (formValues) => {
		console.warn("submitting Form: ", formValues);
	};
	return (
		<FormComponent
			onSubmit={submitForm}
			handleSubmit={handleSubmit}
		/>
	);
};
FormContainer.propTypes = {
	handleSubmit: PropTypes.func.isRequired
};
const formConfiguration = {
	form: "my-very-own-form"
};
export default reduxForm(formConfiguration)(FormContainer);
