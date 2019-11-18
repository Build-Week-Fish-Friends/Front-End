import React, {useState, useEffect} from 'react';
import { withFormik, Form, Field } from "formik";
import axios from 'axios';


const LoginForm = ({values, errors, touched, status}) => {
    const [users,setUsers] = useState([]);

    useEffect( () => {
        status && setUsers(users => [...users, status]);
    }, [status])
    return (
        <div className = "login">
            <h2>Login</h2>
            <Form className="login-form">
                <label>Username: 
                <Field type="text" name="username" placeholder="username"/>
                </label>
                <label>Password: 
                <Field type="password" name="password" placeholder="password"/>
                </label>
                <button type="submit">Submit</button>
            </Form>

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