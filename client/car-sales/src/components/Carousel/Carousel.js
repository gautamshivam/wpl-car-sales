import React, {useState} from 'react'
import './Carousel.css'
<<<<<<< HEAD
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Carousel = (props) => {
=======
import {images} from './CarouselData'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Carousel = () => {
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1

    const [currImg,setCurrImg] = useState(0);

    return (
        <div className="carousel">
<<<<<<< HEAD
            <div className="carouselInner" style={{backgroundImage: `url(${"./images/"+ props.images[currImg]})`}} >
=======
            <div className="carouselInner" style={{backgroundImage: `url(${"./images/"+ images[currImg]})`}} >
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
                
                <div className="left" onClick={()=> { if(currImg>0) setCurrImg((currImg-1))}}>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </div>
                <div className="mid"></div>
<<<<<<< HEAD
                <div className="right" onClick={()=> {if(currImg<props.images.length-1)setCurrImg(currImg+1)}}>
=======
                <div className="right" onClick={()=> {if(currImg<images.length-1)setCurrImg(currImg+1)}}>
>>>>>>> 7ff7c655e4fd9f897ec9ea7c904ec00b7e5e9ef1
                    <ArrowForwardIosIcon></ArrowForwardIosIcon></div>
            </div>
        </div>
    )
}

export default Carousel
