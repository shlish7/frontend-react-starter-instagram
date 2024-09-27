import React, { useState } from 'react'
import DragPhoto from '../assets/svg/drag-photos-icon.svg?react'
import CloseModal from '../assets/svg/close-modal-icon.svg?react'
import { ImageUploader } from './Imageuploader'


export function CreatePost({ onCloseModal }) {
    const [imageUrl, setImageUrl] = useState()

    function onClickX(ev) {
        ev.stopPropagation()
        ev.preventDefault()
        onCloseModal()
    }

    function onUploaded(imgUrl) {
        console.log("imgUrl: ", imgUrl)
        setImageUrl(imgUrl)
    }

    return (
        <>
            <section className="create-modal-container">

                <CloseModal className='close-modal-icon' onClick={onClickX} />

                <section className="create-post-container">

                    <span className='create-post-title'>Create new post</span>
    
                            {
                                !imageUrl ? (
                                    <section className="modal-internal-container">
                                        <DragPhoto />
                                        <span className='drag-photos-span'>Drag photos and videos here</span>
                                        <ImageUploader onUploaded={onUploaded} />
                                    </section>
                                ) : (
                                    <img src={imageUrl} alt=""  className='create-post-img'/>
                                )
                            }

                </section>

            </section>

        </>

    )
}

