import React from "react";
import Navbar from "../components/Navbar";

export default function Basket() {
  return (
    <div>
      <Navbar />
      <h1 className=" text-center m-10 text-lg sm:text-xl text text md:text-2xl lg:text-3xl">
        Your Basket is empty at the moment
      </h1>
    </div>
  );
}
