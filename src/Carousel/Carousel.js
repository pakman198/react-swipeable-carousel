import React from 'react';

import { useCarousel } from './carouselHook';
import { makeIndices } from './utils';

import './Carousel.css';

export const Carousel = ({children, slidesPresented = 1, edges = [0,0]}, gutters = 0) => {
  const slides = React.Children.toArray(children);
  const length = slides.length;
  const numActive = Math.min(length, slidesPresented);
  const {active, setActive, handlers, style} = useCarousel(length, { slidesPresented: numActive });
  const beforeIndices = makeIndices(slides.length - 1, -1, numActive);
  const afterIndices = makeIndices(0, +1, numActive);

  const beforeSlides = beforeIndices.map(i => (
    <CarouselItem key={i} gutters={gutters}>{slides[i]}</CarouselItem>
  ));

  const actualSlides = slides.map((slide, index) => (
    <CarouselItem key={index} gutters={gutters}>{slide}</CarouselItem>
  ));

  const afterSlides = afterIndices.map(i => (
    <CarouselItem key={i} gutters={gutters}>{slides[i]}</CarouselItem>
  ));

  const carouselEdges = {
    paddingLeft: `${edges[0]}px`,
    paddingRight: `${edges[1]}px`,
  };

  return (
    !!length && (
      <div className="react-swipeable-carousel" style={carouselEdges}>
        {/* <ol className={carouselIndicators}>
          {slides.map((_, index) => (
            <li
              onClick={() => setActive(index)}
              key={index}
              className={`${active === index ? 'active' : ''} ${carouselIndicator}`}
            />
          ))}
        </ol> */}
        <div className="react-swipeable-carousel__wrapper" {...handlers} style={style}>
          {beforeSlides}
          {actualSlides}
          {afterSlides}
        </div>
      </div>
    )
  );
};

const CarouselItem = ({ gutters, children }) => {
  const slideMargin = {
    marginLeft: `${gutters}px`,
    marginRight: `${gutters}px`,
  };

  return <div className="react-swipeable-carousel__item" style={slideMargin}>{children}</div>
}
