import React, {useState} from 'react'
import './Carousel.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const Carousel = (props) => {

    const [currImg,setCurrImg] = useState(0);

    return (
        <div className="carousel">
            <div className="carouselInner" style={{backgroundImage: `url(${"./images/"+ props.images[currImg]})`}} >
                
                <div className="left" onClick={()=> { if(currImg>0) setCurrImg((currImg-1))}}>
                    <ArrowBackIosIcon></ArrowBackIosIcon>
                </div>
                <div className="mid"></div>
                <div className="right" onClick={()=> {if(currImg<props.images.length-1)setCurrImg(currImg+1)}}>
                    <ArrowForwardIosIcon></ArrowForwardIosIcon></div>
            </div>
        </div>
    )
}

export default Carousel
