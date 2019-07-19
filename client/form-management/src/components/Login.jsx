import React from 'react';
import { withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';
import './styles.css';

function Login({ touched, errors }) {
	return (
		<Form className="form">
			<div className="form-group">
				<label className="label">Username</label>
				<Field
					className="input"
					name="username"
					type="text"
					autoComplete="off"
				/>
				<p className="error">{touched.username && errors.username}</p>
			</div>
			<div className="form-group">
				<label className="label">Password</label>
				<Field
					className="input"
					name="password"
					type="password"
					autoComplete="off"
				/>
				<p className="error">{touched.password && errors.password}</p>
			</div>

			<button type="submit" className="btn">Submit &rarr;</button>
		</Form>
	)
}

export default withFormik({
	mapPropsToValues() {
		return {
			username: "",
			password: ""
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required(),
		password: Yup.string().required()
	}),

	handleSubmit: (values, { resetForm }) => {
		console.log(values);
		resetForm();
	},
})(Login);