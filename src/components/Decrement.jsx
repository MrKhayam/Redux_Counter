import React from "react";
import { useDispatch } from "react-redux";
import { decrease } from "../features/counter/counterSlice";

const Decrement = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(decrease());
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="text-black bg-white px-5 py-3 rounded-xl"
      >
        Decrement
      </button>
    </>
  );
};

export default Decrement;
