import React from 'react';
import {Button, Form, Input} from 'semantic-ui-react';
import {Formik} from 'formik';
import { axiosWithAuth } from './axiosWithAuth';

const AddFriend = (props) => {
	return ( 
		<Formik 
			initialValues={{
				name: '',
				age: '',
				email: ''
			}}
			onSubmit={(values, actions) => {
				console.log(values);
				actions.setSubmitting(true);
				axiosWithAuth().post('http://localhost:5000/api/friends', values)
				.then(res => {
								console.log(actions);
								props.setFriends(res.data)
						})
				.then(()=> props.history.push('/friends'))
				.then(() => actions.resetForm())
				.catch(err => console.log(err))
			}}
			render={props => 
				(
					<Form style={{display:'flex', flexDirection:'column', alignItems:'center'}} onSubmit={props.handleSubmit}>
					<Form.Field
						control={Input}
						label='name'
						name='name'
						id='name'
						type='text'
						onChange={props.handleChange}
						value={props.values.name}
						width='4'
					/>

					<Form.Field
						control={Input}
						label='age'
						name='age'
						id='age'
						type='text'
						onChange={props.handleChange}
						value={props.values.age}
						width='4'
					/>

					<Form.Field
						control={Input}
						label='email'
						name='email'
						id='email'
						type='text'
						onChange={props.handleChange}
						value={props.values.email}
						width='4'
					/>

					<Button type='submit'>Submit</Button>
				</Form>
				)
			}
		/>
	);
}

export default AddFriend;