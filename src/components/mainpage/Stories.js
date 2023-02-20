import Story from "./Story";
const Stories = ({ storyList }) => {
  return (
    <div className="flex px-2 mb-[8vh] items-stretch overflow-hidden justify-between">
      {storyList &&
        storyList.map((story) => {
          return (
            <Story
              profileImg={story.picture}
              firstName={story.firstName}
              key={story.id}
            />
          );
        })}
    </div>
  );
};

export default Stories;
