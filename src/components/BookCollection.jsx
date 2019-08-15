import React, { useState } from "react";
import useGlobal from "../store";
import BookItem from "./BookItem";

const BookCollection = () => {
  const [globalState] = useGlobal();
  const [state, setState] = useState({ queryText: "" });
  let library = globalState.personalLibrary;

  return (
    <div className="collectionController">
      <input
        className="searchBar"
        placeholder="Search your collection..."
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
          ))}
      </ul>
    </div>
  );
};

export default BookCollection;
