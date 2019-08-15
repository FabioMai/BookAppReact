import React from "react";
import useGlobal from "../store";
import { Link } from "react-router-dom";
import BookCoverSeneca from "../media/seneca.jpg";
import BookCoverWatts from "../media/watts.jpg";

const BookItem = props => {
  const [globalState, globalActions] = useGlobal();
  const book = globalState.personalLibrary.filter(
    book => book.id === props.bookId
  )[0];
  const goToDetailPage = () => {
    //go to Detail Page
  };

  return (
    <Link to={"/books/" + book.id}>
      <li className="bookItem" onClick={() => goToDetailPage()}>
        <img
          className="bookCoverDetails"
          src={book.id === 0 ? BookCoverWatts : BookCoverSeneca}
          width="80"
        />
        <div className="textWrapper">
          <h4>
            {book.author} - {book.title}
          </h4>

          <p>{book.description.slice(0, 120) + "..."}</p>
        </div>
      </li>
    </Link>
  );
};

export default BookItem;
