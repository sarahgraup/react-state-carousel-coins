import { useState } from "react";
import "./Carousel.css";
import Card from "./Card";


/** Carousel: displays images and arrows to navigate through them
 * 
 * Props:
 * - photos: array of {src, caption} objects
 * - title: string describing the collection of images
 * 
 * State:
 * - currCardIdx: integer for current card index
 * 
 * App --> Carousel --> Card
 */
 function Carousel({ photos, title }) {
  const [currCardIdx, setCurrCardIdx] = useState(0);

  const currCard = photos[currCardIdx];
  const total = photos.length;
  let leftArrowHidden = "";
  let rightArrowHidden = "";
  if(currCardIdx === 0){
    leftArrowHidden = "hidden";
  }
  if(currCardIdx === total-1){
    rightArrowHidden = "hidden";
  }
  

  //Increments currCardIdx state by 1 
  //if current index is not length of amount of images
  function goForward() {
    // if(currCardIdx===total-1){
    //   setCurrCardIdx(0);
    // }else{
      setCurrCardIdx(currCardIdx + 1);
    // }
  }

   //decrements currCardIdx state by 1 
  //if current index is not 0
  function goBack() {
    // if(currCardIdx===0){
    //   setCurrCardIdx(total-1);
    // }else{
      setCurrCardIdx(currCardIdx - 1);
    // }
   
  }

  return (
    <div className="Carousel">
      <h1>{title}</h1>
      <div className="Carousel-main">
        <i
          className={`bi bi-arrow-left-circle ${leftArrowHidden}`}
          onClick={goBack}
        />
        <Card
          caption={currCard.caption}
          src={currCard.src}
          currNum={currCardIdx + 1}
          totalNum={total}
        />
        <i
          className={`bi bi-arrow-right-circle ${rightArrowHidden}`}
          onClick={goForward}
        />
      </div>
    </div>
  );
}

export default Carousel;
