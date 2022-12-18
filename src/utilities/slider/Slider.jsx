import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderHook from 'react-slick'

const NextArrow = ({onClick})=>{
  return(
    <button className="blue-circle position-absolute pos-left text-light" onClick={onClick}>
      <i className="fa fa-long-arrow-alt-left" ></i>
    </button>
  )
}

const PrevArrow = ({onClick})=>{
  return(
    <button className="blue-circle position-absolute pos-right text-light" onClick={onClick}>
      <i className="fa fa-long-arrow-alt-right" ></i>
    </button>
  )
}

export const Slider = ({num=1,dots=false, arrow=false,logo=false,children}) => {
  const res = logo === false ? [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1
      }
    }
  ] : null

  const setting = {
    dots:dots,
    Infinit:true,
    speed:500,
    slidesToShow:num,
    slidesToScroll:num,
    nextArrow: arrow && <NextArrow/>,
    prevArrow: arrow &&<PrevArrow/>,
    responsive:res
  }

  return (
    <div className="slider">
    <SliderHook {...setting}>
      {children}
    </SliderHook>
    </div>
  )
}
