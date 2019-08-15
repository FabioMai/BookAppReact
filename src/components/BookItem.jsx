import React from "react";

import useGlobal from "../store";

const BookItem = () => {
  const goToDetailPage = () => {};

  return (
    <li key={book.id} className="bookItem" onClick={() => goToDetailPage()}>
      <h4>
        {book.author} - {book.title}
      </h4>
      <p>{book.description.slice(0, 120) + "..."}</p>
    </li>
  );
};

export default BookItem;
