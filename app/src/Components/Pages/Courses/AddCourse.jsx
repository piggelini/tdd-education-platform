import { React, useRef, useContext } from 'react'
import DataContext from '../../Context/data-context'
import ModalContext from '../../Context/modal-context'

export default function AddCourse() {
    const dataContext = useContext(DataContext)
    const modalContext = useContext(ModalContext)

    const nameInputRef = useRef()
    const weeksInputRef = useRef()
    const desInputRef = useRef()
    const startInputRef = useRef()

    const clearForm = () => {
        nameInputRef.current.value = '';
        weeksInputRef.current.value = '';
        desInputRef.current.value = '';
        startInputRef.current.value = '';
    };

    const onSubmitHandler = (e) => {
        const title = nameInputRef.current.value;
        const weeks = weeksInputRef.current.value;
        const description = desInputRef.current.value;
        const start = startInputRef.current.value;

        e.preventDefault();
        const course = {
            title,
            weeks,
            description,
            start,
        };

        console.log(course);
        clearForm();
        dataContext.addData('courselist', course)
        modalContext.onCloseModal();

    };




    return (
        <form action="">
            <label htmlFor='name'>Course name</label>
            <input
                type='text'
                name='name'
                id='name'
                ref={nameInputRef}
            />
            <label htmlFor='weeks'>Number of weeks</label>
            <input
                type='text'
                name='weeks'
                id='weeks'
                ref={weeksInputRef}
            />

            <label htmlFor='des'></label>
            <textarea
                type='text'
                name='des'
                id='des'
                ref={desInputRef}>A short description...
            </textarea>

            <label htmlFor='start'>Start date</label>
            <input
                type='text'
                name='start'
                id='start'
                ref={startInputRef}
            />
            <button onClick={onSubmitHandler}>Add this course</button>
        </form>
    )
}
