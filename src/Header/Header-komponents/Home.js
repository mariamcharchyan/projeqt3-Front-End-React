import { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}


// import './home.css';
// import logoHome from './logoHome.png';


// export default function Home(){
//     return(
//         <div>
//             <div classname = "item item-1">Item 1</div>
//             <div classname = "item item-2">Item 1</div>
//             <div classname = "item item-3">Item 1</div>
// {/*   <img src={logoHome} className="brand-logo" alt="Logo"/> */}
//         </div>
//     )
// }



// import React from 'react';
// import Slider from 'react-slick';
// function ImageSlider({ images }) {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 5000,
//     };
  
//     return (
//       <Slider {...settings}>
//         {images.map((image, index) => (
//           <div key={index}>
//             <img src={image} alt={`Image ${index}`} />
//           </div>
//         ))}
//       </Slider>
//     );
//   }
  
//   export default ImageSlider;
//   In this example, the ImageSlider component takes an array of image URLs as a prop. The Slider component from the React Slick library is used to wrap the image elements, and its props are set with the desired slider settings, such as the number of slides to show at once, the autoplay interval, and whether to show pagination dots. The images array is mapped to a set of div elements that each contain an img element with the image URL and an alt attribute for accessibility.
  
//   This is just a basic example, and there are many ways to customize the look and behavior of a React slider component depending on your needs and preferences.
  
  
  
  
  