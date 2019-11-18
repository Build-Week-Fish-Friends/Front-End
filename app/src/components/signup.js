import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import { Collapse, Button, CardBody, Card } from 'reactstrap';
import * as Yup from 'yup';
import axios from 'axios';



const SignUp = ({props, values, errors, touched, status}) => {
    const [newUsers, setNewUsers] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    useEffect( () => {
        status && setNewUsers(newUsers => [...newUsers, status])
    }, [status])

    return (
        <div className = "signUp">
            <Button color="primary" onClick={toggle} style={{ marginBottom: '1rem'}}>Sign Up</Button>
            <Collapse isOpen={isOpen}>
            <Card>
                <CardBody>
                <Form className="sign-up">
                    <label>Full Name: 
                    <Field type="text" name="name" placeholder="name"/>
                    </label>
                    {touched.name && errors.name && <p className="errors">{errors.name}</p>}
                    <label>Email: 
                    <Field type="email" name="email" placeholder="email"/>
                    </label>
                    {touched.email && errors.email && <p classsName="errors">{errors.email}</p>}
                    <label>Password: 
                    <Field type="password" name="password" placeholder="password"/>
                    </label>
                    {touched.password && errors.password && <p className="errors">{errors.password}</p>}
                    <button type="submit">Submit</button>
                </Form>
                </CardBody>
            </Card>    
            </Collapse>
            {newUsers.map(newUser => (
                <div key={newUser.id}>
                    <p>Full Name: {newUser.name}</p>
                    <p>Email: {newUser.email}</p>
                    <p>Password: {newUser.password}</p>
                </div>    
            ))}
        </div>
    )
};

const FormikSignUp = withFormik({
    mapsPropsToValue({name, email, password}) {
        return {
            name: name || "",
            email: email || "",
            password: password || ""
        }
    },

    validationSchema: Yup.object().shape({
        name: Yup.string().required(),
        email: Yup.string().email('Please enter a valid email').required('Please enter an email'),
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
})(SignUp);
export default FormikSignUp;
