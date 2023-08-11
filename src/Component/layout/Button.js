const Button = ({ name }) => {
  return (
    <div>
      <button className="border-2 border-gray-400 py-1 px-4 mx-2 mb-12 rounded-lg ">
        {name}
      </button>
    </div>
  );
};

export default Button;
