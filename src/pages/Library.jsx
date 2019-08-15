import React, { useState } from "react";
import useGlobal from "../store";
import BookCollection from "../components/BookCollection";

const Library = () => {
  const [globalState, globalActions] = useGlobal();

  return (
    <div>
      <h3 className="heading">
        Library ({globalState.personalLibrary.length})
      </h3>
      <br />
      {/* <button onClick={onClickBtn}>Add book</button> */}
      <BookCollection />
    </div>
  );
};

export default Library;
