import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import pic1 from "../assets/john_wick_1.jpg";
import pic2 from "../assets/Joker_edit.jpg";
import pic3 from "../assets/avatar_poster_edit.jpg";

const items = [
  {
    src: pic1,
    altText: "JOHN WICK",
    caption: "What to re-Watch on April",
  },
  {
    src: pic2,
    altText: "JOKER",
    caption: "Now Streaming on Netflix",
  },
  {
    src: pic3,
    altText: "AVATAR",
    caption: "Our Streaming Picks for the Month",
  },
];

function CarouselHome() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <img src={item.src} alt={item.altText} className="carousel-posters" />
        <CarouselCaption
          className="pb-4"
          captionHeader={item.altText}
          captionText={item.caption}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous}>
      <CarouselIndicators
        className="pb-3"
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
}

export default CarouselHome;
