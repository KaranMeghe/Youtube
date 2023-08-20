import Comment from "./Comment";

const CommentList = ({ comments }) => {
  console.log(comments);
  return comments.map((comment) => {
    return (
      <div key={comment.id}>
        <Comment data={comment} />
        {comment.replies && (
          <div className="pl-5 ml-5 border border-l-gray-700">
            <CommentList comments={comment.replies} />
          </div>
        )}
      </div>
    );
  });
};

export default CommentList;
