import React, { useState } from "react";
import useGlobal from "../store";

const BookCollection = () => {
  const [globalState, globalActions] = useGlobal();
  const [state, setState] = useState({ queryText: "" });
  let library = globalState.personalLibrary;

  const goToDetailPage = () => {
    //go to Detail Page
  };

  return (
    <div class="collectionController">
      <input
        class="searchBar"
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
            <li
              key={book.id}
              className="bookItem"
              onClick={() => goToDetailPage()}
            >
              <h4>
                {book.author} - {book.title}
              </h4>
              <p>{book.description.slice(0, 120) + "..."}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookCollection;
