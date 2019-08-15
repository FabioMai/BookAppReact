import React from "react";
import useGlobal from "../store";

const BookItem = props => {
  const [globalState, globalActions] = useGlobal();
  const book = globalState.personalLibrary.filter(
    book => book.id === props.bookId
  )[0];
  const goToDetailPage = () => {
    //go to Detail Page
  };

  return (
    <li className="bookItem" onClick={() => goToDetailPage()}>
      <h4>
        {book.author} - {book.title}
      </h4>
      <p>{book.description.slice(0, 120) + "..."}</p>
    </li>
  );
};

export default BookItem;
