import Counter from "./components/Counter";
import Menu from "./components/menu/Menu";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="flex">
      <div className="border-r-2 h-[100vh]">
        <Menu />
      </div>
      <div className="  mx-[9vw] mt-[9vh]">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
