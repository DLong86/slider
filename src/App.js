import { useState } from "react";
import {BsChevronCompactLeft, BsChevronCompactRight} from "react-icons/bs"
import {RxDotFilled} from "react-icons/rx"

function App() {
  const slides = [
    {url: "https://plus.unsplash.com/premium_photo-1683134242640-fe6baaf4d5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1295&q=80"},
    {url: "https://images.unsplash.com/photo-1579317471790-0e30bd51b55e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
    {url: "https://images.unsplash.com/photo-1503470455884-17ee9a75eace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1138&q=80"},
    {url: "https://images.unsplash.com/photo-1577581692269-8d8ec19cd9fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
    {url: "https://images.unsplash.com/photo-1566238432098-35fc2fa3d908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"},
    {url: "https://images.unsplash.com/photo-1583371885824-39ac944a09b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"},
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const clickRight = () => {
    const lastImg = currentIndex === slides.length - 1
    const nextImg = lastImg ? 0 : currentIndex + 1
    setCurrentIndex(nextImg)
  }

  const clickLeft = () => {
    const firstImg = currentIndex === 0
    const prevImg = firstImg ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(prevImg)
  }

  const goToSlide = (e) => {
    setCurrentIndex(e)
  }

  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group ">
      <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft size={30} onClick={clickLeft} />
      </div>
      <div className="hidden group-hover:block duration-300 absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight size={30} onClick={clickRight} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div key={slideIndex} className="text-2xl cursor-pointer text-gray-300 active:text-gray-700 "><RxDotFilled onClick={() => goToSlide(slideIndex)} /></div>
        ))}
      </div>
    </div>
  );
}

export default App;
