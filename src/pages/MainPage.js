import Feed from "../components/mainpage/Feed";
import Stories from "../components/mainpage/Stories";
import Menu from "../components/menu/Menu";
import Sidebar from "../components/sidebar/Sidebar";

const MainPage = () => {
  return (
    <div>
      <div>
        <Stories />
        <Feed />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainPage;
