import React, { useState } from 'react';

const ModalContext = React.createContext({
    showModal: false,
    onShowModal: () => { },
    onCloseModal: () => { },
    modalContent: "",

})

export const ModalContextProvider = (props) => {
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState("");


    const onShowModal = (modal) => {
        setModalContent(modal);
        setShowModal(true);

        console.log("Blöö")
    }

    const onCloseModal = () => {
        setShowModal(false);
    }



    return (
        <ModalContext.Provider
            value={{
                showModal: showModal,
                onShowModal: onShowModal,
                onCloseModal: onCloseModal,
                modalContent: modalContent,

            }}
        >
            {props.children}
        </ModalContext.Provider>
    );
};

export default ModalContext;

