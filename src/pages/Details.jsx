import React from "react";
import DetailView from "../components/DetailView";

const Details = props => {
  console.log("a" + props.id);
  return (
    <>
      <DetailView bookId={props.id} />
      <button type="button" className="addToLibraryBtn">
        Add to library
      </button>
    </>
  );
};

export default Details;
