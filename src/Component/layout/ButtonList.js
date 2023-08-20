import Button from "./Button";

const ButtonList = () => {
  const topicList = [
    "All",
    "Mixes",
    "Gaming",
    "Cooking",
    "Finance",
    "Computer Science",
    "AI",
    "ES6",
    "Music",
  ];
  return (
    <div className="flex fixed top-20 bg-white w-full h-12 py-1 mx-1">
      {topicList.map((topic, index) => {
        return <Button name={topic} key={index} />;
      })}
    </div>
  );
};

export default ButtonList;
