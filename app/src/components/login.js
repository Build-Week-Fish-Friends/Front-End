import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import * as Yup from 'yup';
import axios from 'axios';


const LoginForm = ({props, values, errors, touched, status}) => {
    const [users,setUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect( () => {
        status && setUsers(users => [...users, status]);
    }, [status])

    return (
        <div className = "login">
            {/* <h2>Login</h2> */}
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem' }}>Get Started</Button>
            <Collapse isOpen={isOpen}>
            <Card>
                <CardBody>
                <Form className="login-form">
                    <label>Username: 
                    <Field type="text" name="username" placeholder="username"/>
                    </label>
                    {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                    <label>Password: 
                    <Field type="password" name="password" placeholder="password"/>
                    </label>
                    {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                    <button type="submit">Submit</button>
                </Form>
                </CardBody>
            </Card>
            </Collapse>
            {users.map(user => (
                <div key={user.id}>
                    <p>Username: {user.username}</p>
                    <p>Password: {user.passoword}</p>
                </div>
            ))}
        </div>
    )
};

const FormikLoginForm = withFormik({
    mapsPropsToValue({username, password}) {
        return {
            username: username || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        password: Yup.string().min(8).max(16).required()
    }),

    handleSubmit(values, {setStatus}) {
        axios.post("https://reqres.in/api/users/", values)
        .then(response => {
            setStatus(response.data);
            console.log(response);
        })
        .catch(error => console.log(error.responese));
    }
})(LoginForm);
export default FormikLoginForm;