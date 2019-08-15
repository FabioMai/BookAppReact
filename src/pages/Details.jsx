import React from "react";
import DetailView from "../components/DetailView";

const Details = props => {
  return (
    <>
      <DetailView bookId={props.id} />
      {/* <button type="button" className="addToLibraryBtn">
        Add to library
      </button> */}
    </>
  );
};

export default Details;
