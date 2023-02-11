import homeIcon from "../../assets/home-icon.svg";
import searchIcon from "../../assets/search-icon.png";
import messengerIcon from "../../assets/messenger-icon.svg";
import heartIcon from "../../assets/heart-icon.png";
import plusIcon from "../../assets/plus-icon.png";
import profileImg from "../../assets/profile.jpg";
import menuIcon from "../../assets/menu-icon.png";
const Menu = () => {
  return (
    <div className="flex min-h-[80vh] flex-col gap-[6vh] pl-[1.3vw] pr-[7vw]">
      <h1 className="text-3xl font-light my-[4vh]">PetsTagram</h1>
      <div className="flex gap-4 items-center">
        <img src={homeIcon} className="h-[5vh]" />
        <span>Home</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={searchIcon} className="h-[5vh]" />
        <span>Search</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={messengerIcon} className="h-[5vh]" />
        <span>Messages</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={heartIcon} className="h-[5vh]" />
        <span>Notifications</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={plusIcon} className="h-[5vh]" />
        <span>Create</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={profileImg} className="h-[5vh] rounded-full" />
        <span>Profile</span>
      </div>
      <div className="flex gap-4 items-center my-5">
        <img src={menuIcon} className="h-[5vh]" />
        <span>Menu</span>
      </div>
    </div>
  );
};

export default Menu;
