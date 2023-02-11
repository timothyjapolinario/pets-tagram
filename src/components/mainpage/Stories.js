import Story from "./Story";
const Stories = ({ storyList }) => {
  console.log("wtf", storyList);
  return (
    <div className="flex">
      {storyList &&
        storyList.map((story) => {
          return <Story profileImg={story.picture} />;
        })}
    </div>
  );
};

export default Stories;
