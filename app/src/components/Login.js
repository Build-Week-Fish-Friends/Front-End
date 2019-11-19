import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { Button, Card, CardBody, Collapse } from 'reactstrap';

const Login = (props) => {
	const [ user, setUser ] = useState([]);
	const [ toggleOpen, setToggleOpen ] = useState(false);
	const toggle = () => setToggleOpen(!toggleOpen);

	useEffect(
		() => {
			status && setUser((user) => [ ...user, status ]);
		},
		[ status ],
	);

	return (
		<section className='login'>
			<Button color='info' onClick={toggle}>
				Login
			</Button>
			<Collapse toggleOpen={toggleOpen}>
				<Card>
					<CardBody>
						<Form className='login-form'>
							<label>Username</label>
							<Field type='text' name='username' placeholder='Username' />
							<label>Password</label>
							<Field type='password' name='password' placeholder='Password' />
							<Button color='info' type='submit'>
								Get to Fishin'!
							</Button>
						</Form>
					</CardBody>
				</Card>
			</Collapse>
		</section>
	);
};

export default Login;
