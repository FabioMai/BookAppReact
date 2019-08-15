import React from "react";
import useGlobal from "../store";
import BookCoverSeneca from "../media/seneca.jpg";
import BookCoverWatts from "../media/watts.jpg";

const DetailView = props => {
  const bookId = +props.bookId;

  const [globalState, globalActions] = useGlobal();
  const book = globalState.personalLibrary[bookId];
  const comments = book.comments;

  const addComment = () => {
    globalActions.addComment(
      document.querySelector(".addCommentInput").value,
      props.id
    );
    document.querySelector(".addCommentInput").value = "";
  };
  const checkForEnter = e => {
    if (e.keyCode === 13) {
      addComment();
    }
  };
  return (
    <>
      <h3 className="heading mt-60">Details</h3>
      <div className="bookDetails">
        <img
          className="bookCoverDetails"
          src={book.id === 0 ? BookCoverWatts : BookCoverSeneca}
          width="100"
        />
        <div>
          <h3>{book.title}</h3>
          <h4>{book.author}</h4>
        </div>
      </div>
      <div className="contentArea">
        <p>{book.description}</p>
        <h4>Comments</h4>
        <ul>
          {comments.map(comment => (
            <li className="comment" key={comment.id}>
              "{comment.text}"
              <button
                className="removeBtn"
                onClick={() => globalActions.removeComment(comment)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
        <input
          className="addCommentInput"
          placeholder="Comment..."
          onKeyDown={e => checkForEnter(e)}
        />
      </div>
    </>
  );
};
export default DetailView;
