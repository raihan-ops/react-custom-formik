import React from 'react';
import { useField } from "formik";

const CustomInput = () => {
    const [field, meta] = useField(props);
    return (
        <>
            <label>{label}</label>
            <input
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""}
            />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
};

export default CustomInput;