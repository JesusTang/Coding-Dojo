import React from "react";

function CloseButton(props) {
  const { setElementToLoad } = props;
  return (
    <button
      onClick={() => {
        setElementToLoad("");
      }}
      className="close-btn-tiny btn btn-secondary btn-sm"
    >
      X
    </button>
  );
}

export default CloseButton;
