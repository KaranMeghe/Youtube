import { BiUserCircle } from "react-icons/bi";

const Comment = ({ data }) => {
  const { name, comment } = data;
  return (
    <div>
      <div className="flex bg-gray-100 rounded-lg my-2">
        <div className="flex align-baseline text-3xl">
          <BiUserCircle />
        </div>
        <div>
          <p>{name}</p>
          <p>{comment}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
