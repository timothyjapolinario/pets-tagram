import Story from "./Story";
const Stories = ({ storyList }) => {
  return (
    <div className="flex gap-[1.7vw]">
      {storyList &&
        storyList.map((story) => {
          return (
            <Story profileImg={story.picture} firstName={story.firstName} />
          );
        })}
    </div>
  );
};

export default Stories;
