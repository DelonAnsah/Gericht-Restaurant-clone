import React, { useRef } from 'react'
import './Gallery.css'
import { BsInstagram, BsArrowLeftShort , BsArrowRightShort} from 'react-icons/bs'
import SubHeading from '../../components/SubHeading/SubHeading'
import gallery1 from '../../assets/gallery04.png'
import gallery2 from '../../assets/gallery03.png'
import gallery3 from '../../assets/gallery02.png'
import gallery4 from '../../assets/gallery01.png'

const images = [gallery1, gallery2, gallery3, gallery4]


const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if(direction === 'left'){
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }


  return (
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="instagram" />
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{ color:'#AAA', marginTop: '2rem' }}>Explore our stunning photo gallery, where moments come alive through captivating visuals.From breathtaking landscapes to intimate portraits, each image tells a unique story of beauty and emotion.</p>
      <button type='button' className='custom__button'>View More</button>
    </div>
    <div className="app__gallery-images">
      <div className="app__gallery-images_container" ref={scrollRef}>
        {images.map((images, index) => (
          <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
            <img src={images} alt="gallery" loading='lazy' />
            <BsInstagram className='gallery__image-icon' />
          </div>
        ))}
      </div>
      <div className="app__gallery-images_arrows">
        <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')} aria-label="Scroll left" />
        <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')} aria-label="Scroll right" />
      </div>
    </div>
  </div>
  )
}

export default Gallery
