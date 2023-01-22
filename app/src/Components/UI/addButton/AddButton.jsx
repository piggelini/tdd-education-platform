import React from 'react'
import ModalContext from '../../Context/modal-context'
import { useContext } from 'react';

export default function AddButton(props) {
    const context = useContext(ModalContext)
    return (
        <button className='btn btn-default text-center' onClick={() => context.onShowModal(props.modal)}>{props.children}</button>
    )
}
