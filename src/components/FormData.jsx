import React from 'react';
import clases from './FormData.module.css';
import FormDataItems from './FormDataItems';

const Form_Data = (props) => {
    return (
        <section className="w-50 flex-grow-1 d-flex flex-column align-items-center flex-shrink-1">
            {props.formData.map((form, index) => (
                <FormDataItems key={index} formData={form}></FormDataItems>
            ))}
            {/* <FormDataItems></FormDataItems>
            <FormDataItems></FormDataItems>
            <FormDataItems></FormDataItems> */}
        </section>
    );
};

export default Form_Data;
