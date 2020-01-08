import React, { PureComponent } from 'react';

import './index.scss';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    console.log('--- slides', {
      slides: props.slides
    });
    const slideIndex = props.slides.length > 0 ? 0 : null;

    this.state = {
      slideIndex,
    }
  }

  changeSlide = (slideIndex) => this.setState({ slideIndex });

  render() {
    const { slides } = this.props;
    const { slideIndex } = this.state;

    console.log('slider render', {
      props: this.props,
      state: this.state,
    });

    if (slideIndex === null) return null;

    return (
      <div className="slider">
        <img src={slides[slideIndex]} alt="slide" />
        <span className="slides__dots">
          {slides.map((slide, index) => (
            <span
              key={slide}
              className={index === slideIndex ? 'slides__dot_active' : null}
              onClick={() => this.changeSlide(index)}
            />
          ))}
        </span>
      </div>
    );
  }
}

export default Slider;