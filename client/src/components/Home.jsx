import React, { useEffect, useState } from "react";
import { TfiArrowCircleRight, TfiArrowCircleLeft } from "react-icons/tfi";

const Home = () => {
  const [getImage, setgetImage] = useState([]);
  const [slide, setSlide] = useState(0);

  const handleImageFetch = async () => {
    try {
      const response = await fetch("http://localhost:5000/cuisines");

      if (!response.ok) {
        //response.ok = status in the range 200-299
        throw new Error("Network response was not okkk"); //js keyword: throw to handle exception
      }
      const data = await response.json();
      setgetImage(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    handleImageFetch();
  }, []);

  const previous = () => {
    setSlide(slide - 3);
    if (slide == 0) {
      setSlide(0);
    }
  };
  const next = () => {
    if (getImage.length - 8 === slide) return false;
    setSlide(slide + 3);
  };

  return (
    <div className="hidden lg:block ">
      <div className="flex flex-col items-center mt-8 ">
        <div className="flex flex-col container  bg-white  pt-4 h-[300px] w-[1300px]">
          <div className="flex justify-between">
            <div className="text-sm  font-semibold  h-[25px] pl-4">
              Grab the flavour
            </div>
            <div className="flex gap-2 text-2xl text-black h-[25px] pr-4">
              <TfiArrowCircleLeft
                onClick={previous}
                className="hover:text-teal-800"
              />
              <TfiArrowCircleRight
                onClick={next}
                className="hover:text-teal-800 "
              />
            </div>
          </div>
          <div className="flex overflow-hidden pt-6 pl-4">
            {getImage.map((cuisines, index) => {
              return (
                <div
                  style={{ transform: `translateX(-${slide * 100}%)` }}
                  key={index}
                  className="flex shrink-0  h-[200px] duration-500"
                >
                  <img
                    src={"http://localhost:5000/images/" + cuisines.image}
                    alt=""
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

// new Error('Network response was not ok') creates a new Error
//object with the specified error message, in this case, 'Network response was not ok'.
// throw is a keyword in JavaScript used to throw exceptions. When an exception is thrown,
//the execution of the current function will stop, and control will be passed to the first catch block in the call stack.
