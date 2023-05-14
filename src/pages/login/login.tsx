import React, { useState } from 'react';
import styles from './login.module.css';
import '../types'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [formErrors, setFormErrors] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (event: any) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // form validation logic goes here
        console.log(formData);
    };

    const validateEmail = (email: any) => {
        // basic email validation regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateForm = () => {
        let errors: LoginForm = {
            email: '',
            password: '',
            errors: ''
        };
        let isValid = true;

        if (!formData.email) {
            errors.email = 'Email is required';
            isValid = false;
        } else if (!validateEmail(formData.email)) {
            errors.email = 'Email is invalid';
            isValid = false;
        }

        if (!formData.password) {
            errors.password = 'Password is required';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    return (
        <div id={styles.login} className={styles.loginContainer}>
            <h2><span className={styles.stretch}>Login!</span></h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">Email</label>
                    <input
                        className={styles.input}
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}

                    />
                    {formErrors.email && (
                        <span className={styles.error}>{formErrors.email}</span>
                    )}
                </div>
                <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="password">Password</label>
                    <input
                        className={styles.input}
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                    />
                    {formErrors.password && (
                        <span className={styles.error}>{formErrors.password}</span>
                    )}
                </div>
                <button type="submit" className={styles.btnPrimary}>
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
