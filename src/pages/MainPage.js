import { useEffect } from "react";
import Feed from "../components/mainpage/Feed";
import Stories from "../components/mainpage/Stories";
import Menu from "../components/menu/Menu";
import Sidebar from "../components/sidebar/Sidebar";

const MainPage = () => {
  useEffect(() => {
    fetch("https://dummyapi.io/data/v1/user?limit=10", {
      headers: {
        "app-id": "63e1a5056fe57421fc54e735",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
      })
      .then((data) => {
        console.log(data);
      });
  }, []);
  return (
    <div>
      <div>
        <Stories storyList={[]} />
        <Feed />
      </div>
      <div>
        <Sidebar />
      </div>
    </div>
  );
};

export default MainPage;
