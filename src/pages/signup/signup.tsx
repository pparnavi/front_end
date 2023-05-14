import React, { useState } from 'react';
import styles from './signup.module.css'
import '../types'

const SignupForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [formErrors, setFormErrors] = useState({
        name: '',
        username: '',
        mobile: '',
        email: '',
        password: '',
        confirmPassword: '',
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

    const validateMobile = (mobile: any) => {
        // basic phone number validation regex
        const mobileRegex = /^\d{10}$/;
        return mobileRegex.test(mobile);
    };

    const validateForm = () => {
        let errors: SignupForm = {
            name: '',
            username: '',
            mobile: '',
            email: '',
            password: '',
            confirmPassword: '',
            errors: ''
        };
        let isValid = true;

        if (!formData.name) {
            errors.name = 'Name is required';
            isValid = false;
        }

        if (!formData.username) {
            errors.username = 'Username is required';
            isValid = false;
        }

        if (!formData.mobile) {
            errors.mobile = 'Mobile number is required';
            isValid = false;
        } else if (!validateMobile(formData.mobile)) {
            errors.mobile = 'Mobile number is invalid';
            isValid = false;
        }

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
        } else if (formData.password.length < 8) {
            errors.password = "Password must be at least 8 characters long";
            isValid = false;
        }

        if (!formData.confirmPassword) {
            errors.confirmPassword = 'Confirm password is required';
            isValid = false;
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
            isValid = false;
        }

        setFormErrors(errors);
        return isValid;
    };

    return (
        <div>
            <div className={styles.formContainer}>
                <h2><span className={styles.stretch}>Sign up!</span></h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="name">Name</label>
                        <input className={styles.input}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onBlur={validateForm}
                        />
                        {formErrors.name && <span className={styles.error}>{formErrors.name}</span>}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="username">Username</label>
                        <input className={styles.input}
                            type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleInputChange}
                            onBlur={validateForm}
                        />
                        {formErrors.username && (
                            <span className={styles.error}>{formErrors.username}</span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="mobile">Mobile</label>
                        <input className={styles.input}
                            type="text"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            onBlur={validateForm}
                        />
                        {formErrors.mobile && (
                            <span className={styles.error}>{formErrors.mobile}</span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="email">Email</label>
                        <input className={styles.input}
                            type="email" id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onBlur={validateForm}
                        />
                        {formErrors.email && (
                            <span className={styles.error}>{formErrors.email}</span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="password">Password</label>
                        <input className={styles.input}
                            type="password" id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            onBlur={validateForm}
                        />
                        {formData.password && (
                            <span className={styles.error}>{formData.password}</span>
                        )}
                    </div>
                    <div className={styles.formGroup}>
                        <label className={styles.label} htmlFor="confirm-password">Confirm Password</label>
                        <input className={styles.input}
                            type="password" id="confirm-password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            onBlur={validateForm}
                        />
                        {formData.confirmPassword && (
                            <span className={styles.error}>{formData.confirmPassword}</span>
                        )}
                    </div>


                    <button className={styles.btnPrimary} type="submit">Sign up!</button>
                </form>
            </div>
        </div>
    );
}

export default SignupForm;
