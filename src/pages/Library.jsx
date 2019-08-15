import React from "react";
import useGlobal from "../store";
import BookCollection from "../components/BookCollection";

const Library = () => {
  const [globalState] = useGlobal();

  return (
    <>
      <h3 className="heading">
        Library ({globalState.personalLibrary.length})
      </h3>
      <br />
      <BookCollection />
    </>
  );
};

export default Library;
