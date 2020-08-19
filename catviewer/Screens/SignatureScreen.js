import SignatureScreen from "react-native-signature-canvas";
import React, { useState, createRef, useRef } from "react";

const SignaturePage = ({ text, onOK }) => {
  const ref = useRef();

  const handleSignature = (signature) => {
    console.log(signature);
    // onOK(signature);
  };

  const handleEmpty = () => {
    console.log("Empty");
  };

  const handleClear = () => {
    console.log("clear success!");
  };

  const handleEnd = () => {
    ref.current.readSignature();
  };

  return (
    <SignatureScreen
      ref={ref}
      onEnd={handleEnd}
      onOK={handleSignature}
      onEmpty={handleEmpty}
      onClear={handleClear}
      autoClear={false}
      descriptionText={text}
    />
  );
};

export default SignaturePage;
