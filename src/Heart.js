import React, { useState } from "react";
import { ReactComponent as Icon } from "./icon.svg";
import { ReactComponent as RedIcon } from "./redIcon.svg";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Heart = () => {
  const [clicked, setClicked] = useState(false);
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div>
        {!clicked ? (
          <Icon
            onClick={() => {
              setClicked(!clicked);
              setCounter(counter + 1);
            }}
          />
        ) : (
          <RedIcon
            onClick={() => {
              setClicked(!clicked);
              setCounter(counter - 1);
            }}
          />
        )}
      </div>
      <h3> {counter} likes</h3>
    </div>
  );
};

export default Heart;
