import React, { useEffect, useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";

const ColorGenerator = () => {
  const [randomColor, setRandomColor] = useState("#ffffff");
  function generateRandomColor() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    const code = `#${red.toString(16).padStart(2, "0")}${green
      .toString(16)
      .padStart(2, "0")}${blue.toString(16).padStart(2, "0")}`;

    setRandomColor(code);
  }

  useEffect(() => {
    generateRandomColor();
  }, []);

  const copyColorCode = async () => {
    const textArea = document.createElement("textarea");
    textArea.value = randomColor;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    textArea.remove();

    toast.success("Color code was copied!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <>
      <div className="color-container">
        <div className="color" style={{ backgroundColor: randomColor }}></div>
        <div className="code">
          <p className="code-value">
            <span>{randomColor}</span>
            <FaRegCopy onClick={copyColorCode} className="code-copy" />
          </p>
          <button onClick={generateRandomColor}>GENERATE</button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ColorGenerator;
