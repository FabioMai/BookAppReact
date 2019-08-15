import React from "react";
import useGlobal from "../store";
import { Link } from "react-router-dom";

const BookItem = props => {
  const [globalState, globalActions] = useGlobal();
  const book = globalState.personalLibrary.filter(
    book => book.id === props.bookId
  )[0];
  const goToDetailPage = () => {
    //go to Detail Page
  };

  return (
    <Link to={"/details/" + book.id}>
      <li className="bookItem" onClick={() => goToDetailPage()}>
        <h4>
          {book.author} - {book.title}
        </h4>
        <p>{book.description.slice(0, 120) + "..."}</p>
      </li>
    </Link>
  );
};

export default BookItem;
