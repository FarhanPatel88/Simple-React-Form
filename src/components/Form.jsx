import React, { useRef } from 'react';
import classes from './Form.module.css';

const Form = (props) => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const websiteRef = useRef(null);
    const addressRef = useRef(null);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formObject = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            website: websiteRef.current.value,
            address: addressRef.current.value,
        };
        props.onSubmit(formObject);
        nameRef.current.value = '';
        emailRef.current.value = '';
        websiteRef.current.value = '';
        addressRef.current.value = '';
    };
    return (
        <div className={`flex-grow-1 d-flex justify-content-center align-items-center ${classes.div} w-50 flex-shrink-1`}>
            <form
                className={`p-3 my-3 ${classes.form} w-100 d-flex justify-content-center align-items-center flex-column`}
                onSubmit={onSubmitHandler}
            >
                <label htmlFor="name" className="h2 fw-light w-100 mb-3 text-danger">
                    Name:
                </label>
                <input type="text" name="name" id="name" placeholder="Name" required autoComplete="false" ref={nameRef} />
                <label htmlFor="email" className="h2 fw-light w-100 mb-3 text-danger">
                    Email:
                </label>
                <input type="email" name="email" id="email" placeholder="Email" required autoComplete="false" ref={emailRef} />
                <label htmlFor="website" className="h2 fw-light w-100 mb-3 text-danger">
                    Website:
                </label>
                <input type="url" name="website" id="website" placeholder="Website" required autoComplete="false" ref={websiteRef} />
                <label htmlFor="address" className="h2 fw-light w-100 mb-3 text-danger">
                    Address:
                </label>
                <textarea name="address" id="address" placeholder="Address" rows="3" cols="10" required autoComplete="false" ref={addressRef} />
                <button className="btn btn-warning rounded-3">Submit</button>
            </form>
        </div>
    );
};

export default Form;
