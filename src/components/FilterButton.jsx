"use client"
import { useState } from "react";
import Modal from "./Modal";
import { unstable_useViewTransitionState } from "react-router-dom";

const FilterButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        className="w-12 h-12 text-white bg-black hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm text-center inline-flex items-center justify-center gap-3 me-2"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          className="w-6 fill-white"
          viewBox="0 0 1792 1792"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1595 295q17 41-14 70l-493 493v742q0 42-39 59-13 5-25 5-27 0-45-19l-256-256q-19-19-19-45v-486l-493-493q-31-29-14-70 17-39 59-39h1280q42 0 59 39z" />
        </svg>
      </button>
      <Modal setOpen={setIsOpen} isOpen={isOpen} >

      </Modal>
    </>
  );
};
export default FilterButton;
