import React from "react";
import PropTyps from "prop-types";
import { Field } from "redux-form";
import Text from "./text";

export const FormComponent = ({ handleSubmit, onSubmit }) => {
	return (
		<div className="flex flex-column justify-center items-center">
			<h1>My Very own Form</h1>
			<form
				className="w-80"
				onSubmit={handleSubmit(onSubmit)}
			>
				<Field
					name="firstName"
					label="First Named"
					component={Text}
				/>
				<button
					type="submit"
					className="link br2 bg-blue white dim pa3 f6 sans-serif b--blue ba"
				>
          Submit
				</button>
			</form>
		</div>
	);
};

FormComponent.propTypes = {
	handleSubmit: PropTyps.func.isRequired,
	onSubmit:PropTyps.func.isRequired
};

export default FormComponent;
