import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';



const SignUp = ({values, errors, touched, status}) => {
    const [newUsers, setNewUsers] = useState([]);

    useEffect( () => {
        status && setNewUsers(newUsers => [...newUsers, status])
    }, [status])

    return (
        <div className = "signUp">
            <h2>Sign Up</h2>
            <Form className="sign-up">
                <label>Full Name: </label>
                <Field type="text" name="name" placeholder="name"/>
                <label>Email: </label>
                <Field type="email" name="email" placeholder="email"/>
                <label>Password: </label>
                <Field type="password" name="password" placeholder="password"/>
                <button type="submit">Submit</button>
            </Form>

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
