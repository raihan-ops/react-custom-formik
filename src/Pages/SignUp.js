import React from 'react';
import { useFormik } from "formik";


const data = {
    Fname: "MR",
    Lname: "Raihan",
    age: 26
}

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // actions.resetForm();
};
const SignUp = () => {
    const {
        values,
        errors,
        touched,
        isSubmitting,
        handleBlur,
        handleChange,
        handleSubmit,
    } = useFormik({
        initialValues: {
            firstname: data.Fname,
            lastname: data.Lname,
            email: "",
            age: data.age,
            password: "",
            confirmPassword: "",
        },
        // validationSchema: basicSchema,
        onSubmit,
    });




    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label htmlFor="firstname">First Name</label>
            <input
                value={values.firstname}
                onChange={handleChange}
                id="firstname"
                type="firstname"
                placeholder="Enter First Name"
                onBlur={handleBlur}
                className={errors.firstname && touched.firstname ? "input-error" : ""}
            />
            {errors.firstname && touched.firstname && <p className="error">{errors.firstname}</p>}
            <br />
            <label htmlFor="lastname">Last Name</label>
            <input
                value={values.lastname}
                onChange={handleChange}
                id="lastname"
                type="lastname"
                placeholder="Enter Last Name"
                onBlur={handleBlur}
            // className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.lastname && touched.lastname && <p className="error">{errors.lastname}</p>}
            <br />
            <label htmlFor="email">Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p className="error">{errors.email}</p>}
            <br />
            <label htmlFor="age">Age</label>
            <input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.age && touched.age ? "input-error" : ""}
            />
            {errors.age && touched.age && <p className="error">{errors.age}</p>}
            <br />
            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password ? "input-error" : ""}
            />
            {errors.password && touched.password && (
                <p className="error">{errors.password}</p>
            )}
            <br />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                    errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
                }
            />
            {errors.confirmPassword && touched.confirmPassword && (
                <p className="error">{errors.confirmPassword}</p>
            )}
            <br />
            <button disabled={isSubmitting} type="submit">
                Submit
            </button>
        </form>
    );
};

export default SignUp;