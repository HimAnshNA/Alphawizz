import React, { useEffect, useState } from "react";

const ScrollEffect = () => {
  const [currentDiv, setCurrentDiv] = useState(0);
  const totalDivs = 4; // Total number of divs you want to scroll through

  const divRefs = Array.from({ length: totalDivs }, () => React.createRef()); // Refs for each div

  useEffect(() => {
    const onScroll = () => {
      const currentDivIndex = divRefs.findIndex((divRef, index) => {
        const rect = divRef.current.getBoundingClientRect();
        return rect.top >= 0 && rect.top <= window.innerHeight; // Check if div is in the viewport
      });

      if (currentDivIndex !== -1 && currentDivIndex !== currentDiv) {
        setCurrentDiv(currentDivIndex);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [currentDiv, divRefs]);

  useEffect(() => {
    if (currentDiv > 0) {
      document.body.style.overflow = "hidden"; // Lock scroll when a div is visible
    } else {
      document.body.style.overflow = "auto"; // Allow scroll again
    }

    return () => {
      document.body.style.overflow = "auto"; // Ensure scroll is unlocked when exiting the component
    };
  }, [currentDiv]);

  return (
    <div className="relative min-h-screen bg-gray-100">
      {Array.from({ length: totalDivs }).map((_, index) => (
        <div
          key={index}
          ref={divRefs[index]}
          className={`transition-all duration-700 ease-in-out ${
            index === currentDiv
              ? "fixed top-0 left-0 right-0 z-50 w-full h-screen bg-blue-500 text-white flex justify-center items-center"
              : "absolute w-full h-screen bg-gray-300"
          }`}
        >
          <h2 className="text-4xl">{`Div ${index + 1}`}</h2>
        </div>
      ))}
    </div>
  );
};

export default ScrollEffect;
