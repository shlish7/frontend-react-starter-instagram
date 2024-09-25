import React from 'react'
import ModalIcon from '../assets/svg/modal-icon.svg?react'
import CloseModal from '../assets/svg/close-modal-icon.svg?react'
import { ImageUploader } from './Imageuploader'


export function CreatePost({onCloseModal}) {

    function onClickX(ev){
        ev.stopPropagation()
        ev.preventDefault()
        onCloseModal()
    }

    return (
        <>
            <section className="create-modal-container">
                <CloseModal className='close-modal-icon' onClick= {onClickX} />

                <section className="create-post-container">

                    <span className='create-post-title'>Create new post</span>
                    <section className="modal-internal-container">
                        <ModalIcon />
                        <span className='drag-photos-span'>Drag photos and videos here</span>
                        {/* <button className='select-from-computer'>Select from computer</button> */}
                        <ImageUploader/>

                    </section>

                </section>

                </section>

        </>

    )
}

