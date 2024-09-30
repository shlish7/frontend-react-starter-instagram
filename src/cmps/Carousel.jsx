
import React, { useState } from 'react';
import '../assets/styles/cmps/carousel.css'
import Arrow from '../assets/svg/carousel-arrow.svg?react'
import chocolateCake from '../assets/images/chocolate_cake.jpg'
import Potatos from '../assets/images/potatos.jpg'
import Petitim from '../assets/images/petitim.jpg'

export function Carousel({ feedItem, onDoubleClick, isImgDoubleClicked, fullScreen }) {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [doubleClick, setDoubleClick] = useState(isImgDoubleClicked || false)
    // const [isFullScreen, setIsFullScreen] = useState( fullScreen || false)

    const carouselImages = [
        {
            name: 'Chocolate Cake',
            src: chocolateCake
        },
        {
            name: 'Potatos',
            src: Potatos
        },
        {
            name: 'Petitim',
            src: Petitim
        }
    ]

    function onChangeImg(event) {
        event.stopPropagation()
        const { value } = event.currentTarget
        const arrowDirection = value

        if (arrowDirection === 'left') {
            const newIndex = currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
            setCurrentIndex(newIndex);
        } else if (arrowDirection === 'right') {
            const newIndex = currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1;
            setCurrentIndex(newIndex);
        }
    }

    function onImgDoubledClicked() {
        setDoubleClick(prev => {
            const newDoubleClickState = !prev
            // Pass the updated state to the parent component
            onDoubleClick(newDoubleClickState)
            // Return the updated state
            return newDoubleClickState
        });
    }
    console.log('feed Item Carousel: ', feedItem.imageUrl.length);
    return (
        <>
            {/* <div className="carousel-container"> */}
            <div className={fullScreen ? 'carousel-full-item-screen-container' : "carousel-container"}>
                <div className="carousel-left-arrow">
                    <button className='carousel-left-btn' value='left' onClick={onChangeImg}>
                        <Arrow className='left-arrow-icon' />
                    </button>
                </div>
                <div className="carousel-main-frame">
                    <div className="img-container">
                      
                        <img className='carousel-img'
                       getImagesForFeed
                        src={feedItem.imageUrl[currentIndex]}
                        // alt={carouselImages[currentIndex].name} 
                        onDoubleClick={onImgDoubledClicked}
                        />
                        {/* <div className="dot"></div> */}

                        {feedItem.imageUrl.length > 1 &&
                            <div className="dot-container">
                                {feedItem.imageUrl.map((_, idx) => (
                                    <span
                                        key={idx}
                                        className="dot"
                                        style={{ backgroundColor: currentIndex === idx ? 'white' : 'white' }}
                                    ></span>
                                ))}
                            </div>}
                    </div>
                </div>
                <div className="carousel-right-arrow">
                    <button className='carousel-right-btn' value='right' onClick={onChangeImg}>
                        <Arrow className='right-arrow-icon' />
                    </button>
                </div>
            </div>
        </>
    )
}



// import React, { useState } from 'react';
// import '../assets/styles/cmps/carousel.css'
// import Arrow from '../assets/svg/carousel-arrow.svg?react'
// import chocolateCake from '../assets/images/chocolate_cake.jpg'
// import Potatos from '../assets/images/potatos.jpg'
// import Petitim from '../assets/images/petitim.jpg'

// export function Carousel({ feedItem, onDoubleClick, isImgDoubleClicked, fullScreen }) {

//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [doubleClick, setDoubleClick] = useState(isImgDoubleClicked || false)
//     // const [isFullScreen, setIsFullScreen] = useState( fullScreen || false)

//     const carouselImages = [
//         {
//             name: 'Chocolate Cake',
//             src: chocolateCake
//         },
//         {
//             name: 'Potatos',
//             src: Potatos
//         },
//         {
//             name: 'Petitim',
//             src: Petitim
//         }
//     ]

//     function onChangeImg(event) {
//         event.stopPropagation()
//         const { value } = event.currentTarget
//         const arrowDirection = value

//         if (arrowDirection === 'left') {
//             const newIndex = currentIndex === 0 ? carouselImages.length - 1 : currentIndex - 1;
//             setCurrentIndex(newIndex);
//         } else if (arrowDirection === 'right') {
//             const newIndex = currentIndex === carouselImages.length - 1 ? 0 : currentIndex + 1;
//             setCurrentIndex(newIndex);
//         }
//     }

//     function onImgDoubledClicked() {
//         setDoubleClick(prev => {
//             const newDoubleClickState = !prev
//             // Pass the updated state to the parent component
//             onDoubleClick(newDoubleClickState)
//             // Return the updated state
//             return newDoubleClickState
//         });
//     }
//     console.log('feed Item Carousel: ', feedItem.imageUrl);
//     return (
//         <>
//             {/* <div className="carousel-container"> */}
//             <div className={fullScreen ? 'carousel-full-item-screen-container' : "carousel-container"}>
//                 <div className="carousel-left-arrow">
//                     <button className='carousel-left-btn' value='left' onClick={onChangeImg}>
//                         <Arrow className='left-arrow-icon' />
//                     </button>
//                 </div>
                
                    
//                         {
                            
//                             feedItem.imageUrl.map((image, idx) => (
//                                 <div className="carousel-main-frame">
//                             <div className="img-container">
//                                 <img
//                                     key={idx}
//                                     className='carousel-img'
//                                     src={image}
//                                     onDoubleClick={onImgDoubledClicked}
//                                 />
//                                  </div>
//                                  </div>
//                                 ))
                               
//                             }
//                             {/* {
//                             feedItem.imageUrl.length > 1 &&
//                                     <div className="dot-container">
//                                         { feedItem.imageUrl.map((_, idx) => (
//                                             <span
//                                                 key={idx}
//                                                 className="dot"
//                                                 style={{ backgroundColor: currentIndex === idx ? 'white' : 'white' }}
//                                             ></span>
//                                         ))}
//                                     </div>
                            
//                         } */}


                       
                    
              
//                 <div className="carousel-right-arrow">
//                     <button className='carousel-right-btn' value='right' onClick={onChangeImg}>
//                         <Arrow className='right-arrow-icon' />
//                     </button>
//                 </div>
//             </div>
//         </>
//     )
// }

