import uniqid from "uniqid";

class Comment {
  constructor(bookId, text) {
    this.id = uniqid();
    this.text = text;
    this.bookId = bookId;
  }

  setText = value => {
    if (value) this.text = value;
  };
}

export default Comment;
