import Comment from "../models/Comment";

export const addToCounter = (store, amount) => {
  const counter = store.state.counter + amount;
  store.setState({
    counter: counter
  });
};

export const addComment = (store, text, bookId) => {
  const comment = new Comment(bookId, text);
  const commentsCopy = [
    ...store.state.personalLibrary[bookId].comments,
    comment
  ];
  const personalLibrary = store.state.personalLibrary;
  personalLibrary[bookId].comments = commentsCopy;
  store.setState({ personalLibrary: personalLibrary });
};

export const removeComment = (store, commentToRemove) => {
  const updatedComments = store.state.personalLibrary[
    commentToRemove.bookId
  ].comments.filter(comment => {
    return comment.id !== commentToRemove.id;
  });

  const personalLibraryCopy = [...store.state.personalLibrary];
  personalLibraryCopy[commentToRemove.bookId].comments = updatedComments;
  store.setState({ personalLibrary: personalLibraryCopy });
};
