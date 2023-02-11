import Story from "./Story";
const Stories = ({ storyList }) => {
  return (
    <div>
      {storyList.map((story) => {
        return <Story profileImg={story.img} />;
      })}
    </div>
  );
};

export default Stories;
