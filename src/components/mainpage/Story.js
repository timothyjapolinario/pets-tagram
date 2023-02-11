const Story = ({ profileImg }) => {
  return (
    <div className="rounded-full">
      <img src={profileImg} className="rounded-full h-12" />
    </div>
  );
};

export default Story;
