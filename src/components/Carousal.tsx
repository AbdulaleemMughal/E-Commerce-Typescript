import Carousel from 'react-bootstrap/Carousel';
import { CAROUSEL_IMG_1, CAROUSEL_IMG_2, CAROUSEL_IMG_3 } from '../utils/contants';
import React, { useState } from 'react';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

type CarousalProps = {
    styles: React.CSSProperties;
}

const Carousal = ({ styles }: CarousalProps) => {

  const [index, setIndex] = useState<number>(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex)
  };

  return (
    <>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <img src={CAROUSEL_IMG_1} style={styles} />
        <Carousel.Caption>
          <h3 className='text-'>Latest Trending Electronic Items</h3>
          <p className='text-'>Last call upto 45%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src={CAROUSEL_IMG_2} style={styles} />
        <Carousel.Caption>
          <h3 className='text-'>Latest Trending Electronic Items</h3>
          <p className='text-'>Last call upto 45%</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src={CAROUSEL_IMG_3} style={styles} />
        <Carousel.Caption>
          <h3 className='text-black'>Latest Trending Jewellary Items</h3>
          <p className='text-black'>Last call upto 30%</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </>
  )
}

export default Carousal;
