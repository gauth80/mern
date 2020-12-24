import React, {useRef} from 'react';
import useSlide from '../../hooks/useSlide';


const Slide = ({img}) => {
  const slideImg = useRef(null);
  const slideTxt = useRef(null);

  const {rightDirection,leftDirection} = useSlide(
    slideImg,
    slideTxt,
    img
  );

  return (
    <div ref={slideImg} className="wrap-home">
      <div className=" diapo_wrap-home row">
        <div className="col-4 diapo-left_diapo">
          <div onClick={rightDirection} className="btn-arrow">
            <span className="arrow_btn-arrow"></span>
          </div>
        </div>
        <div className="col-4 diapo-center_diapo">
            <p ref={slideTxt}></p>
        </div>
        <div className="col-4 diapo-right_diapo">
          <div onClick={leftDirection} className="btn-arrow">
            <span className="arrow_btn-arrow__inverse"></span>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Slide;
