import React from 'react';
import classes from './FormDataItems.module.css';

const FormDataItems = (props) => {
    return (
        <div className={`d-flex align-items-start flex-column justify-content-center p-5 m-2 mb-4 ${classes.card}`}>
            <h2 className="fw-normal lead">{props.formData.name}</h2>
            <h2 className="fw-normal lead">{props.formData.email}</h2>
            <h2 className="fw-normal lead">{props.formData.website}</h2>
            <h2 className="fw-normal lead">{props.formData.address}</h2>
        </div>
    );
};

export default FormDataItems;
