import { useEffect, useState } from "react";
import Feed from "../components/mainpage/Feed";
import Stories from "../components/mainpage/Stories";
import Menu from "../components/menu/Menu";
import Sidebar from "../components/sidebar/Sidebar";

const MainPage = () => {
  const [stories, setStories] = useState([]);
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
      .then((response) => {
        setStories(response.data);
      });
  }, []);

  return (
    <div className="flex">
      <div className="w-full lg:w-[40vw]">
        <Stories storyList={stories.slice(0, 6)} />
        <Feed />
      </div>
    </div>
  );
};

export default MainPage;
