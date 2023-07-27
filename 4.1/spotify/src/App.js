import "./App.css";
import Collection from "./components/collection";
import Content from "./components/content";
import Menu from "./components/menu";
import SongPlayer from "./components/songPlayer";

function App() {
  return (
    <div className="app">
      <div className="wrapper">
        <div className="leftWrapper">
          <Menu />
          <Collection />
        </div>
        <Content />
      </div>
      <SongPlayer />
    </div>
  );
}

export default App;
