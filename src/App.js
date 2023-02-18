import Counter from "./components/Counter";
import Menu from "./components/menu/Menu";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="flex lg:flex-row flex-col-reverse p-7 md:p-0">
      <div className="border-r-2 h-[100vh]">
        <Menu />
      </div>
      <div className="md:ml-[24vw] mt-[6.5vh]">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
