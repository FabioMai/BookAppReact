import React from "react";
import useGlobal from "../store";

const Details = bookId => {
  const [globalState, globalActions] = useGlobal();
  const book = globalState.personalLibrary[bookId.id];
  const comments = globalState.personalLibrary[bookId.id].comments;

  return (
    <>
      <h3 className="heading">Details</h3>
      <div className="bookDetails">
        <div className="bookCover">Platzhalter</div>
        <div className="text">
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
        </div>
      </div>
      <p>{book.description}</p>

      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            {comment.text}
            <button onClick={() => globalActions.removeComment(comment)}>
              X
            </button>
          </li>
        ))}
      </ul>
      <textarea className="addCommentInput" cols="40" rows="3" />
      <button
        type="button"
        onClick={() =>
          globalActions.addComment(
            document.querySelector(".addCommentInput").value,
            bookId.id
          )
        }
      >
        Add Comment
      </button>
    </>
  );
};

export default Details;
