import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-container">
        <Navbar />
      </div>
    </div>
  );
}

export default App;
