import Story from "./Story";
const Stories = ({ storyList }) => {
  return (
    <div className="flex gap-[1.7vw] mb-[6vh]">
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
