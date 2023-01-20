import { React, useContext, useState, useEffect } from 'react'
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';
import ModalContext from '../../Context/modal-context';
import AddCourse from '../../Pages/Courses/AddCourse';
import AddTeacher from '../../Pages/Teachers/AddTeacher';

const Overlay = () => {
    return <div className={classes.overlay} />;
};

const ModalContent = (children) => {
    const context = useContext(ModalContext);

    console.log(context.modalContent);
    let content;
    if (context.modalContent === 'add-course') {
        content = <AddCourse />
    } else if (context.modalContent === 'add-teacher') {
        content = <AddTeacher />
    }

    return (

        <div className={classes.modal}>

            <header className={classes.header}>
                <h4></h4>
            </header>
            <div className={classes.content}>
                {content}
            </div>
            <footer className={classes.actions}>
                <button onClick={() => context.onCloseModal()}>Cancel</button>
            </footer>

        </div>
    );
};

const Modal = () => {
    return (
        <div>
            {ReactDOM.createPortal(
                <Overlay />,
                document.querySelector('#overlay-root'),
            )}

            {ReactDOM.createPortal(
                <ModalContent />,
                document.querySelector('#modal-root'),
            )}
        </div>
    );
};

export default Modal;