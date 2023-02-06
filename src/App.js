import Counter from "./components/Counter";
import Menu from "./components/menu/Menu";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div className="flex">
      <div>
        <Menu />
      </div>
      <div className="bg-blue-500">
        <MainPage />
      </div>
    </div>
  );
}

export default App;
