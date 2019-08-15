import React, { useState } from "react";
import useGlobal from "../store";
import BookItem from "./BookItem";

const BrowseCollection = () => {
  const [globalState] = useGlobal();
  const [state, setState] = useState({ queryText: "" });
  let library = globalState.friendsLibrary;

  return (
    <div className="collectionController">
      <input
        className="searchBar"
        placeholder="Search friends' collection..."
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
            <div key={book.id}>
              <h5>Josh added this to his library</h5>
              <BookItem bookId={book.id} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default BrowseCollection;
