import Counter from "./components/Counter";
import Menu from "./components/menu/Menu";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="flex lg:flex-row flex-col-reverse">
      <div className="border-r-2 h-[100vh]">
        <Menu />
      </div>
      <div className="ml-[4.3vw] mt-[6.5vh]">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
