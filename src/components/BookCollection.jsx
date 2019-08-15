import React, { useState } from "react";
import useGlobal from "../store";
import BookItem from "./BookItem";

const BookCollection = () => {
  const [globalState, globalActions] = useGlobal();
  const [state, setState] = useState({ queryText: "" });
  let library = globalState.personalLibrary;

  return (
    <div className="collectionController">
      <input
        className="searchBar"
        onChange={e => setState({ queryText: e.target.value })}
      />
      <ul>
        {library
          .filter(
            book =>
              book.author.indexOf(state.queryText) >= 0 ||
              book.title.indexOf(state.queryText) >= 0 ||
              book.description.indexOf(state.queryText) >= 0
          )
          .map(book => (
            <BookItem key={book.id} bookId={book.id} />
            // <li
            //   key={book.id}
            //   className="bookItem"
            //   onClick={() => goToDetailPage()}
            // >
            //   <h4>
            //     {book.author} - {book.title}
            //   </h4>
            //   <p>{book.description.slice(0, 120) + "..."}</p>
            // </li>
          ))}
      </ul>
    </div>
  );
};

export default BookCollection;
