import React from 'react'
import ModalIcon from '../assets/svg/modal-icon.svg?react'
import CloseModal from '../assets/svg/close-modal-icon.svg?react'
import { ImageUploader } from './Imageuploader'


export function CreatePost() {
    return (
        <>
            <section className="create-modal-container">
                <CloseModal className='close-modal-icon' />

                <section className="create-post-container">

                    <span className='create-post-title'>Create new post</span>
                    <section className="modal-internal-container">
                        <ModalIcon />
                        <span className='drag-photos-span'>Drag photos and videos here</span>
                        <button className='select-from-computer'>Select from computer</button>
                    </section>
                </section>
                <ImageUploader/>

                </section>

        </>

    )
}

