import React, { useState } from "react";
import InputComponent from "./InputComponent";

// first, let me create the object...
const CreateObject = () => {
  const [object, setObject] = useState([]);
  const [objectText, setObjectText] = useState("");

  const handleChange = (e) => {
    setObjectText(e.target.value);
  };

  const handleAddItem = () => {
    const newObject = {
      text: objectText,
      favourite: false,
      id: randomId(),
    };
    setObject((prevObject) => [...prevObject, newObject]);
    setObjectText("");
    console.log(newObject);
  };

  return (
    <>
      <div>
        <InputComponent
          handleAddItem={handleAddItem}
          handleChange={handleChange}
          inputValue={objectText}
        />
      </div>

      <div className="render-list">
        {object.map((item) => (
          <div key={item.id}>{item.text}</div>
        ))}
      </div>
    </>
  );

  function randomId() {
    const randomChar = [
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "J",
      "P",
      "M",
      "D",
      "R",
      "S",
    ];

    let generatedId = "";
    for (let i = 0; i < 6; i++) {
      let randomNumber = Math.floor(Math.random() * randomChar.length);
      generatedId += randomChar[randomNumber];
    }
    return generatedId;
  }
};

export default CreateObject;
