import {useEffect} from 'react';


const useSlide = (slideImg,slideTxt,img) => {
  let counter = 0;

  //maj du hook
  useEffect(() => beginSlide());

  const beginSlide = () => {
    slideImg.current.style.backgroundImage = `url(${img[0].src})`;
    slideTxt.current.innerHTML = img[0].txt;
  }

  const handleSlide = slide => {
    //props slide sert de key
    slideImg.current.style.backgroundImage = `url(${img[slide - 1].src})`;
    slideTxt.current.innerHTML = img[slide - 1].txt;
    animationSlide(slideImg);
  }

  const animationSlide = () => {
    //plus tard
    /*slideTxt.current.classList.add("fadeIn")
    //timer, après 1000ms, callback => remove.class
      setTimeout( () => {
        slideImg.current.classList.remove("fadeIn");
      },1000);*/
  }

  const rightDirection = () => {
    if(counter === 0) {
      handleSlide(img.length);
      counter = img.length;
    }

    handleSlide(counter);
    counter--;
  }

  const leftDirection = () => {
    if(counter === img.length - 1) {
      beginSlide();
      //counter devient -1 et non une décrémentation fonctionnelle
      counter = -1;
      animationSlide(slideImg);
    }

    slideImg.current.style.backgroundImage = `url(${img[counter + 1].src})`;
    slideTxt.current.innerHTML = img[counter + 1].txt;
    counter++;
    animationSlide(slideImg);
  }

  return {rightDirection, leftDirection};
}

export default useSlide;
