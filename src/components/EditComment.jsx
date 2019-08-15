import React from "react";

//todo remove or add to project
const EditComment = props => {
  const comment = props.comment;
};

return (
  <form>
    <input type="text" onChange={() => comment.setText(e.target.value)}>
      {comment.text}
    </input>
  </form>
);

export default EditComment;
