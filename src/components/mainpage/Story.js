const Story = ({ profileImg, firstName }) => {
  return (
    <div className="rounded-full flex flex-col justify-center items-center gap-[1vh] ">
      <div className="bg-gradient-to-r from-[#7928ca] to-[#ff0080] rounded-full">
        <img
          src={profileImg}
          className="rounded-full max-w-full h-14 border-white border-2 m-[0.5vh]"
        />
      </div>

      <span className="text-[1.8vh] text-gray-700 ">{firstName}</span>
    </div>
  );
};

export default Story;
