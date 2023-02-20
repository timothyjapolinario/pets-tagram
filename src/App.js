import { useEffect, useState } from "react";
import Counter from "./components/Counter";
import Menu from "./components/menu/Menu";
import TopMenu from "./components/menu/TopMenu";
import Sidebar from "./components/sidebar/Sidebar";
import MainPage from "./pages/MainPage";

function App() {
  const [mainUser, setMainUser] = useState({});
  useEffect(() => {
    setMainUser({
      id: "60d0fe4f5311236168a109ca",
      title: "ms",
      firstName: "Sara",
      lastName: "Andersen",
      picture: "https://randomuser.me/api/portraits/women/58.jpg",
    });
  }, []);
  return (
    <div className="flex lg:flex-row flex-col-reverse p-3 md:p-0 md:gap-20">
      <div className="border-r-2 h-[100vh]">
        <Menu />
      </div>
      <div className="md:ml-[20vw] md:mt-[6.5vh] mt-[2vh]">
        <MainPage />
      </div>
      <div className="mt-[6.5vh] hidden lg:block">
        <Sidebar
          profileImageUrl={mainUser.picture}
          name={mainUser.firstName}
          userName={mainUser.firstName}
          user={mainUser}
        />
      </div>
      <div className="block md:hidden">
        <TopMenu />
      </div>
    </div>
  );
}

export default App;
