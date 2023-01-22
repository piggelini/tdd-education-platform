import { React, useRef, useContext } from 'react'
import DataContext from '../../Context/data-context'
import ModalContext from '../../Context/modal-context'




export default function AddTeacher() {
    const dataContext = useContext(DataContext)
    const modalContext = useContext(ModalContext)

    const fnameInputRef = useRef()
    const lnameInputRef = useRef()
    const personidInputRef = useRef()
    const emailInputRef = useRef()
    const phoneInputRef = useRef()
    const artInputRef = useRef()
    const chemInputRef = useRef()
    const danceInputRef = useRef()
    const philInputRef = useRef()
    const geoInputRef = useRef()

    const clearForm = () => {
        fnameInputRef.current.value = '';
        lnameInputRef.current.value = '';
        personidInputRef.current.value = '';
        phoneInputRef.current.value = '';
        emailInputRef.current.value = '';
        artInputRef.current.value = '';
        chemInputRef.current.value = '';
        danceInputRef.current.value = '';
        philInputRef.current.value = '';
        geoInputRef.current.value = '';
    };

    const onSubmitHandler = (e) => {
        const firstname = fnameInputRef.current.value
        const lastname = lnameInputRef.current.value
        const personalid = personidInputRef.current.value
        const phone = phoneInputRef.current.value
        const email = phoneInputRef.current.value

        const art = artInputRef.current.checked
        const chem = chemInputRef.current.checked
        const dance = danceInputRef.current.checked
        const phil = philInputRef.current.checked
        const geo = geoInputRef.current.checked

        const competences = [];

        if (art) {
            competences.push("Art");
        } if (chem) {
            competences.push("Chemistry");
        } if (dance) {
            competences.push("Dance");
        } if (phil) {
            competences.push("Philosophy");
        } if (geo) {
            competences.push("Geography");
        }



        e.preventDefault();
        const teacher = {
            firstname,
            lastname,
            personalid,
            phone,
            email,
            competences,
        };

        console.log(teacher);
        clearForm();
        dataContext.addData('teacherlist', teacher)
        modalContext.onCloseModal();

    };









    return (
        <>
            <h1 className="page-header">Add a teacher</h1>
            <form className='input-group' action="">
                <label htmlFor='fname'>First name</label>
                <input
                    type='text'
                    name='fname'
                    id='fname'
                    ref={fnameInputRef}
                />
                <label htmlFor='lname'> Last name</label>
                <input
                    type='text'
                    name='lname'
                    id='lname'
                    ref={lnameInputRef}
                />

                <label htmlFor='personid'>Personal identification</label>
                <input
                    type='text'
                    name='personid'
                    id='personid'
                    ref={personidInputRef}>
                </input>

                <label htmlFor='email'>Email</label>
                <input
                    type='email'
                    name='email'
                    id='email'
                    ref={emailInputRef}
                />
                <label htmlFor='phone'>Phone</label>
                <input
                    type='text'
                    name='phone'
                    id='phone'
                    ref={phoneInputRef}
                />
                <label htmlFor='art'>Art</label>
                <input
                    type='checkbox'
                    name='art'
                    id='art'
                    ref={artInputRef}
                />
                <label htmlFor='chem'>Chemistry</label>
                <input
                    type='checkbox'
                    name='chem'
                    id='chem'
                    ref={chemInputRef}
                />
                <label htmlFor='dance'>Dance</label>
                <input
                    type='checkbox'
                    name='dance'
                    id='dance'
                    ref={danceInputRef}
                />
                <label htmlFor='phil'>Philosophy</label>
                <input
                    type='checkbox'
                    name='phil'
                    id='phil'
                    ref={philInputRef}
                />
                <label htmlFor='geo'>Geography</label>
                <input
                    type='checkbox'
                    name='geo'
                    id='geo'
                    ref={geoInputRef}
                />
                <button onClick={onSubmitHandler}>Add this teacher</button>
            </form>
        </>
    )
}
