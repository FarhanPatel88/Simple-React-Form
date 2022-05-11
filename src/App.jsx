import { useState } from 'react';
import classes from './App.module.css';
import Form from './components/Form';
import FormData from './components/FormData';

function App() {
    const [formData, setformData] = useState([]);
    const onSubmitHandler = (formObject) => {
        setformData((previousState) => {
            return [...previousState, formObject];
        });
    };
    return (
        <>
            <header className={`d-flex justify-content-center align-items-center w-100 p-2 ${classes.header} bg-warning`}>
                <h2 className="display-5 fw-normal">Let's Grow More</h2>
            </header>
            <article className={`d-flex justify-content-center align-items-center w-100 p-2 ${classes.article}`}>
                <h4 className="h4 fw-normal">Student Enrollment Form</h4>
            </article>
            <section className={`d-flex justify-content-center align-items-start w-100 ${classes.section} p-5`}>
                <Form onSubmit={onSubmitHandler}></Form>
                <FormData formData={formData}></FormData>
            </section>
        </>
    );
}

export default App;
