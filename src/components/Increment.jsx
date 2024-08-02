import React from "react";
import { useDispatch } from "react-redux";
import { increase } from "../features/counter/counterSlice";

const Increment = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(increase());
  };
  return (
    <>
      <button
        onClick={handleClick}
        className="text-black bg-white px-5 py-3 rounded-xl"
      >
        Increment
      </button>
    </>
  );
};

export default Increment;
