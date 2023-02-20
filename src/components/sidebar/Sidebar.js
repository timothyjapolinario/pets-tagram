const Sidebar = ({ profileImageUrl, name, userName, user }) => {
  console.log(user);
  return (
    <div className="rounded-full flex flex-row justify-center items-center gap-[1vh] ">
      <div className="bg-gradient-to-r from-[#7928ca] to-[#ff0080] rounded-full">
        <img
          src={profileImageUrl}
          className="rounded-full max-w-full h-14 border-white border-2 m-[0.5vh]"
        />
      </div>
      <div>
        <p className="text-[2.1vh] text-black ">{name}</p>
        <p className="text-[2.1vh] text-gray-700 ">{userName}</p>
      </div>
    </div>
  );
};

export default Sidebar;
