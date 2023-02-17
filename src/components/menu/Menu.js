import homeIcon from "../../assets/home-icon.svg";
import searchIcon from "../../assets/search-icon.png";
import messengerIcon from "../../assets/messenger-icon.svg";
import heartIcon from "../../assets/heart-icon.png";
import plusIcon from "../../assets/plus-icon.png";
import profileImg from "../../assets/profile.jpg";
import menuIcon from "../../assets/menu-icon.png";
const Menu = () => {
  return (
    <div className="flex items-center md:items-start min-h-[80vh] flex-col gap-[6vh] md:pl-[1.3vw] md:pr-[5vw] w-[10vw] md:w-[20vw]">
      <h1 className="text-3xl font-light my-[4vh] md:block hidden">
        PetsTagram
      </h1>
      <div className=" my-[4vh] md:hidden">
        <svg
          aria-label="Instagram"
          class="_ab6-"
          color="#262626"
          fill="#262626"
          height="24"
          role="img"
          viewBox="0 0 24 24"
          width="24"
        >
          <path d="M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z"></path>
        </svg>
      </div>
      <div className="flex gap-4 items-center ">
        <img src={homeIcon} className="h-[5vh]" />
        <span className="hidden md:block">Home</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={searchIcon} className="h-[5vh]" />
        <span className="hidden md:block">Search</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={messengerIcon} className="h-[5vh]" />
        <span className="hidden md:block">Messages</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={heartIcon} className="h-[5vh]" />
        <span className="hidden md:block">Notifications</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={plusIcon} className="h-[5vh]" />
        <span className="hidden md:block">Create</span>
      </div>
      <div className="flex gap-4 items-center">
        <img src={profileImg} className="h-[5vh] rounded-full" />
        <span className="hidden md:block">Profile</span>
      </div>
      <div className="flex gap-4 items-center my-5">
        <img src={menuIcon} className="h-[5vh]" />
        <span className="hidden md:block">Menu</span>
      </div>
    </div>
  );
};

export default Menu;
